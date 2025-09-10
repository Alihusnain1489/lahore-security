import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface User {
  id: string;
  email: string;
  name: string;
  isVerified: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<{ success: boolean; requiresOTP?: boolean; message?: string }>;
  register: (email: string, password: string, name: string) => Promise<{ success: boolean; message?: string }>;
  verifyOTP: (email: string, otp: string) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('auth_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const register = async (email: string, password: string, name: string): Promise<{ success: boolean; message?: string }> => {
    try {
      // Simulate registration
      const existingUsers = JSON.parse(localStorage.getItem('registered_users') || '[]');
      
      if (existingUsers.find((u: any) => u.email === email)) {
        return { success: false, message: 'Email already registered' };
      }

      const otp = generateOTP();
      const newUser = {
        id: Date.now().toString(),
        email,
        password,
        name,
        isVerified: false,
        otp,
        otpExpiry: Date.now() + 5 * 60 * 1000 // 5 minutes
      };

      existingUsers.push(newUser);
      localStorage.setItem('registered_users', JSON.stringify(existingUsers));
      
      // Simulate sending email
      console.log(`OTP sent to ${email}: ${otp}`);
      alert(`Verification OTP sent to ${email}: ${otp} (This is a demo - check console)`);
      
      return { success: true, message: 'Registration successful! Please check your email for OTP verification.' };
    } catch (error) {
      return { success: false, message: 'Registration failed' };
    }
  };

  const verifyOTP = async (email: string, otp: string): Promise<{ success: boolean; message?: string }> => {
    try {
      const users = JSON.parse(localStorage.getItem('registered_users') || '[]');
      const userIndex = users.findIndex((u: any) => u.email === email);
      
      if (userIndex === -1) {
        return { success: false, message: 'User not found' };
      }

      const user = users[userIndex];
      
      if (user.otp !== otp) {
        return { success: false, message: 'Invalid OTP' };
      }

      if (Date.now() > user.otpExpiry) {
        return { success: false, message: 'OTP expired' };
      }

      // Mark user as verified
      users[userIndex].isVerified = true;
      localStorage.setItem('registered_users', JSON.stringify(users));

      return { success: true, message: 'Email verified successfully!' };
    } catch (error) {
      return { success: false, message: 'Verification failed' };
    }
  };

  const login = async (email: string, password: string): Promise<{ success: boolean; requiresOTP?: boolean; message?: string }> => {
    try {
      const users = JSON.parse(localStorage.getItem('registered_users') || '[]');
      const foundUser = users.find((u: any) => u.email === email && u.password === password);
      
      if (!foundUser) {
        return { success: false, message: 'Invalid email or password' };
      }

      if (!foundUser.isVerified) {
        const otp = generateOTP();
        const userIndex = users.findIndex((u: any) => u.email === email);
        users[userIndex].otp = otp;
        users[userIndex].otpExpiry = Date.now() + 5 * 60 * 1000;
        localStorage.setItem('registered_users', JSON.stringify(users));
        
        console.log(`OTP sent to ${email}: ${otp}`);
        alert(`Please verify your email. OTP: ${otp} (This is a demo - check console)`);
        
        return { success: false, requiresOTP: true, message: 'Please verify your email first' };
      }

      const authUser: User = {
        id: foundUser.id,
        email: foundUser.email,
        name: foundUser.name,
        isVerified: foundUser.isVerified
      };

      setUser(authUser);
      localStorage.setItem('auth_user', JSON.stringify(authUser));
      
      return { success: true, message: 'Login successful!' };
    } catch (error) {
      return { success: false, message: 'Login failed' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('auth_user');
  };

  const value: AuthContextType = {
    user,
    login,
    register,
    verifyOTP,
    logout,
    isLoading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
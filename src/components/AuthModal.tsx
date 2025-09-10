import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Login } from './Login';
import { Register } from './Register';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialView?: 'login' | 'register';
}

export const AuthModal: React.FC<AuthModalProps> = ({ 
  isOpen, 
  onClose, 
  initialView = 'login' 
}) => {
  const [currentView, setCurrentView] = useState(initialView);

  const handleSwitchToRegister = () => setCurrentView('register');
  const handleSwitchToLogin = () => setCurrentView('login');

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        {currentView === 'login' ? (
          <Login 
            onSwitchToRegister={handleSwitchToRegister}
            onClose={onClose}
          />
        ) : (
          <Register 
            onSwitchToLogin={handleSwitchToLogin}
            onClose={onClose}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
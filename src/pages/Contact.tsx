import { LahoreSecurityNavbar } from "@/components/LahoreSecurityNavbar";
import { LahoreSecurityFooter } from "@/components/LahoreSecurityFooter";
import { HeroSection } from "@/components/HeroSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import contactHero from "@/assets/contact-hero.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <LahoreSecurityNavbar />
      <HeroSection
        title="Contact Lahore Security"
        subtitle="Get in touch with our security experts. We're here to help you find the right security solutions for your needs."
        backgroundImage={contactHero}
      />
      
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lahore-navy">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+92-326-1052244" />
                  </div>
                  
                  <div>
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input id="company" placeholder="Your company name" />
                  </div>
                  
                  <div>
                    <Label htmlFor="service">Service Interested In</Label>
                    <select className="w-full p-2 border border-gray-300 rounded-md">
                      <option value="">Select a service</option>
                      <option value="manned-guarding">Manned Guarding</option>
                      <option value="mobile-patrol">Mobile Patrol</option>
                      <option value="cctv-monitoring">CCTV Monitoring</option>
                      <option value="event-security">Event Security</option>
                      <option value="corporate-solutions">Corporate Solutions</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your security needs..."
                      className="min-h-32"
                    />
                  </div>
                  
                  <Button className="w-full bg-lahore-red hover:bg-lahore-red/90 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lahore-navy flex items-center">
                    <Phone className="h-5 w-5 mr-2" />
                    Phone Numbers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium">Emergency Hotline</p>
                      <p className="text-lahore-red text-lg">+92-326-1052244</p>
                    </div>
                    <div>
                      <p className="font-medium">General Inquiries</p>
                      <p className="text-lahore-gray">+92-326-1052244</p>
                    </div>
                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <p className="text-lahore-gray">+92-326-1052244</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lahore-navy flex items-center">
                    <Mail className="h-5 w-5 mr-2" />
                    Email Addresses
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium">General Information</p>
                      <p className="text-lahore-gray">contact@lahore-security.com</p>
                    </div>
                    <div>
                      <p className="font-medium">Sales & Quotes</p>
                      <p className="text-lahore-gray">sales@lahore-security.com</p>
                    </div>
                    <div>
                      <p className="font-medium">Careers</p>
                      <p className="text-lahore-gray">careers@lahore-security.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lahore-navy flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    Office Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lahore-gray mb-2">
                    DHA Phase 5<br />
                    Lahore, Punjab<br />
                    Pakistan
                  </p>
                  <div className="mt-4">
                    <iframe
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108888.85634025728!2d74.24895!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lahore-navy flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-lahore-gray">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Emergency Only</span>
                    </div>
                    <div className="text-lahore-red font-medium mt-3">
                      24/7 Emergency Services Available
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-lahore-navy mb-4">Need Immediate Assistance?</h2>
            <p className="text-lahore-gray mb-6">
              For urgent security matters or emergency situations, contact our 24/7 hotline.
            </p>
            <Button size="lg" className="bg-lahore-red hover:bg-lahore-red/90 text-white">
              Call Emergency Hotline
            </Button>
          </div>
        </div>
      </div>
      
      <LahoreSecurityFooter />
    </div>
  );
};

export default Contact;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-securitas-navy mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our security experts. We're here to help you find the right 
            security solutions for your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-securitas-navy">Send Us a Message</CardTitle>
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
                  <Input id="phone" placeholder="+92 XXX XXXXXXX" />
                </div>
                
                <div>
                  <Label htmlFor="company">Company (Optional)</Label>
                  <Input id="company" placeholder="Your company name" />
                </div>
                
                <div>
                  <Label htmlFor="service">Service Interested In</Label>
                  <select className="w-full p-2 border border-gray-300 rounded-md">
                    <option value="">Select a service</option>
                    <option value="security-guards">Security Guards</option>
                    <option value="mobile-patrol">Mobile Patrol</option>
                    <option value="access-control">Access Control</option>
                    <option value="event-security">Event Security</option>
                    <option value="consultation">Security Consultation</option>
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
                
                <Button className="w-full bg-securitas-red hover:bg-securitas-red/90">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-securitas-navy flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Phone Numbers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">Emergency Hotline</p>
                    <p className="text-securitas-red text-lg">+92 300 1234567</p>
                  </div>
                  <div>
                    <p className="font-medium">General Inquiries</p>
                    <p className="text-gray-600">+92 42 1234567</p>
                  </div>
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-gray-600">+92 300 1234567</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-securitas-navy flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  Email Addresses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">General Information</p>
                    <p className="text-gray-600">info@guardianshield.pk</p>
                  </div>
                  <div>
                    <p className="font-medium">Sales & Quotes</p>
                    <p className="text-gray-600">sales@guardianshield.pk</p>
                  </div>
                  <div>
                    <p className="font-medium">Careers</p>
                    <p className="text-gray-600">careers@guardianshield.pk</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-securitas-navy flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Office Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">
                  123 Security Plaza, Gulberg III<br />
                  Lahore, Punjab 54000<br />
                  Pakistan
                </p>
                <Button variant="outline" className="mt-2">
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-securitas-navy flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-600">
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
                  <div className="text-securitas-red font-medium mt-3">
                    24/7 Emergency Services Available
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-securitas-navy mb-4">Need Immediate Assistance?</h2>
          <p className="text-gray-600 mb-6">
            For urgent security matters or emergency situations, contact our 24/7 hotline.
          </p>
          <Button size="lg" className="bg-securitas-red hover:bg-securitas-red/90">
            Call Emergency Hotline
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
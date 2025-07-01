'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  CheckCircle
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-qpi-navy mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reach out to us for a free consultation or any inquiries. Our team is ready to help you with your AC cleaning needs.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                  <Phone className="h-8 w-8 text-qpi-green" />
                </div>
                <h3 className="text-lg font-semibold text-qpi-navy mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">Available 24/7 for emergencies</p>
                <a href="tel:5551234567" className="text-qpi-green font-semibold text-lg hover:text-qpi-green-dark">
                  (555) 123-4567
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                  <Mail className="h-8 w-8 text-qpi-navy" />
                </div>
                <h3 className="text-lg font-semibold text-qpi-navy mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">We'll respond within 24 hours</p>
                <a href="mailto:info@qpitechnical.com" className="text-qpi-green font-semibold hover:text-qpi-green-dark">
                  info@qpitechnical.com
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-qpi-navy mb-2">Visit Us</h3>
                <p className="text-gray-600 mb-4">Our service area covers the entire region</p>
                <address className="text-qpi-green font-semibold not-italic">
                  123 Service Street<br />
                  City, ST 12345
                </address>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-qpi-navy">Request a Free Quote</CardTitle>
                <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent className="p-8">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-qpi-green mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-qpi-navy mb-2">Thank You!</h3>
                    <p className="text-gray-600">Your message has been sent successfully. We'll contact you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="mt-1"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-1"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="mt-1"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <Label htmlFor="service">Service Needed</Label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 bg-white shadow-sm focus:border-qpi-green focus:outline-none focus:ring-1 focus:ring-qpi-green"
                        >
                          <option value="">Select a service</option>
                          <option value="ac-cleaning">AC Deep Cleaning</option>
                          <option value="ac-installation">AC Installation</option>
                          <option value="maintenance">Maintenance Plan</option>
                          <option value="emergency">Emergency Repair</option>
                          <option value="air-quality">Air Quality Testing</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="mt-1"
                        placeholder="Please describe your AC cleaning needs or any questions you have..."
                      />
                    </div>

                    <Button type="submit" className="w-full bg-qpi-green hover:bg-qpi-green-dark text-white text-lg py-3">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Map and Hours */}
            <div className="space-y-8">
              {/* Embedded Map */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-qpi-navy">Our Location</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="h-80 bg-gray-200 rounded-b-lg flex items-center justify-center">
                    {/* This would be replaced with an actual Google Maps embed */}
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">Interactive Map</p>
                      <p className="text-sm text-gray-500">123 Service Street, City, ST 12345</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-qpi-navy">
                    <Clock className="mr-2 h-5 w-5" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-semibold">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-semibold">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-semibold">Emergency Only</span>
                    </div>
                    <div className="border-t pt-3 mt-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Emergency Service</span>
                        <span className="font-semibold text-red-600">24/7 Available</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Service Areas */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-qpi-navy">Service Areas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">We proudly serve the following areas:</p>
                  <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    <li>• Downtown</li>
                    <li>• North Side</li>
                    <li>• East Valley</li>
                    <li>• West Hills</li>
                    <li>• South Bay</li>
                    <li>• Suburbs</li>
                  </ul>
                  <p className="text-sm text-gray-500 mt-4">
                    Don't see your area listed? Call us to check if we service your location.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact CTA */}
      <section className="py-20 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Emergency AC Service?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            We're available 24/7 for emergency AC repairs and urgent situations.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-4">
            <Phone className="mr-2 h-5 w-5" />
            Call Emergency Line: (555) 123-4567
          </Button>
        </div>
      </section>
    </div>
  );
}
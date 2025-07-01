import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Wind, 
  Shield, 
  Wrench, 
  Users, 
  Star, 
  CheckCircle, 
  Phone,
  ArrowRight,
  Snowflake,
  Leaf,
  Clock
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-qpi-navy leading-tight">
                Breathe Easy with 
                <span className="text-qpi-green block">Professional AC Cleaning</span>
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                Clean air starts with a clean system. Our expert technicians ensure your AC units run efficiently while providing the freshest, healthiest air for your home or office.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button size="lg" className="bg-qpi-green hover:bg-qpi-green-dark text-white text-lg px-8 py-4">
                  Get Your Free Quote Today!
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-qpi-green text-qpi-green hover:bg-green-50">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (555) 123-4567
                </Button>
              </div>
              <div className="flex items-center space-x-6 mt-8">
                <div className="flex items-center space-x-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">4.9/5 from 200+ reviews</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-2xl p-8 shadow-xl">
                <img 
                  src="/360_F_756660751_nRcfkXIkqFsIsWM8O3HfL7aZrHmzYYTb.jpg" 
                  alt="Modern air conditioning unit with cooling airflow in living room" 
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-qpi-green" />
                  <span className="font-semibold">Licensed & Insured</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-qpi-navy">Our Professional Services</h2>
            <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
              Comprehensive AC solutions to keep your air clean, fresh, and your system running at peak performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 group-hover:bg-qpi-green transition-colors duration-300">
                  <Wind className="h-8 w-8 text-qpi-green group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-qpi-navy mb-4">Deep AC Cleaning</h3>
                <p className="text-gray-600 leading-relaxed">
                  Thorough cleaning of your AC unit including coils, filters, and ducts to improve air quality and system efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 group-hover:bg-qpi-navy transition-colors duration-300">
                  <Snowflake className="h-8 w-8 text-qpi-navy group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-qpi-navy mb-4">AC Installation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Professional AC installation with a focus on efficiency, reliability, and optimal placement for maximum cooling.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 group-hover:bg-orange-600 transition-colors duration-300">
                  <Wrench className="h-8 w-8 text-orange-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-qpi-navy mb-4">Maintenance Plans</h3>
                <p className="text-gray-600 leading-relaxed">
                  Regular maintenance packages to keep your AC running smoothly all year long with preventive care and tune-ups.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-qpi-green text-qpi-green hover:bg-green-50">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-qpi-navy">Why Choose QPI Technical Services?</h2>
            <p className="text-xl text-gray-600 mt-4">
              We're committed to delivering exceptional service and results you can trust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-qpi-navy p-4 rounded-full w-16 h-16 mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-qpi-navy mb-2">Expert Technicians</h3>
              <p className="text-gray-600">Certified professionals with years of experience in AC cleaning and maintenance.</p>
            </div>

            <div className="text-center">
              <div className="bg-qpi-green p-4 rounded-full w-16 h-16 mx-auto mb-6">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-qpi-navy mb-2">Eco-Friendly Solutions</h3>
              <p className="text-gray-600">We use environmentally safe cleaning products that are safe for your family and pets.</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-600 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-qpi-navy mb-2">Affordable Pricing</h3>
              <p className="text-gray-600">Competitive rates with transparent pricing and no hidden fees. Quality service at fair prices.</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-qpi-navy mb-2">24/7 Emergency Service</h3>
              <p className="text-gray-600">Round-the-clock emergency service available when you need us most.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-qpi-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready for Cleaner, Fresher Air?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Don't wait – get your free consultation today and start breathing easier tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-qpi-green hover:bg-gray-100 text-lg px-8 py-4">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-qpi-green text-lg px-8 py-4">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
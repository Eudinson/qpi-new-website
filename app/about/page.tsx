import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Award, 
  Clock, 
  Shield,
  CheckCircle,
  ArrowRight,
  Leaf,
  Heart,
  Target,
  Zap
} from 'lucide-react';
import Link from 'next/link';

export default function About() {
  const teamMembers = [
    {
      name: "David Thompson",
      role: "Founder & Lead Technician",
      experience: "15+ years",
      certifications: ["EPA Certified", "HVAC Master"],
      image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Maria Garcia",
      role: "Senior AC Specialist",
      experience: "12+ years",
      certifications: ["NATE Certified", "Indoor Air Quality"],
      image: "https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "James Wilson",
      role: "Installation Expert",
      experience: "10+ years",
      certifications: ["Licensed Contractor", "Energy Efficiency"],
      image: "https://images.pexels.com/photos/5632389/pexels-photo-5632389.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Ashley Chen",
      role: "Customer Service Manager",
      experience: "8+ years",
      certifications: ["Customer Excellence", "Quality Assurance"],
      image: "https://images.pexels.com/photos/5632398/pexels-photo-5632398.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Our certified technicians have years of experience and ongoing training in the latest AC cleaning and maintenance techniques."
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Approach",
      description: "We use environmentally safe cleaning products that are effective yet gentle on your system and safe for your family."
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed, bonded, and insured for your peace of mind. We stand behind our work with comprehensive warranties."
    },
    {
      icon: Heart,
      title: "Customer-First Service",
      description: "Your satisfaction is our priority. We provide transparent pricing, reliable service, and exceptional customer support."
    },
    {
      icon: Zap,
      title: "Advanced Equipment",
      description: "We use state-of-the-art cleaning equipment and techniques to ensure thorough, effective service every time."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "We work around your schedule with convenient appointment times and emergency service available 24/7."
    }
  ];

  const stats = [
    { number: "500+", label: "Satisfied Customers" },
    { number: "15", label: "Years Experience" },
    { number: "24/7", label: "Emergency Service" },
    { number: "99%", label: "Customer Satisfaction" }
  ];

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-qpi-navy mb-6">
                About QPI Technical Services
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                With over 15 years of experience, we are committed to providing top-notch air conditioning cleaning and maintenance services. Our mission is to ensure that every customer enjoys clean, fresh air in their home or office.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/IMG_20220423_110828_107.webp" 
                alt="Professional AC cleaning technicians at work in commercial space" 
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-qpi-green mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                  <Target className="h-8 w-8 text-qpi-green" />
                </div>
                <h3 className="text-xl font-semibold text-qpi-navy mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide exceptional AC cleaning and maintenance services that improve indoor air quality, enhance system efficiency, and ensure customer satisfaction through professional excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                  <Heart className="h-8 w-8 text-qpi-navy" />
                </div>
                <h3 className="text-xl font-semibold text-qpi-navy mb-4">Our Values</h3>
                <p className="text-gray-600 leading-relaxed">
                  We believe in integrity, quality craftsmanship, environmental responsibility, and treating every customer like family. These values guide everything we do.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                  <Award className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-qpi-navy mb-4">Our Commitment</h3>
                <p className="text-gray-600 leading-relaxed">
                  We're committed to delivering outstanding results, using eco-friendly products, maintaining fair pricing, and providing reliable service you can count on.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-qpi-navy">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600 mt-4">
              Our certified professionals are dedicated to providing you with the highest quality service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold text-qpi-navy mb-1">{member.name}</h3>
                  <p className="text-qpi-green font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-4">{member.experience} experience</p>
                  <div className="space-y-1">
                    {member.certifications.map((cert, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-qpi-navy">Why Choose QPI Technical Services?</h2>
            <p className="text-xl text-gray-600 mt-4">
              We pride ourselves on our professional team, eco-friendly solutions, and affordable pricing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="bg-green-100 p-3 rounded-lg w-fit mb-6">
                    <item.icon className="h-6 w-6 text-qpi-green" />
                  </div>
                  <h3 className="text-lg font-semibold text-qpi-navy mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-qpi-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Founded in 2009 by David Thompson, QPI Technical Services started as a small family business with a simple mission: to help people breathe cleaner, healthier air. Over the years, we've grown into a trusted name in AC cleaning and maintenance, serving hundreds of satisfied customers throughout the region.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Our commitment to quality, customer service, and environmental responsibility has remained unchanged as we've expanded our team and services. Today, we're proud to be the preferred choice for homeowners and businesses seeking professional AC care.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-qpi-navy mb-6">
            Ready to Experience the QPI Technical Services Difference?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of satisfied customers who trust us with their AC cleaning and maintenance needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-qpi-green hover:bg-qpi-green-dark text-white text-lg px-8 py-4">
                Get Your Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-qpi-green text-qpi-green hover:bg-green-50 text-lg px-8 py-4">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
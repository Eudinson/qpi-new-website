import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Wind, 
  Snowflake, 
  Wrench, 
  TestTube, 
  Zap, 
  Shield,
  CheckCircle,
  Star,
  Quote,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      icon: Wind,
      title: "Deep AC Cleaning",
      price: "Starting at $99",
      description: "Comprehensive cleaning of your entire AC system including coils, filters, ducts, and vents.",
      features: [
        "Evaporator and condenser coil cleaning",
        "Filter replacement or cleaning",
        "Duct sanitization",
        "Drain line cleaning",
        "Complete system inspection"
      ],
      color: "green"
    },
    {
      icon: Snowflake,
      title: "AC Installation",
      price: "Starting at $499",
      description: "Professional installation of new AC units with optimal placement and configuration.",
      features: [
        "Site assessment and consultation",
        "Professional installation",
        "System testing and calibration",
        "1-year installation warranty",
        "Energy efficiency optimization"
      ],
      color: "blue"
    },
    {
      icon: Wrench,
      title: "Maintenance Plans",
      price: "Starting at $149/year",
      description: "Regular maintenance packages to keep your AC running efficiently year-round.",
      features: [
        "Bi-annual system tune-ups",
        "Priority emergency service",
        "Filter replacement included",
        "Performance monitoring",
        "Extended equipment life"
      ],
      color: "orange"
    },
    {
      icon: TestTube,
      title: "Air Quality Testing",
      price: "Starting at $79",
      description: "Comprehensive air quality assessment to identify pollutants and allergens.",
      features: [
        "Allergen detection",
        "Mold and bacteria testing",
        "Chemical pollutant analysis",
        "Detailed report with recommendations",
        "Follow-up consultation"
      ],
      color: "purple"
    },
    {
      icon: Zap,
      title: "Emergency Repairs",
      price: "Starting at $129",
      description: "24/7 emergency repair service for urgent AC issues and breakdowns.",
      features: [
        "24/7 availability",
        "Rapid response time",
        "On-site diagnostics",
        "Emergency parts inventory",
        "Same-day service when possible"
      ],
      color: "red"
    },
    {
      icon: Shield,
      title: "UV Light Installation",
      price: "Starting at $299",
      description: "UV germicidal lights to eliminate bacteria, viruses, and mold in your AC system.",
      features: [
        "Professional UV light installation",
        "Kills 99.9% of germs and bacteria",
        "Reduces mold and mildew",
        "Improves indoor air quality",
        "Long-lasting LED UV lights"
      ],
      color: "indigo"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "CleanAir Pro transformed our office air quality! The team was professional, thorough, and the difference was immediate. Our employees have noticed cleaner, fresher air."
    },
    {
      name: "Mike Chen",
      rating: 5,
      text: "Excellent service from start to finish. They cleaned our home AC system and it's running more efficiently than ever. Fair pricing and great customer service."
    },
    {
      name: "Lisa Rodriguez",
      rating: 5,
      text: "The maintenance plan has been worth every penny. Regular tune-ups keep our AC running smoothly, and we've avoided any major breakdowns. Highly recommend!"
    }
  ];

  const faqs = [
    {
      question: "How often should I have my AC cleaned?",
      answer: "We recommend professional AC cleaning at least once a year, ideally before the cooling season begins. However, if you have pets, allergies, or live in a dusty environment, bi-annual cleaning may be beneficial."
    },
    {
      question: "What's included in a deep AC cleaning?",
      answer: "Our deep cleaning service includes cleaning of evaporator and condenser coils, filter replacement or cleaning, duct sanitization, drain line cleaning, and a complete system inspection to identify any potential issues."
    },
    {
      question: "How long does an AC cleaning service take?",
      answer: "Typically, a thorough AC cleaning takes 2-4 hours depending on the size and condition of your system. We'll provide an estimated timeframe when we assess your unit."
    },
    {
      question: "Do you offer emergency services?",
      answer: "Yes, we provide 24/7 emergency AC repair services. Our emergency team is available for urgent situations, and we strive to provide same-day service whenever possible."
    },
    {
      question: "Are your cleaning products safe?",
      answer: "Absolutely! We use only eco-friendly, non-toxic cleaning products that are safe for your family, pets, and the environment. Our products are effective yet gentle on your AC system."
    },
    {
      question: "Do you provide warranties on your services?",
      answer: "Yes, we stand behind our work with comprehensive warranties. Installation services come with a 1-year warranty, and all our cleaning and maintenance services include a satisfaction guarantee."
    }
  ];

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-qpi-navy mb-6">
            Professional AC Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive air conditioning solutions to keep your system running efficiently and your air clean and fresh.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className={`${service.color === 'green' ? 'bg-green-100' : service.color === 'blue' ? 'bg-blue-100' : service.color === 'orange' ? 'bg-orange-100' : service.color === 'purple' ? 'bg-purple-100' : service.color === 'red' ? 'bg-red-100' : 'bg-indigo-100'} p-4 rounded-full w-16 h-16 mx-auto mb-4`}>
                    <service.icon className={`h-8 w-8 ${service.color === 'green' ? 'text-qpi-green' : service.color === 'blue' ? 'text-qpi-navy' : service.color === 'orange' ? 'text-orange-600' : service.color === 'purple' ? 'text-purple-600' : service.color === 'red' ? 'text-red-600' : 'text-indigo-600'}`} />
                  </div>
                  <CardTitle className="text-xl text-qpi-navy">{service.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit mx-auto">
                    {service.price}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-qpi-green mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-qpi-green hover:bg-qpi-green-dark text-white">
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-qpi-navy">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 mt-4">
              Don't just take our word for it – hear from satisfied customers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <Quote className="h-8 w-8 text-green-200 mb-4" />
                  <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <p className="font-semibold text-qpi-navy">– {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-qpi-navy">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 mt-4">
              Get answers to common questions about our AC cleaning services.
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-lg font-semibold text-qpi-navy mb-4">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-qpi-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Schedule Your Service?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Contact us today for a free consultation and discover the difference professional AC cleaning can make.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-qpi-green hover:bg-gray-100 text-lg px-8 py-4">
              Get Your Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
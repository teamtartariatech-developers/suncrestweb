import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, TrendingUp, Users, Award, Star, Calendar, CheckCircle } from 'lucide-react';
import Stats from './Stats';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section 
      id = 'hero'
      className="relative text-white overflow-hidden">

  {/* Background Video */}
  <video
    className="absolute inset-0 w-full h-full object-cover"
    src="https://v1.pinimg.com/videos/mc/720p/78/f6/c8/78f6c862362e64768d0f156db81e6d1b.mp4"
    autoPlay
    loop
    muted
    playsInline
  ></video>

  {/* Optional overlays for readability */}
  <div className="absolute inset-0 bg-black/40"></div>
  <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-transparent"></div>

  <div className="relative container-custom section-padding">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
      <div className="animate-slide-up">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Your Financial
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 to-accent-300">
            Success Partner
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
          Expert financial consulting services tailored to help you achieve your goals. 
          From investment planning to business finance, we're here to guide your journey.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link
            to="/contact"
            className="btn-accent text-lg px-8 py-4 flex items-center justify-center space-x-2"
          >
            <Calendar className="h-5 w-5" />
            <span>Book Free Consultation</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            to="/services"
            className="btn-outline text-lg px-8 py-4 flex items-center justify-center space-x-2 border-white text-white hover:bg-white hover:text-primary-900"
          >
            <span>Our Services</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        {/* Stats */}
        <Stats />
      </div>

      {/* Hero Image */}
      <div
        className="relative animate-slide-up"
        style={{ animationDelay: "0.3s" }}
      >
        <div className="relative">
          {/* Floating Card */}
          {/* <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl animate-bounce-subtle">
            <div className="flex items-center space-x-4">
              <div className="bg-secondary-100 p-3 rounded-lg">
                <TrendingUp className="h-8 w-8 text-secondary-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">+23.5%</div>
                <div className="text-gray-600">Portfolio Growth</div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Services Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Financial
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600"> Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer a complete range of financial services designed to help you build, 
              protect, and grow your wealth with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Investment Planning',
                description: 'Strategic investment solutions tailored to your risk tolerance and financial goals.',
                color: 'text-primary-600',
                bgColor: 'bg-primary-100',
              },
              {
                icon: Shield,
                title: 'Risk Management',
                description: 'Comprehensive protection strategies to safeguard your financial future.',
                color: 'text-secondary-600',
                bgColor: 'bg-secondary-100',
              },
              {
                icon: Users,
                title: 'Retirement Planning',
                description: 'Secure your golden years with personalized retirement planning strategies.',
                color: 'text-accent-600',
                bgColor: 'bg-accent-100',
              },
              {
                icon: Award,
                title: 'Tax Optimization',
                description: 'Minimize tax liability while maximizing your financial opportunities.',
                color: 'text-primary-600',
                bgColor: 'bg-primary-100',
              },
              {
                icon: TrendingUp,
                title: 'Business Finance',
                description: 'Strategic financial guidance to help your business thrive and grow.',
                color: 'text-secondary-600',
                bgColor: 'bg-secondary-100',
              },
              {
                icon: Shield,
                title: 'Estate Planning',
                description: 'Preserve and transfer your wealth according to your wishes.',
                color: 'text-accent-600',
                bgColor: 'bg-accent-100',
              },
            ].map((service, index) => (
              <div 
                key={service.title}
                className="card p-8 group hover:border-primary-200 border border-transparent animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${service.bgColor} p-4 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <Link 
                  to="/services" 
                  className={`${service.color} font-medium hover:underline flex items-center space-x-2 group`}
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-finance-green text-white">
  <div className="container-custom">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="animate-slide-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          Why Choose{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-secondary-300 drop-shadow">
            Suncrest Finance?
          </span>
        </h2>

        <div className="space-y-6">
          {[
            {
              title: "Expert Guidance",
              description:
                "Certified financial advisors with decades of combined experience in wealth management.",
            },
            {
              title: "Personalized Solutions",
              description:
                "Tailored financial strategies that align with your unique goals and circumstances.",
            },
            {
              title: "Transparent Approach",
              description:
                "Clear communication, no hidden fees, and complete transparency in all our services.",
            },
            {
              title: "Proven Track Record",
              description:
                "Consistent results and satisfied clients who trust us with their financial future.",
            },
          ].map((feature) => (
            <div key={feature.title} className="flex items-start space-x-4">
              <div className="bg-white/10 p-2 rounded-lg flex-shrink-0 ring-1 ring-white/20">
                <CheckCircle className="h-6 w-6 text-[#F97316]" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">
                  {feature.title}
                </h4>
                <p className="text-white/80 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
        <img
          src="assets/img1.webp"
          alt="Professional Financial Team"
          className="rounded-2xl shadow-2xl w-full h-[400px] md:h-[600px] object-cover ring-1 ring-white/10"
        />
      </div>
    </div>
  </div>
</section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600"> Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Small Business Owner',
                image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
                content: 'Suncrest Finance transformed my business finances. Their expert advice helped me increase profitability by 40% in just one year.',
                rating: 5,
              },
              {
                name: 'Michael Chen',
                role: 'Retired Engineer',
                image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=200',
                content: 'Thanks to their retirement planning, I\'m now enjoying a comfortable retirement with peace of mind about my financial security.',
                rating: 5,
              },
              {
                name: 'Emily Rodriguez',
                role: 'Marketing Executive',
                image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200',
                content: 'Professional, knowledgeable, and truly caring. They helped me achieve my investment goals faster than I ever imagined.',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div 
                key={testimonial.name}
                className="card p-8 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-finance-green text-white">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Financial Future?
            </h2>
            <p className="text-xl text-primary-100 mb-12 leading-relaxed">
              Take the first step towards financial success. Schedule your free consultation 
              today and discover how we can help you achieve your financial goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-accent text-lg px-8 py-4 flex items-center justify-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Schedule Free Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/services" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Explore Our Services</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
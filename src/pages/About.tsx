import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Target, Heart, Calendar, ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-finance-green text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 to-accent-300"> Suncrest Finance</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
              Your trusted partner in achieving financial success. We've been helping 
              individuals and businesses build wealth and secure their future for over 15 years.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Our
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600"> Story</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2008, Suncrest Finance was born from a simple mission: to make 
                  expert financial guidance accessible to everyone. Our founders, seasoned 
                  financial professionals, recognized that many people struggled to navigate 
                  the complex world of personal and business finance.
                </p>
                <p>
                  What started as a small consulting practice has grown into a comprehensive 
                  financial services firm, but our core values remain unchanged. We believe 
                  in building long-term relationships with our clients, providing transparent 
                  advice, and helping people achieve their financial dreams.
                </p>
                <p>
                  Today, we're proud to serve over 500 clients, managing more than $50 million 
                  in assets, and maintaining a 98% client satisfaction rate. Our success is 
                  measured not just in numbers, but in the peace of mind we bring to our clients.
                </p>
              </div>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Our Office" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600"> Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These core values guide everything we do and shape how we serve our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Excellence',
                description: 'We strive for excellence in every aspect of our service, continuously improving our expertise and processes.',
                color: 'text-primary-600',
                bgColor: 'bg-primary-100',
              },
              {
                icon: Users,
                title: 'Client-Focused',
                description: 'Our clients\' success is our success. We put your needs first and build strategies around your goals.',
                color: 'text-secondary-600',
                bgColor: 'bg-secondary-100',
              },
              {
                icon: Target,
                title: 'Integrity',
                description: 'We operate with complete transparency and honesty, ensuring you always understand our recommendations.',
                color: 'text-accent-600',
                bgColor: 'bg-accent-100',
              },
              {
                icon: Heart,
                title: 'Compassion',
                description: 'We understand that financial decisions can be stressful. We provide support with empathy and understanding.',
                color: 'text-primary-600',
                bgColor: 'bg-primary-100',
              },
            ].map((value, index) => (
              <div 
                key={value.title}
                className="card p-8 text-center hover:border-primary-200 border border-transparent animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${value.bgColor} p-4 rounded-lg w-fit mx-auto mb-6`}>
                  <value.icon className={`h-8 w-8 ${value.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-finance-green">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400"> Expert Team</span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
              Our team of certified financial professionals brings decades of combined 
              experience to help you achieve your financial goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Robert Johnson',
                role: 'Founder & Senior Financial Advisor',
                credentials: 'CFP®, CFA',
                image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
                bio: '20+ years of experience in financial planning and investment management. Specializes in retirement and estate planning.',
              },
              {
                name: 'Jennifer Martinez',
                role: 'Investment Strategist',
                credentials: 'CFA, MBA',
                image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
                bio: 'Expert in portfolio management and risk assessment. Former investment banker with 15 years of market experience.',
              },
              {
                name: 'David Chen',
                role: 'Tax & Business Advisor',
                credentials: 'CPA, CFP®',
                image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400',
                bio: 'Specializes in tax planning and business finance. Helps entrepreneurs and small businesses optimize their financial strategies.',
              },
            ].map((member, index) => (
              <div 
                key={member.name}
                className="card p-8 text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-4 border-primary-100"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-1">{member.role}</p>
                <p className="text-secondary-600 text-sm font-medium mb-4">{member.credentials}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600"> Track Record</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Numbers that speak to our commitment to excellence and client success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: '500+',
                label: 'Happy Clients',
                description: 'Individuals and businesses trust us with their financial future',
              },
              {
                number: '$50M+',
                label: 'Assets Under Management',
                description: 'We manage and protect millions in client assets',
              },
              {
                number: '15+',
                label: 'Years of Experience',
                description: 'Proven track record of financial expertise and guidance',
              },
              {
                number: '98%',
                label: 'Client Satisfaction',
                description: 'Our clients consistently rate our service as excellent',
              },
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-4xl font-bold py-8 rounded-2xl mb-4">
                  {stat.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{stat.label}</h3>
                <p className="text-gray-600 leading-relaxed">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Why Choose Us" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Why Choose
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600"> Suncrest Finance?</span>
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: 'Personalized Approach',
                    description: 'Every client is unique. We create customized strategies that align with your specific goals and circumstances.',
                  },
                  {
                    title: 'Comprehensive Services',
                    description: 'From investment planning to tax optimization, we offer a full suite of financial services under one roof.',
                  },
                  {
                    title: 'Ongoing Support',
                    description: 'We don\'t just create a plan and walk away. We provide continuous monitoring and adjustments as needed.',
                  },
                  {
                    title: 'Fee Transparency',
                    description: 'No hidden costs or surprise fees. We believe in complete transparency in all our pricing.',
                  },
                ].map((feature, index) => (
                  <div key={feature.title} className="flex items-start space-x-4">
                    <div className="bg-secondary-100 p-2 rounded-lg flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-secondary-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-finance-green text-white">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Financial Journey?
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Join hundreds of satisfied clients who trust Suncrest Finance with their 
              financial future. Schedule your free consultation today.
            </p>
            <Link to="/contact" className="btn-accent text-lg px-8 py-4 inline-flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Schedule Free Consultation</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
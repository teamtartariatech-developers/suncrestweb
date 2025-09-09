import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Shield, Users, Award, Calculator, Building, ArrowRight, CheckCircle, Calendar } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Investment Planning',
      description: 'Strategic investment solutions tailored to your risk tolerance and financial goals.',
      features: [
        'Portfolio Analysis & Optimization',
        'Risk Assessment & Management',
        'Diversification Strategies',
        'Performance Monitoring',
        'Tax-Efficient Investing',
        'Alternative Investment Options'
      ],
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'primary'
    },
    {
      icon: Users,
      title: 'Retirement Planning',
      description: 'Secure your golden years with comprehensive retirement planning strategies.',
      features: [
        '401(k) & IRA Optimization',
        'Social Security Maximization',
        'Pension Plan Analysis',
        'Healthcare Cost Planning',
        'Estate Planning Integration',
        'Income Distribution Strategies'
      ],
      image: 'https://images.pexels.com/photos/6801872/pexels-photo-6801872.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'secondary'
    },
    {
      icon: Calculator,
      title: 'Tax Optimization',
      description: 'Minimize tax liability while maximizing your financial opportunities.',
      features: [
        'Tax-Loss Harvesting',
        'Retirement Account Strategies',
        'Business Tax Planning',
        'Estate Tax Mitigation',
        'Charitable Giving Strategies',
        'Year-Round Tax Planning'
      ],
      image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'accent'
    },
    {
      icon: Building,
      title: 'Business Finance',
      description: 'Strategic financial guidance to help your business thrive and grow.',
      features: [
        'Cash Flow Management',
        'Business Loan Structuring',
        'Financial Forecasting',
        'Investment Analysis',
        'Exit Strategy Planning',
        'Risk Management Solutions'
      ],
      image: 'https://images.pexels.com/photos/7414996/pexels-photo-7414996.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'primary'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Comprehensive protection strategies to safeguard your financial future.',
      features: [
        'Insurance Analysis & Planning',
        'Liability Protection Strategies',
        'Emergency Fund Planning',
        'Asset Protection Planning',
        'Disability Income Planning',
        'Long-Term Care Planning'
      ],
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'secondary'
    },
    {
      icon: Award,
      title: 'Estate Planning',
      description: 'Preserve and transfer your wealth according to your wishes.',
      features: [
        'Will & Trust Creation',
        'Beneficiary Designations',
        'Power of Attorney Setup',
        'Tax-Efficient Transfers',
        'Charitable Planning',
        'Business Succession Planning'
      ],
      image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'accent'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-primary-100',
          text: 'text-primary-600',
          button: 'bg-primary-600 hover:bg-primary-700',
          border: 'border-primary-200'
        };
      case 'secondary':
        return {
          bg: 'bg-secondary-100',
          text: 'text-secondary-600',
          button: 'bg-secondary-600 hover:bg-secondary-700',
          border: 'border-secondary-200'
        };
      case 'accent':
        return {
          bg: 'bg-accent-100',
          text: 'text-accent-600',
          button: 'bg-accent-600 hover:bg-accent-700',
          border: 'border-accent-200'
        };
      default:
        return {
          bg: 'bg-primary-100',
          text: 'text-primary-600',
          button: 'bg-primary-600 hover:bg-primary-700',
          border: 'border-primary-200'
        };
    }
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comprehensive
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 to-accent-300"> Financial Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
              Expert financial consulting services designed to help you achieve your goals 
              and secure your financial future with confidence.
            </p>
            <Link to="/contact" className="btn-accent text-lg px-8 py-4 inline-flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Schedule Consultation</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => {
              const colors = getColorClasses(service.color);
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={service.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-slide-up ${
                    isEven ? '' : 'lg:grid-flow-col-dense'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Content */}
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <div className={`${colors.bg} p-4 rounded-lg w-fit mb-6`}>
                      <service.icon className={`h-8 w-8 ${colors.text}`} />
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-3">
                          <CheckCircle className={`h-5 w-5 ${colors.text} flex-shrink-0`} />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link 
                      to="/contact" 
                      className={`${colors.button} text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2`}
                    >
                      <span>Get Started</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>

                  {/* Image */}
                  <div className={isEven ? 'lg:order-last' : 'lg:col-start-1'}>
                    <div className="relative">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Proven
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600"> Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We follow a systematic approach to ensure you receive the best financial guidance 
              tailored to your unique situation and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We learn about your financial goals, current situation, and risk tolerance.',
                icon: Users
              },
              {
                step: '02',
                title: 'Analysis',
                description: 'Our experts analyze your finances and identify opportunities for improvement.',
                icon: Calculator
              },
              {
                step: '03',
                title: 'Strategy',
                description: 'We develop a personalized financial strategy tailored to your needs.',
                icon: TrendingUp
              },
              {
                step: '04',
                title: 'Implementation',
                description: 'We help you implement the strategy and provide ongoing support.',
                icon: CheckCircle
              }
            ].map((process, index) => (
              <div 
                key={process.step}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-lg font-bold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  {process.step}
                </div>
                <div className="bg-primary-100 p-4 rounded-lg w-fit mx-auto mb-4">
                  <process.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg text-white">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Schedule your free consultation today and take the first step 
              towards achieving your financial goals.
            </p>
            <Link to="/contact" className="btn-accent text-lg px-8 py-4 inline-flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Book Free Consultation</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
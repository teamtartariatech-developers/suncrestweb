import { Link } from 'react-router-dom';
import { TrendingUp, Shield, Users, Award, ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Financial
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              {' '}Solutions
            </span>
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
              description:
                'Strategic investment solutions tailored to your risk tolerance and financial goals.',
              color: 'text-primary-600',
              bgColor: 'bg-primary-100',
            },
            {
              icon: Shield,
              title: 'Risk Management',
              description:
                'Comprehensive protection strategies to safeguard your financial future.',
              color: 'text-secondary-600',
              bgColor: 'bg-secondary-100',
            },
            {
              icon: Users,
              title: 'Retirement Planning',
              description:
                'Secure your golden years with personalized retirement planning strategies.',
              color: 'text-accent-600',
              bgColor: 'bg-accent-100',
            },
            {
              icon: Award,
              title: 'Tax Optimization',
              description:
                'Minimize tax liability while maximizing your financial opportunities.',
              color: 'text-primary-600',
              bgColor: 'bg-primary-100',
            },
            {
              icon: TrendingUp,
              title: 'Business Finance',
              description:
                'Strategic financial guidance to help your business thrive and grow.',
              color: 'text-secondary-600',
              bgColor: 'bg-secondary-100',
            },
            {
              icon: Shield,
              title: 'Estate Planning',
              description:
                'Preserve and transfer your wealth according to your wishes.',
              color: 'text-accent-600',
              bgColor: 'bg-accent-100',
            },
          ].map((service, index) => (
            <div
              key={service.title}
              className="relative overflow-hidden card p-8 group border border-transparent hover:border-blue-700 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Deep-blue sweep overlay (right → left) */}
              <div
                className="
                  absolute inset-0 z-0 pointer-events-none
                  bg-finance-green
                  origin-left scale-x-0 group-hover:scale-x-100
                  transition-transform duration-500 ease-out
                "
              />

              {/* Content above the overlay */}
              <div className="relative z-10">
                <div
                  className={`${service.bgColor} p-4 rounded-lg w-fit mb-6
                              transition-all duration-300 group-hover:scale-110 group-hover:bg-white/10`}
                >
                  <service.icon
                    className={`h-8 w-8 ${service.color} transition-colors duration-300 group-hover:text-white`}
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-white">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6 transition-colors duration-300 group-hover:text-blue-100">
                  {service.description}
                </p>

                <Link
                  to="/services"
                  className={`font-medium flex items-center space-x-2 transition-colors duration-300 ${service.color} group-hover:text-white`}
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-white" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

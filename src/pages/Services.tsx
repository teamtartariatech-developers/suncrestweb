import React from "react";
import { Link } from "react-router-dom";
import {
  CreditCard,
  BarChart,
  Calculator,
  Building,
  Shield,
  Users,
  Award,
  Briefcase,
  Cpu,
  ArrowRight,
  CheckCircle,
  Calendar,
} from "lucide-react";

const Services: React.FC = () => {
  const services = [
    // {
    //   icon: CreditCard,
    //   title: "Banking Services",
    //   description:
    //     "Banks provide safe money management, deposits, loans, and digital transactions, acting as the foundation of the financial system.",
    //   features: [
    //     "Savings & Current Accounts",
    //     "Fixed & Recurring Deposits",
    //     "Debit/Credit Cards",
    //     "Loans (Personal, Home, Car, Business)",
    //   ],
    //   image:
    //     "https://i.pinimg.com/736x/70/ea/73/70ea73dcc62e246770e9379995ad5904.jpg?auto=compress&cs=tinysrgb&w=600",
    //   color: "primary",
    // },
    {
      icon: BarChart,
      title: "Investment Services",
      description:
        "These services help individuals and businesses grow wealth through stocks, mutual funds, bonds, and portfolio management.",
      features: ["Mutual Funds", "Stocks & Bonds", "Portfolio Management", "Private Equity & Venture Capital"],
      image:
        "https://i.pinimg.com/736x/f2/35/55/f235557ca03e7022aa147630f862324f.jpg?auto=compress&cs=tinysrgb&w=600",
      color: "secondary",
    },
    {
      icon: Calculator,
      title: "Taxation & Compliance Services",
      description: "Ensures legal financial operations by handling tax filing, auditing, payroll, and corporate compliance requirements.",
      features: ["Tax-Loss Harvesting", "Retirement Account Strategies", "Business Tax Planning", "Estate Tax Mitigation"],
      image:
        "https://i.pinimg.com/1200x/89/29/58/89295826a1e7d4b34532f1df48f786bc.jpg?auto=compress&cs=tinysrgb&w=600",
      color: "accent",
    },
    {
      icon: Building,
      title: "Insurance Services",
      description:
        "Insurance is the shield of financial security. It helps individuals, families, and businesses protect themselves against unexpected losses. ",
      features: ["Life Insurance", "Health Insurance", "Business & Liability Insurance", "General Insurance"],
      image:
        "https://i.pinimg.com/736x/f2/82/ab/f282ab486399b0e926e1b8f742c03a65.jpg?auto=compress&cs=tinysrgb&w=600",
      color: "primary",
    },
    {
      icon: Shield,
      title: "Financial Advisory & Consulting",
      description:
        "Guides individuals and companies in wealth management, retirement planning, risk control, and business financial strategy.",
      features: ["Retirement Planning", "Wealth Management", "Estate Planning", "Risk Management"],
      image:
        "https://i.pinimg.com/736x/c9/72/35/c97235d3f1ffd9bb2ad45af665891083.jpg?auto=compress&cs=tinysrgb&w=600",
      color: "secondary",
    },
    {
      icon: BarChart,
      title: "Capital Market & Trading Services",
      description: "Provides access to stock, forex, and commodity markets, enabling investment, trading, and fundraising opportunities.",
      features: ["Stock Broking", "Commodity Trading", "Forex Trading", "Derivatives & Futures"],
      image:
        "https://i.pinimg.com/736x/1f/9f/82/1f9f825beafaa037012dc100fa074de8.jpg?auto=compress&cs=tinysrgb&w=600",
      color: "accent",
    }
    // {
    //   icon: Briefcase,
    //   title: "Corporate Finance",
    //   description: "Supports businesses with mergers, acquisitions, IPOs, project funding, and strategic cash flow management.",
    //   features: ["Mergers & Acquisitions", "IPO (Initial Public Offering)", "Project Finance", "Treasury Management"],
    //   image:
    //     "https://i.pinimg.com/736x/20/0f/f0/200ff087e3bee755914e6be7daccea8c.jpg?auto=compress&cs=tinysrgb&w=600",
    //   color: "accent",
    // },
    // {
    //   icon: Cpu,
    //   title: "Digital & FinTech Services",
    //   description: "Technology-driven services like UPI, wallets, online loans, robo-advisors, and blockchain that make finance faster and easier.",
    //   features: ["Digital Payments", "Online Lending Platforms", "Robo-Advisors", "Cryptocurrency & Blockchain"],
    //   image:
    //     "https://i.pinimg.com/736x/54/dc/27/54dc2772c8c067fe73e688881d8f1407.jpg?auto=compress&cs=tinysrgb&w=600",
    //   color: "accent",
    // },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          bg: "bg-primary-100",
          text: "text-primary-600",
          button: "bg-primary-600 hover:bg-primary-700",
          border: "border-primary-200",
        };
      case "secondary":
        return {
          bg: "bg-secondary-100",
          text: "text-secondary-600",
          button: "bg-secondary-600 hover:bg-secondary-700",
          border: "border-secondary-200",
        };
      case "accent":
        return {
          bg: "bg-accent-100",
          text: "text-accent-600",
          button: "bg-accent-600 hover:bg-accent-700",
          border: "border-accent-200",
        };
      default:
        return {
          bg: "bg-primary-100",
          text: "text-primary-600",
          button: "bg-primary-600 hover:bg-primary-700",
          border: "border-primary-200",
        };
    }
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section
        className="footer-deep-blue text-white section-padding"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://www.suncreastfinancials.com/public/header.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comprehensive
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 to-accent-300">
                {" "}
                Financial Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
              Expert financial consulting services designed to help you achieve
              your goals and secure your financial future with confidence.
            </p>
            <Link
              to="/contact"
              className="btn-accent text-lg px-8 py-4 inline-flex items-center space-x-2"
            >
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
                    isEven ? "" : "lg:grid-flow-col-dense"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Content */}
                  <div className={isEven ? "" : "lg:col-start-2"}>
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
                  <div className={isEven ? "lg:order-last" : "lg:col-start-1"}>
                    <div className="relative">
                      <img
                        src={service.image}
                        alt={`${service.title} illustration`}
                        className=" shadow-2xl w-full h-[350px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                {" "}
                Process
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We follow a systematic approach to ensure you receive the best
              financial guidance tailored to your unique situation and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We learn about your financial goals, current situation, and risk tolerance.",
                icon: Users,
              },
              {
                step: "02",
                title: "Analysis",
                description: "Our experts analyze your finances and identify opportunities for improvement.",
                icon: Calculator,
              },
              {
                step: "03",
                title: "Strategy",
                description: "We develop a personalized financial strategy tailored to your needs.",
                icon: BarChart,
              },
              {
                step: "04",
                title: "Implementation",
                description: "We help you implement the strategy and provide ongoing support.",
                icon: CheckCircle,
              },
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
      <section className="section-padding bg-finance-green text-white">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Schedule your free consultation today and take the first step towards achieving your financial goals.
            </p>
            <Link to="/contact#appointment-booking" className="btn-accent text-lg px-8 py-4 inline-flex items-center space-x-2">
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

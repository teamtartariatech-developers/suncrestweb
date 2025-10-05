import { Link } from "react-router-dom";
import {
  CreditCard,
  TrendingUp,
  Calculator,
  Shield,
  Users,
  BarChart,
  Briefcase,
  Cpu,
  ArrowRight,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: TrendingUp,
      title: "Investment Services",
      description:
        "Investment institutions help individuals and businesses grow wealth by offering access to financial markets.",
      color: "text-secondary-600",
      bgColor: "bg-secondary-100",
    },
    {
      icon: Calculator,
      title: "Taxation & Compliance Services",
      description:
        "Minimize tax liability while maximizing your financial opportunities.",
      color: "text-accent-600",
      bgColor: "bg-accent-100",
    },
    {
      icon: Shield,
      title: "Insurance Services",
      description:
        "Insurance protects individuals and businesses from financial loss due to uncertainties.",
      color: "text-primary-600",
      bgColor: "bg-primary-100",
    },
    {
      icon: Users,
      title: "Financial Advisory & Consulting",
      description:
        "Advisory firms guide individuals and businesses to make informed financial decisions.",
      color: "text-secondary-600",
      bgColor: "bg-secondary-100",
    },
    {
      icon: BarChart,
      title: "Capital Market & Trading Services",
      description:
        "These services provide access to global markets for investments and trading.",
      color: "text-accent-600",
      bgColor: "bg-accent-100",
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16 ">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Financial
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              {" "}
              Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer a complete range of financial services designed to help you
            build, protect, and grow your wealth with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative overflow-hidden card p-8 border border-transparent rounded-none"
            >
              {/* Hover & entrance animations removed */}

              <div className="relative z-10">
                <div className={`${service.bgColor} p-4 rounded-none w-fit mb-6`}>
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <Link to="/services" className={`font-medium flex items-center space-x-2 ${service.color}`}>
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

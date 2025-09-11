import React from "react";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="text-white footer-deep-blue">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-secondary-500 to-accent-500 p-2 rounded-lg">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">Suncrest</span>
                <span className="text-sm text-primary-300 -mt-1">Finance</span>
              </div>
            </Link>
            <p className="text-primary-200 mb-6 leading-relaxed">
              Your trusted partner for comprehensive financial consulting
              services. We help individuals and businesses achieve their
              financial goals through expert guidance and personalized
              solutions.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/18WQYAPgUg/?mibextid=wwXIfr"
                className="text-[#F97316] hover:text-[#FB923C] transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/@suncreastfinancials?si=1p9WfhU8GPHYzs_K" // ← your channel/url
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F97316] hover:text-[#FB923C] transition-colors duration-200"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
              <a
                href="https://www.linkedin.com/company/suncreast-financials/"
                className="text-[#F97316] hover:text-[#FB923C] transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/suncreastfinancials?igsh=MXY2N3BkNGt2dXh6bQ%3D%3D&utm_source=qr"
                className="text-[#F97316] hover:text-[#FB923C] transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/Suncreastfins"
                className="text-[#F97316] hover:text-[#FB923C] transition-colors duration-200"
              >
                <Twitter className="h-5 w-5" />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "About Us", href: "/about" },
                { name: "Blogs", href: "/blogs" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-200 hover:text-white transition-colors duration-200 hover:pl-2 transform transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Investment Planning",
                "Retirement Planning",
                "Tax Consultation",
                "Business Finance",
                "Estate Planning",
                "Risk Management",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-primary-200 hover:text-white transition-colors duration-200 hover:pl-2 transform transition-all"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-secondary-400 flex-shrink-0" />
                <p className="text-primary-200">
                  Dhole patil Road.
                  <br />
                  Pune City 411001
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary-400 flex-shrink-0" />
                <p className="text-primary-200">7020888144</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary-400 flex-shrink-0" />
                <a
                  href="mailto:contact@suncrestfinance.com"
                  className="text-primary-200 hover:text-white underline decoration-transparent hover:decoration-current transition-colors"
                >
                  contact@suncreastfinancials.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-300 text-sm">
              © 2025 Suncrest Finance. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-primary-300 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-primary-300 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-primary-300 hover:text-white transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

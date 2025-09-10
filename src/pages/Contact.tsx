import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, CheckCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import AppointmentBooking from '../components/AppointmentBooking';
import { useLocation } from 'react-router-dom';

const Contact: React.FC = () => {

  const location = useLocation(); // ⬅️ add this

  useEffect(() => {
    // If there's a hash in the URL (e.g., #appointment-booking), scroll to it
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        // timeout ensures the DOM is painted before we scroll
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 0);
      }
    }
  }, [location]);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get In
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 to-accent-300"> Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
              Ready to take control of your financial future? Contact us today to schedule 
              your free consultation and discover how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: MapPin,
                title: 'Visit Our Office',
                details: ['123 Finance Street', 'New York, NY 10001', 'United States'],
                color: 'text-primary-600',
                bgColor: 'bg-primary-100',
              },
              {
                icon: Phone,
                title: 'Call Us',
                details: ['+1 (555) 123-4567', '+1 (555) 123-4568', 'Mon-Fri: 9AM-6PM EST'],
                color: 'text-secondary-600',
                bgColor: 'bg-secondary-100',
              },
              {
                icon: Mail,
                title: 'Email Us',
                details: ['info@suncrestfinance.com', 'support@suncrestfinance.com', 'We respond within 24 hours'],
                color: 'text-accent-600',
                bgColor: 'bg-accent-100',
              },
            ].map((contact, index) => (
              <div 
                key={contact.title}
                className="card p-8 text-center hover:border-primary-200 border border-transparent animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${contact.bgColor} p-4 rounded-lg w-fit mx-auto mb-6`}>
                  <contact.icon className={`h-8 w-8 ${contact.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{contact.title}</h3>
                <div className="space-y-2">
                  {contact.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Office Hours */}
          <div className="card p-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-center mb-6">
              <div className="bg-primary-100 p-4 rounded-lg">
                <Clock className="h-8 w-8 text-primary-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Office Hours</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">Monday - Friday</span>
                  <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">Saturday</span>
                  <span className="text-gray-600">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">Sunday</span>
                  <span className="text-gray-600">Closed</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary-600" />
                  <span className="text-gray-700">Evening appointments available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary-600" />
                  <span className="text-gray-700">Virtual consultations offered</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary-600" />
                  <span className="text-gray-700">Emergency support available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Booking & Contact Form */}
      <section id="appointment-booking" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Appointment Booking */}
            <div className="animate-slide-up">
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-accent-100 p-3 rounded-lg">
                    <Calendar className="h-6 w-6 text-accent-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Book Your Consultation</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Schedule a free 30-minute consultation to discuss your financial goals 
                  and learn how we can help you achieve them.
                </p>
              </div>
              <AppointmentBooking />
            </div>

            {/* Contact Form */}
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Send Us a Message</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Have a question or want to learn more about our services? 
                  Send us a message and we'll get back to you within 24 hours.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-finance-green">
        <div className="container-custom">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Find
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400"> Our Office</span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
              Conveniently located in the heart of the financial district, 
              our office is easily accessible by public transportation and car.
            </p>
          </div>
          
          <div className="card p-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-700 mb-2">Interactive Map</h3>
                <p className="text-gray-600">
                  123 Finance Street, New York, NY 10001<br />
                  <span className="text-sm">(Google Maps integration would go here)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
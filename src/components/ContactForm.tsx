import React from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  preferredContact: 'email' | 'phone';
}

const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const onSubmit = async (data: ContactFormData) => {
    // Here you would typically send the data to your backend
    console.log('Contact form submitted:', data);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  if (isSubmitted) {
    return (
      <div className="card p-8 text-center animate-fade-in">
        <div className="bg-secondary-100 p-4 rounded-full w-fit mx-auto mb-6">
          <CheckCircle className="h-8 w-8 text-secondary-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
        <p className="text-gray-600 leading-relaxed">
          Thank you for contacting us. We've received your message and will get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card p-8 space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'Name is required' })}
          className={`input-field ${errors.name ? 'border-red-300' : ''}`}
          placeholder="Your full name"
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          {...register('email', { 
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Please enter a valid email address'
            }
          })}
          className={`input-field ${errors.email ? 'border-red-300' : ''}`}
          placeholder="your.email@example.com"
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          {...register('phone')}
          className="input-field"
          placeholder="+1 (555) 123-4567"
        />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
          Subject *
        </label>
        <select
          id="subject"
          {...register('subject', { required: 'Please select a subject' })}
          className={`input-field ${errors.subject ? 'border-red-300' : ''}`}
        >
          <option value="">Select a subject</option>
          <option value="consultation">Free Consultation</option>
          <option value="investment">Investment Planning</option>
          <option value="retirement">Retirement Planning</option>
          <option value="tax">Tax Services</option>
          <option value="business">Business Finance</option>
          <option value="other">Other</option>
        </select>
        {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>}
      </div>

      {/* Preferred Contact Method */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Preferred Contact Method
        </label>
        <div className="flex space-x-6">
          <label className="flex items-center">
            <input
              type="radio"
              {...register('preferredContact')}
              value="email"
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
              defaultChecked
            />
            <span className="ml-2 text-sm text-gray-700">Email</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              {...register('preferredContact')}
              value="phone"
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
            />
            <span className="ml-2 text-sm text-gray-700">Phone</span>
          </label>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          rows={5}
          {...register('message', { required: 'Message is required' })}
          className={`input-field resize-none ${errors.message ? 'border-red-300' : ''}`}
          placeholder="Tell us about your financial goals and how we can help you..."
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="btn-primary w-full flex items-center justify-center space-x-2"
      >
        <Send className="h-5 w-5" />
        <span>Send Message</span>
      </button>

      <p className="text-sm text-gray-500 text-center">
        We respect your privacy and will never share your information with third parties.
      </p>
    </form>
  );
};

export default ContactForm;
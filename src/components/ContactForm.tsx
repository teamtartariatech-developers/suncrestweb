import React from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  preferredContact: 'email' | 'phone';
}

const SERVICE_ID = 'service_wnrgjg4';
const TEMPLATE_ID = 'template_mzyt4bl';
const PUBLIC_KEY = 'LBlYoEAIwb_JgiLgj';

const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isSending, setIsSending] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null);

  const onSubmit = async (data: ContactFormData) => {
    setIsSending(true);
    setErrorMsg(null);

    try {
      // Send with EmailJS using the data object from react-hook-form
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          // Ensure these keys exist in your EmailJS template variables
          name: data.name,
          email: data.email,
          phone: data.phone || '',
          subject: data.subject,
          message: data.message,
          preferredContact: data.preferredContact,
          // Optional extras you can use inside your template:
          to_name: 'Adswise Marketing',
          from_name: data.name,
          reply_to: data.email,
        },
        { publicKey: PUBLIC_KEY }
      );

      setIsSubmitted(true);
      reset();
      // Hide success after 5s
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err: any) {
      setErrorMsg('Something went wrong while sending your message. Please try again.');
      console.error('EmailJS error:', err);
    } finally {
      setIsSending(false);
    }
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
              message: 'Please enter a valid email address',
            },
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
          placeholder="+91 98765 43210"
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
          <option value="investment">Investment Services</option>
          <option value="retirement">Taxation & Compliance Services</option>
          <option value="tax">Insurance Services</option>
          <option value="business">Financial Advisory & Consulting</option>
          <option value="other">Capital Market & Trading Services</option>
          <option value="consultation">Others</option>
        </select>
        {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>}
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

      {/* Error */}
      {errorMsg && (
        <p className="text-sm text-red-600 text-center">{errorMsg}</p>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        className="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-60 disabled:cursor-not-allowed"
        disabled={isSending}
      >
        <Send className="h-5 w-5" />
        <span>{isSending ? 'Sending…' : 'Send Message'}</span>
      </button>

      <p className="text-sm text-gray-500 text-center">
        We respect your privacy and will never share your information with third parties.
      </p>
    </form>
  );
};

export default ContactForm;

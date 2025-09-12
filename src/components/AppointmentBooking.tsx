import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Calendar, Clock, CheckCircle, User } from 'lucide-react';
import { format, addDays, addMinutes } from 'date-fns';

interface AppointmentFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes: string;
}

const AppointmentBooking: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<AppointmentFormData>();
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // NEW: store calendar/ics links to show after success
  const [gcalUrl, setGcalUrl] = useState<string>('');
  const [icsHref, setIcsHref] = useState<string>('');

  // ===== Helpers for calendar links =====
  const toGoogleDateTime = (d: Date) =>
    d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z'); // YYYYMMDDTHHMMSSZ

  const buildGoogleCalendarUrl = (opts: {
    title: string;
    details: string;
    location?: string;
    start: Date;
    end: Date;
  }) => {
    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: opts.title,
      details: opts.details,
      location: opts.location || 'Online',
      dates: `${toGoogleDateTime(opts.start)}/${toGoogleDateTime(opts.end)}`
    });
    return `https://calendar.app.google/QGXBeqKNoNVHhUQ47?${params.toString()}`;
  };

  const buildICS = (opts: {
    title: string;
    details: string;
    location?: string;
    start: Date;
    end: Date;
    organizerEmail?: string;
  }) => {
    const dtStamp = toGoogleDateTime(new Date());
    const dtStart = toGoogleDateTime(opts.start);
    const dtEnd = toGoogleDateTime(opts.end);
    const uid = `${dtStamp}-${Math.random().toString(36).slice(2)}@adswise`;

    // Basic RFC5545 .ics
    const ics = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Adswise//Appointment//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `UID:${uid}`,
      `DTSTAMP:${dtStamp}`,
      `DTSTART:${dtStart}`,
      `DTEND:${dtEnd}`,
      `SUMMARY:${escapeICS(opts.title)}`,
      `DESCRIPTION:${escapeICS(opts.details)}`,
      `LOCATION:${escapeICS(opts.location || 'Online')}`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
    return URL.createObjectURL(blob);
  };

  const escapeICS = (text: string) =>
    text
      .replace(/\\/g, '\\\\')
      .replace(/\n/g, '\\n')
      .replace(/,/g, '\\,')
      .replace(/;/g, '\\;');

  // ===== Dates =====
  const generateAvailableDates = () => {
    const dates: { value: string; label: string }[] = [];
    let currentDate = new Date();
    let added = 0;

    while (added < 14) {
      currentDate = addDays(currentDate, 1);
      const day = currentDate.getDay();
      if (day !== 0 && day !== 6) {
        dates.push({
          value: format(currentDate, 'yyyy-MM-dd'),
          label: format(currentDate, 'EEEE, MMM d'),
        });
        added++;
      }
    }
    return dates;
  };

  const timeSlots = [
    { value: '09:00', label: '9:00 AM' },
    { value: '10:00', label: '10:00 AM' },
    { value: '11:00', label: '11:00 AM' },
    { value: '14:00', label: '2:00 PM' },
    { value: '15:00', label: '3:00 PM' },
    { value: '16:00', label: '4:00 PM' },
    { value: '17:00', label: '5:00 PM' },
  ];

  const availableDates = generateAvailableDates();

  const onSubmit = async (data: AppointmentFormData) => {
    const appointmentData = {
      ...data,
      date: selectedDate,
      time: selectedTime,
    };

    // Build start/end from selected date & time in local TZ
    const startLocal = new Date(`${appointmentData.date}T${appointmentData.time}:00`);
    const endLocal = addMinutes(startLocal, 60); // 60-min slot

    // Compose event meta
    const title = `Consultation — ${data.service || 'Financial Service'}`;
    const details =
      `Client: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}` +
      (data.notes ? `\n\nNotes:\n${data.notes}` : '');

    // Create links
    const gUrl = buildGoogleCalendarUrl({
      title,
      details,
      location: 'Online',
      start: startLocal,
      end: endLocal,
    });
    const icsUrl = buildICS({
      title,
      details,
      location: 'Online',
      start: startLocal,
      end: endLocal,
      organizerEmail: 'no-reply@adswisemarketing.com',
    });

    setGcalUrl(gUrl);
    setIcsHref(icsUrl);

    // TODO: send to your backend / email service if needed
    console.log('Appointment booked:', appointmentData);

    await new Promise(res => setTimeout(res, 800));

    setIsSubmitted(true);
    reset();
    setSelectedDate('');
    setSelectedTime('');
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  if (isSubmitted) {
    return (
      <div className="card p-8 text-center animate-fade-in">
        <div className="bg-secondary-100 p-4 rounded-full w-fit mx-auto mb-6">
          <CheckCircle className="h-8 w-8 text-secondary-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Appointment Booked Successfully!</h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          Your consultation has been scheduled. We’ve recorded the details below.
        </p>

        {/* NEW: Calendar actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          {gcalUrl && (
            <a
              href={gcalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent px-5 py-3 rounded-lg font-medium"
            >
              Add to Google Calendar
            </a>
          )}
          {icsHref && (
            <a
              href={icsHref}
              download="appointment.ics"
              className="btn-primary px-5 py-3 rounded-lg font-medium"
            >
              Download .ics
            </a>
          )}
        </div>

        <p className="text-sm text-gray-500 mt-6">
          You’ll get a reminder 24 hours before your appointment.
        </p>
      </div>
    );
  }

  return (
    <div className="card p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Personal Information */}
        <div className="space-y-4">
          {/* <div className="flex items-center space-x-2 mb-4">
            <User className="h-5 w-5 text-primary-600" />
            <h3 className="text-lg font-semibold text-gray-900">Your Information</h3>
          </div> */}

          {/* <div>
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
          </div> */}

          {/* <div>
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
          </div> */}

          {/* <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              {...register('phone', { required: 'Phone number is required' })}
              className={`input-field ${errors.phone ? 'border-red-300' : ''}`}
              placeholder="+91 98765 43210"
            />
            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
          </div> */}
        </div>

        {/* Service Selection */}
        {/* <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
            Service Interest *
          </label>
          <select
            id="service"
            {...register('service', { required: 'Please select a service' })}
            className={`input-field ${errors.service ? 'border-red-300' : ''}`}
          >
            <option value="">Select a service</option>
            <option value="consultation">General Financial Consultation</option>
            <option value="investment">Investment Planning</option>
            <option value="retirement">Retirement Planning</option>
            <option value="tax">Tax Planning</option>
            <option value="business">Business Finance</option>
            <option value="estate">Estate Planning</option>
          </select>
          {errors.service && <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>}
        </div> */}

        {/* Date Selection */}
        {/* <div>
          <div className="flex items-center space-x-2 mb-3">
            <Calendar className="h-5 w-5 text-primary-600" />
            <label className="text-sm font-medium text-gray-700">Select Date *</label>
          </div>
          <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
            {availableDates.map((date) => (
              <button
                key={date.value}
                type="button"
                onClick={() => setSelectedDate(date.value)}
                className={`p-3 text-sm border rounded-lg transition-all duration-200 ${
                  selectedDate === date.value
                    ? 'bg-primary-600 text-white border-primary-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-primary-300 hover:bg-primary-50'
                }`}
              >
                {date.label}
              </button>
            ))}
          </div>
        </div> */}

        {/* Time Selection */}
        {/* {selectedDate && (
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <Clock className="h-5 w-5 text-primary-600" />
              <label className="text-sm font-medium text-gray-700">Select Time *</label>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {timeSlots.map((time) => (
                <button
                  key={time.value}
                  type="button"
                  onClick={() => setSelectedTime(time.value)}
                  className={`p-3 text-sm border rounded-lg transition-all duration-200 ${
                    selectedTime === time.value
                      ? 'bg-secondary-600 text-white border-secondary-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-secondary-300 hover:bg-secondary-50'
                  }`}
                >
                  {time.label}
                </button>
              ))}
            </div>
          </div>
        )} */}

        {/* Additional Notes */}
        {/* <div>
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
            Additional Notes (Optional)
          </label>
          <textarea
            id="notes"
            rows={3}
            {...register('notes')}
            className="input-field resize-none"
            placeholder="Any specific topics you'd like to discuss or questions you have..."
          />
        </div> */}

        {/* Submit */}
        <button
          type="submit"
          
          className="btn-accent w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Calendar className="h-5 w-5" />
          <span>Book Appointment</span>
        </button>

        <div className="text-sm text-gray-500 space-y-2">
          <p>• Free 30-minute consultation</p>
          <p>• You’ll receive options to save this to your calendar</p>
          <p>• Virtual meetings available upon request</p>
        </div>
      </form>
    </div>
  );
};

export default AppointmentBooking;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Calendar, CheckCircle } from 'lucide-react';
import { format, addDays, addMinutes } from 'date-fns';

interface AppointmentFormData {
  name: string;
  email: string;
  phone: string;
  service?: string;
  date?: string;
  time?: string;
  notes?: string;
}

const AppointmentBooking: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AppointmentFormData>({
    defaultValues: {
      service: 'Consultation',
      notes: '',
    },
  });

  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [gcalUrl, setGcalUrl] = useState<string>('');
  const [icsHref, setIcsHref] = useState<string>('');

  // Convert Date -> Google style YYYYMMDDTHHMMSSZ
  const toGoogleDateTime = (d: Date) =>
    d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');

  const buildGoogleCalendarUrl = (opts: {
    title: string;
    details: string;
    location?: string;
    start: Date;
    end: Date;
  }) => {
    const dates = `${toGoogleDateTime(opts.start)}/${toGoogleDateTime(opts.end)}`;
    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: opts.title,
      details: opts.details,
      location: opts.location || 'Online',
      dates,
    });
    return `https://calendar.google.com/calendar/render?${params.toString()}`;
  };

  const escapeICS = (text: string) =>
    text
      .replace(/\\/g, '\\\\')
      .replace(/\n/g, '\\n')
      .replace(/,/g, '\\,')
      .replace(/;/g, '\\;');

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
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
    return URL.createObjectURL(blob);
  };

  // generate next 14 business days (skips weekends)
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
    // ensure date/time selected
    if (!selectedDate || !selectedTime) {
      alert('Please select a date and time before booking.');
      return;
    }

    const appointmentData = {
      ...data,
      date: selectedDate,
      time: selectedTime,
    };

    // Build start/end using local timezone
    const startLocal = new Date(`${appointmentData.date}T${appointmentData.time}:00`);
    const endLocal = addMinutes(startLocal, 60);

    const title = `Consultation — ${appointmentData.service || 'Financial Service'}`;
    const details =
      `Client: ${appointmentData.name}\nEmail: ${appointmentData.email}\nPhone: ${appointmentData.phone}` +
      (appointmentData.notes ? `\n\nNotes:\n${appointmentData.notes}` : '');

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

    // Open Google Calendar in a new tab; fallback to current tab if blocked
    const newWindow = window.open(gUrl, '_blank', 'noopener,noreferrer');
    if (!newWindow) {
      window.location.href = gUrl;
    }

    // local confirmation shown immediately
    setIsSubmitted(true);
    console.log('Appointment locally recorded:', appointmentData);

    // clear form UI
    reset({ service: 'Consultation', notes: '' });
    setSelectedDate('');
    setSelectedTime('');

    // auto-hide success card after 8s (optional)
    setTimeout(() => setIsSubmitted(false), 8000);
  };

  if (isSubmitted) {
    return (
      <div className="card p-8 text-center">
        <div className="bg-secondary-100 p-4 rounded-full w-fit mx-auto mb-6">
          <CheckCircle className="h-8 w-8 text-secondary-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Appointment Booked Successfully!</h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          Google Calendar opened in a new tab (or current tab). Please click <strong>Save</strong> there to add this event to your calendar.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          {gcalUrl && (
            <a
              href={gcalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent px-5 py-3 rounded-lg font-medium"
            >
              Open Google Calendar
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
          You’ll get a reminder 24 hours before your appointment (if you save the event).
        </p>
      </div>
    );
  }

  return (
    <div className="card p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Personal info (visible & validated) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
         Name 
            </label>
            <input
              id="name"
              {...register('name', { required: 'Name is required' })}
              className={`input-field w-full ${errors.name ? 'border-red-300' : ''}`}
              placeholder="Your full name"
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email 
            </label>
            <input
              id="email"
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: { value: /^\S+@\S+$/i, message: 'Please enter a valid email' },
              })}
              className={`input-field w-full ${errors.email ? 'border-red-300' : ''}`}
              placeholder="your.email@example.com"
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone 
            </label>
            <input
              id="phone"
              {...register('phone', { required: 'Phone is required' })}
              className={`input-field w-full ${errors.phone ? 'border-red-300' : ''}`}
              placeholder="+91 98765 43210"
            />
            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
          </div>
        </div>

        {/* Date selector */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Date </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 max-h-48 overflow-y-auto">
            {availableDates.map((date) => (
              <button
                key={date.value}
                type="button"
                onClick={() => setSelectedDate(date.value)}
                className={`p-3 text-sm border ${
                  selectedDate === date.value
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 border-gray-300'
                }`}
              >
                {date.label}
              </button>
            ))}
          </div>
          {!selectedDate && <p className="mt-2 text-sm text-gray-500">Please select a date.</p>}
        </div>

        {/* Time selector */}
        {selectedDate && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Time</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {timeSlots.map((time) => (
                <button
                  key={time.value}
                  type="button"
                  onClick={() => setSelectedTime(time.value)}
                  className={`p-3 text-sm border ${
                    selectedTime === time.value
                      ? 'bg-secondary-600 text-white'
                      : 'bg-white text-gray-700 border-gray-300'
                  }`}
                >
                  {time.label}
                </button>
              ))}
            </div>
            {!selectedTime && <p className="mt-2 text-sm text-gray-500">Please select a time.</p>}
          </div>
        )}

        {/* Optional notes */}
        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
            Additional notes (optional)
          </label>
          <textarea
            id="notes"
            {...register('notes')}
            rows={3}
            className="input-field w-full resize-none"
            placeholder="Anything you'd like the consultant to know..."
          />
        </div>

        {/* Hidden/auto fields handled by state + form data on submit (service kept in form state) */}
        <button
          type="submit"
          className="btn-accent w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Calendar className="h-5 w-5" />
          <span>Book Appointment</span>
        </button>

        <div className="text-sm text-gray-500 space-y-2">
          <p>• Free 30-minute consultation</p>
          <p>• Google Calendar will open — click Save to confirm</p>
          <p>• Virtual meetings available upon request</p>
        </div>
      </form>
    </div>
  );
};

export default AppointmentBooking;

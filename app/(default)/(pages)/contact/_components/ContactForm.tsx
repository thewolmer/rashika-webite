'use client';
import React, { useState } from 'react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { sendWebhook } from '@/lib/discord/sendWebhook';
import { cn } from '@/lib/utils';

import { formDataType } from '@/types/ContactForm/formData';

import createEmbed from './EmbedBuilder';

export const ContactForm = () => {
  const [formData, setFormData] = useState<formDataType>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    discordUsername: '',
    instagramUsername: '',
    message: '',
    consent: false,
  });
  // @ts-expect-error errorType
  const [errors, setErrors] = useState<formDataType>({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form fields
    const formFields = ['firstName', 'lastName', 'email', 'phoneNumber', 'message', 'consent'];
    const newErrors = {};
    formFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = 'This field is required';
      }
    });

    // @ts-expect-error errorType
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      toast.warning('Please fill the required fields!');
      return;
    }

    // If all fields are filled, proceed with form submission
    const loadingToast = toast.loading('Sending message...');
    const embed = createEmbed(formData);
    const response = await sendWebhook(embed);
    if (response === 200) {
      toast.success('Your message was sent successfully!', {
        id: loadingToast,
        description: 'Rashika will reach back to you soon!',
      });
    } else {
      toast.error(`Failed to send Message, Status: ${response}`, {
        id: loadingToast,
        description: 'Please try again after some time.',
      });
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label className="block text-sm font-medium">First Name (Required) </label>
          <input
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            name="firstName"
            className={cn(
              'mt-1 w-full rounded-md border p-2 text-sm shadow-sm',
              errors.firstName ? 'border-destructive' : '',
            )}
            placeholder="Rashika"
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label className="block text-sm font-medium"> Last Name (Required)</label>
          <input
            type="text"
            id="LastName"
            value={formData.lastName}
            onChange={handleChange}
            name="lastName"
            className={cn(
              'mt-1 w-full rounded-md border p-2 text-sm shadow-sm',
              errors.lastName ? 'border-destructive' : '',
            )}
            placeholder="Agarwal"
          />
        </div>
        <div className="col-span-6">
          <label className="block text-sm font-medium"> Email (Required)</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            name="email"
            className={cn(
              'mt-1 w-full rounded-md border p-2 text-sm shadow-sm',
              errors.email ? 'border-destructive' : '',
            )}
            placeholder="youremail@domain.com"
          />
        </div>
        <div className="col-span-6">
          <label className="block text-sm font-medium"> Phone (Required)</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className={cn(
              'mt-1 w-full rounded-md border p-2 text-sm shadow-sm',
              errors.phoneNumber ? 'border-destructive' : '',
            )}
            placeholder="+91747000123"
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label className="block text-sm font-medium"> Discord Username (Optional)</label>
          <input
            type="text"
            value={formData.discordUsername}
            onChange={handleChange}
            name="discordUsername"
            className={cn('mt-1 w-full rounded-md border p-2 text-sm shadow-sm')}
            placeholder="@clydle"
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label className="block text-sm font-medium">Instagram Username (Optional)</label>
          <input
            type="text"
            name="instagramUsername"
            value={formData.instagramUsername}
            onChange={handleChange}
            className={cn('mt-1 w-full rounded-md border p-2 text-sm shadow-sm')}
            placeholder="@clydle"
          />
        </div>
        <div className="col-span-6">
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message here."
            className={cn(errors.message ? 'border-destructive' : '')}
          />
        </div>
        <div className="col-span-6">
          <label className="flex gap-4">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent === true}
              onChange={handleChange}
              className={cn(
                'h-5 w-5 cursor-pointer rounded-md border shadow-sm ',
                errors.consent ? 'border-destructive' : '',
              )}
            />
            <span className={cn('inline-block text-sm', errors.consent ? 'text-destructive' : '')}>
              I consent Rashika to reach me back on the given contact info.
            </span>
          </label>
        </div>
        <div className="col-span-6 flex gap-4 sm:items-center">
          <Button className="">Send Message</Button>
        </div>
      </form>
    </section>
  );
};

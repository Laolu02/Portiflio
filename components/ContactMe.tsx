"use client"

import { useState } from 'react';
import { contactSchema, ContactFormData } from '@/utils/Schema';
import { z } from 'zod';
import { FaPaperPlane } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<z.ZodIssue[]>([]);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      contactSchema.parse(formData);
      setErrors([]);
      setSuccess('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(error.issues);
        setSuccess(null);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-lg mx-auto ">
      {errors.length > 0 && (
        <div className="bg-red-500 text-white p-2 rounded">
          {errors.map((err, index) => (
            <p key={index}>{err.message}</p>
          ))}
        </div>
      )}
      {success && <div className="bg-green-500 text-white p-2 rounded">{success}</div>}
      <div className='flex items-center gap-2 p-2'>
        <label htmlFor="name" className="w-24 font-medium text-gray-400">Name:</label>
        <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        className=" flex-1 p-3 rounded bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:border-teal-500"
        />
      </div>
       <div className='flex items-center gap-2 p-2'>
        <label htmlFor="name" className="w-24 font-medium text-gray-400">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="flex-1 p-3 rounded bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:border-teal-500"
        />
      </div>
       <div className='flex items-start gap-2 p-2'>
        <label htmlFor="name" className="w-24 font-medium text-gray-400">Message:</label>
        <textarea
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="flex-1 p-3 rounded bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:border-teal-500"
        ></textarea>
      </div>
      <button
        type="submit"
        className="flex items-center justify-center gap-2 px-6 py-3 bg-teal-500 text-white font-semibold rounded-full hover:bg-teal-600 transition-colors"
      >
        Send Message <FaPaperPlane />
      </button>
    </form>
  );
};

export default ContactForm;
"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Placeholder for actual form submission
    // In production, this would send to an API endpoint
    console.log("Form submitted:", formData);
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl mb-6 tracking-wider">Contact</h1>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Have a question about our products or process? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-serif mb-8 tracking-wide">
              Get in Touch
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm tracking-widest uppercase text-charcoal/60 mb-2">
                  Email
                </h3>
                <p className="text-lg">info@aeresaw.com</p>
              </div>
              
              <div>
                <h3 className="text-sm tracking-widest uppercase text-charcoal/60 mb-2">
                  Location
                </h3>
                <p className="text-lg">Phoenix, Arizona</p>
              </div>
              
              <div>
                <h3 className="text-sm tracking-widest uppercase text-charcoal/60 mb-2">
                  Hours
                </h3>
                <p className="text-charcoal/70">
                  Monday - Friday: 9:00 AM - 5:00 PM MST<br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-charcoal/10">
              <h3 className="text-sm tracking-widest uppercase text-charcoal/60 mb-4">
                Custom Orders
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                We accept custom orders for specific dimensions, wood types, 
                and quantities. Contact us to discuss your project requirements.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm tracking-widest uppercase block mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full py-3 px-4 border border-charcoal/20 focus:outline-none focus:border-charcoal"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm tracking-widest uppercase block mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full py-3 px-4 border border-charcoal/20 focus:outline-none focus:border-charcoal"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="text-sm tracking-widest uppercase block mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full py-3 px-4 border border-charcoal/20 focus:outline-none focus:border-charcoal"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm tracking-widest uppercase block mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full py-3 px-4 border border-charcoal/20 focus:outline-none focus:border-charcoal resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full py-4 bg-charcoal text-white tracking-widest text-sm uppercase hover:bg-charcoal/90 transition-colors disabled:opacity-50"
              >
                {submitted ? 'Message Sent' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

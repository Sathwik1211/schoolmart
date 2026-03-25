// src/pages/ContactUs.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Facebook, Twitter, Youtube, Instagram, Linkedin } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    school: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-sm-blue to-blue-700 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Mail size={80} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-heading mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Get in touch with us for all your school infrastructure needs
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-24 relative z-10">
            <div className="bg-white rounded-lg p-6 shadow-card text-center">
              <div className="w-14 h-14 bg-sm-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Phone</h3>
              <a href="tel:+919966109191" className="text-gray-600 hover:text-sm-blue transition-colors">
                +91 9966109191
              </a>
              <br />
              <a href="tel:+919866091111" className="text-gray-600 hover:text-sm-blue transition-colors">
                +91 9866091111
              </a>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-card text-center">
              <div className="w-14 h-14 bg-sm-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
              <a href="mailto:info@schoolmart.in" className="text-gray-600 hover:text-sm-blue transition-colors">
                info@schoolmart.in
              </a>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-card text-center">
              <div className="w-14 h-14 bg-sm-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Working Hours</h3>
              <p className="text-gray-600">Mon - Sat: 9AM - 6PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-card text-center">
              <div className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">WhatsApp</h3>
              <a 
                href="https://wa.me/919966109191" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-sm-blue transition-colors"
              >
                +91 9966109191
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 font-heading mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sm-blue focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sm-blue focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sm-blue focus:border-transparent outline-none transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">School Name</label>
                    <input
                      type="text"
                      name="school"
                      value={formData.school}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sm-blue focus:border-transparent outline-none transition-all"
                      placeholder="ABC Public School"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sm-blue focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full md:w-auto px-8 py-3 bg-sm-blue text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 font-heading mb-6">
                Our Office
              </h2>
              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 bg-sm-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Headquarters</h3>
                    <p className="text-gray-600">
                      Third Eye Retail Pvt. Ltd.<br />
                      Hyderabad, Telangana<br />
                      India
                    </p>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Follow Us</h3>
                  <div className="flex gap-3">
                    <a href="https://www.facebook.com/schoolmart.in" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                      <Facebook size={18} />
                    </a>
                    <a href="https://twitter.com/schoolmarts" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center text-white hover:bg-sky-600 transition-colors">
                      <Twitter size={18} />
                    </a>
                    <a href="https://www.youtube.com/channel/UCgKY_Kf8jH1hoP3p0I0tiRA" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white hover:bg-red-700 transition-colors">
                      <Youtube size={18} />
                    </a>
                    <a href="https://www.instagram.com/schoolmart.in/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center text-white hover:bg-pink-700 transition-colors">
                      <Instagram size={18} />
                    </a>
                    <a href="https://www.linkedin.com/school/schoolmart-india/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white hover:bg-blue-800 transition-colors">
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick CTA */}
              <div className="bg-sm-navy rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Prefer to Call?</h3>
                <p className="text-gray-300 mb-4">
                  Speak directly with our team for immediate assistance.
                </p>
                <a 
                  href="tel:+919966109191"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-sm-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-200"
                >
                  <Phone size={18} />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-sm-gray">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 font-heading mb-4">
            Request a Free Quote
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a customized quote for your school infrastructure project. 
            Our team will analyze your requirements and provide the best solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/919966109191"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-200"
            >
              <MessageCircle size={18} />
              <span>Chat on WhatsApp</span>
            </a>
            <Link 
              to="/catalogues"
              className="flex items-center justify-center gap-2 px-8 py-3 bg-white border-2 border-sm-blue text-sm-blue font-semibold rounded-lg hover:bg-sm-blue hover:text-white transition-colors duration-200"
            >
              <span>View Catalogues</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;

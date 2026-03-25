// src/components/CTASection.jsx
import { MessageCircle, Phone } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-sm-yellow rounded-lg p-8 md:p-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading mb-4">
                Ready to talk?
              </h2>
              <p className="text-gray-700 leading-relaxed max-w-2xl">
                At schoolmart, We have the expertise in guiding you to set up your new campus project 
                and help you maximize the performance of your campus while also figuring out your return. 
                We have the expertise in guiding you to set up your new campus project and help you maximize.
              </p>
            </div>

            {/* Right Content - Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/919966109191"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-all duration-200 hover:scale-105 shadow-lg"
              >
                <MessageCircle size={20} />
                <span>Connect On WhatsApp</span>
              </a>
              <a
                href="tel:+919966109191"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-gray-900 text-gray-900 font-semibold rounded-full hover:bg-gray-900 hover:text-white transition-all duration-200"
              >
                <Phone size={20} />
                <span>Call Us 9966109191</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

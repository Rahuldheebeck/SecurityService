import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-blue-950 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 text-center lg:text-left">

        {/* Company Info - left on laptop */}
        <div className="flex flex-col items-center lg:items-center">
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <img
              src="assests/Security.jpg"
              className="w-10 h-10 rounded-full p-1 bg-white shadow-md"
              alt="logo"
            />
            <div className="flex flex-col leading-tight">
              <p className="text-lg font-semibold font-['Poppins']">SecureShield</p>
              <p className="text-xs text-center lg:text-left font-['Poppins']">Security Services</p>
            </div>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed mt-2 text-center lg:text-center">
            Providing trusted, round-the-clock security and surveillance solutions across industries and infrastructures. Your safety is our mission.
          </p>
        </div>

        {/* Contact - center on laptop */}
        <div className="flex flex-col items-center lg:items-center">
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3> 
          <p className="text-sm text-gray-300">Phone: +91 98765 43210</p>
          <p className="text-sm text-gray-300">Email: support@secureshield.com</p>
          <p className="text-sm text-gray-300">Address: 123 Secure Lane, Chennai, India</p>
        </div>

        {/* Social Media - right on laptop */}
        <div className="flex flex-col items-center lg:items-center">
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a href="#" aria-label="Facebook"><Facebook className="w-5 h-5 hover:text-blue-400" /></a>
            <a href="#" aria-label="Twitter"><Twitter className="w-5 h-5 hover:text-blue-400" /></a>
            <a href="#" aria-label="Instagram"><Instagram className="w-5 h-5 hover:text-blue-400" /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin className="w-5 h-5 hover:text-blue-400" /></a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-sm text-gray-400 text-center lg:text-center">
        © {new Date().getFullYear()} SecureShield Security Services. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

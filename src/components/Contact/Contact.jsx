import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-gradient-to-b from-gray-100 via-white to-gray-100 py-16 px-4 font-['Poppins']"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="flex flex-col justify-center animate-fade-in">
          <h2 className="text-3xl font-semibold text-blue-900 mb-4 transition duration-300 hover:text-purple-800">
            Get in Touch
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Have questions or need assistance? Our team is here to help you 24/7. Reach out to us anytime.
          </p>
          <div className="space-y-4 text-gray-700 text-base">
            <p><strong>📞 Phone:</strong> +91 98765 43210</p>
            <p><strong>✉️ Email:</strong> support@secureshield.com</p>
            <p><strong>📍 Address:</strong> 123 Secure Lane, Chennai, India</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-xl rounded-xl p-8 transform transition duration-500 hover:shadow-blue-200 animate-slide-in-right">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">Send a Message</h3>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 hover:shadow-lg"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 hover:shadow-lg"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 hover:shadow-lg"
              required
            />
            <button
              type="submit"
              className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition duration-300 hover:scale-105 shadow-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

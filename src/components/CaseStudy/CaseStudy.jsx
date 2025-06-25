import React from 'react';

const services = [
  {
    title: "Integrated Security Solution",
    image: "assests/case1.jpg",
    paragraph: "A leading solar farm required a robust integrated security system capable of detecting ground incidents remotely and delivering real-time alerts to prevent break-ins and enhance overall site protection."
  },
  {
    title: "Energy Management Solution",
    image: "assests/case2.jpg",
    paragraph: "Industries like Telecom, BFSI, and IT needed a cost-effective energy solution to monitor infrastructure, track performance in real-time, and reduce recurring costs through predictive control and efficiency optimization."
  },
  {
    title: "Event Security",
    image: "assests/case3.jpg",
    paragraph: "SecureShield Security Services provided event protection for a major football club, ensuring fan safety, managing crowd control, and offering reliable on-ground security support throughout the entire match experience."
  },
  {
    title: "Smart ATM Solution",
    image: "assests/case4.jpg",
    paragraph: "SecureShield Security Services' Global Command Center monitors ATM locations 24/7. If an alarm is triggered, a Quick Response Team (QRT) is dispatched immediately, ensuring swift and effective security enforcement at the site."
  },
  {
    title: "Healthcare Solution",
    image: "assests/case5.jpg",
    paragraph: "We help hospitals improve patient safety, reduce operational risks, and manage rising costs with tailored security and automation services that align with healthcare compliance and infrastructure needs."
  },
  {
    title: "Manned Guarding",
    image: "assests/case6.jpg",
    paragraph: "SecureShield Security Services partnered with India’s top digital exam provider, deploying trained guards across locations to ensure secure, tamper-proof execution of tests while meeting stringent operational security standards."
  }
];

const CaseStudy = () => {
  return (
    <div id="casestudies" className="bg-gradient-to-b from-gray-100 via-white to-gray-100 py-10 px-4 overflow-hidden">
      {/* Heading */}
      <div className="max-w-2xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-semibold text-blue-900 pt-7">Case Studies</h2>
      </div>

      {/* Scrolling Row - Centered with 15px side gap on laptops */}
      <div className="relative overflow-hidden px-0 lg:mx-16 lg:px-[15px]">
        <div className="flex animate-scroll gap-6 w-max">
          {[...services, ...services].map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-xl overflow-hidden w-[300px] shrink-0 flex flex-col"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-lg font-bold text-blue-900 mb-2">{service.title}</h3>
                <p className="text-gray-700 text-sm">{service.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;

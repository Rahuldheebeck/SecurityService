import React from 'react'
import { Shield, Camera, Lock, UserCheck } from 'lucide-react'

const Offers = () => {
  return (
    <div>
      <div  id="services" className='bg-gradient-to-b from-gray-100 via-white to-gray-100 py-10 px-4'>
        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className='text-3xl font-semibold text-blue-900 mb-2 pt-7'>Our Security Services</h2>
          <p className='text-gray-700 text-base leading-relaxed'>
            We offer a comprehensive range of security services designed to protect your business, property, and people with the highest level of professionalism.
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
          {[
            {
              title: "Physical Security",
              icon: <Shield className="w-10 h-10 text-blue-800 group-hover:scale-125 transition-transform duration-300" />,
              desc: "Our trained security personnel ensure constant vigilance and safety of your premises. From entry checkpoints to emergency handling, we secure every corner.",
              points: [
                "Trained security guards on-site.",
                "24/7 patrolling and surveillance.",
                "Access control enforcement.",
                "Emergency incident response.",
              ],
            },
            {
              title: "Surveillance Systems",
              icon: <Camera className="w-10 h-10 text-blue-800 group-hover:scale-125 transition-transform duration-300" />,
              desc: "Monitor your property round-the-clock with high-definition CCTV systems. We provide smart alerts, video recording, and remote access for full control.",
              points: [
                "Advanced CCTV installations.",
                "Real-time remote monitoring.",
                "Video storage and playback.",
                "Motion detection alerts.",
              ],
            },
            {
              title: "Access Control",
              icon: <Lock className="w-10 h-10 text-blue-800 group-hover:scale-125 transition-transform duration-300" />,
              desc: "Restrict and manage who enters your facility with modern access tech. Biometric, RFID, and smart solutions ensure only authorized access.",
              points: [
                "Biometric & card-based systems.",
                "Visitor tracking solutions.",
                "Multi-layered access zones.",
                "Audit trail reports.",
              ],
            },
            {
              title: "Personal Security",
              icon: <UserCheck className="w-10 h-10 text-blue-800 group-hover:scale-125 transition-transform duration-300" />,
              desc: "Get tailored protection plans for VIPs, executives, or private events. Our guards are trained in risk assessment, crowd control, and rapid response.",
              points: [
                "Executive protection services.",
                "Background verification support.",
                "Event-based security personnel.",
                "Custom VIP protection plans.",
              ],
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-xl p-6 text-center group hover:shadow-2xl transition-shadow duration-300 hover:scale-[1.02]"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.desc}</p>
              <ul className="text-gray-700 text-base list-disc list-inside text-left space-y-2">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Offers

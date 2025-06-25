import { useEffect, useState } from "react";
import { Cctv, FileLock, ScanFace } from "lucide-react";

const slides = [
  {
    image: "/assests/home1.jpg",
    quote: "Command Center Excellence",
    description: "Advanced monitoring to safeguard your assets in real time.",
  },
  {
    image: "/assests/home2.jpg",
    quote: "Business-Led Security Solutions",
    description: "Tailored protection strategies for dynamic business needs.",
  },
  {
    image: "/assests/home3.webp",
    quote: "Smart Electronic Surveillance",
    description: "AI-powered surveillance with real-time threat detection.",
  },
];

const services = [
  {
    title: "SecureShield Security Services (SSS)",
    description: "Comprehensive on-ground security personnel and guarding services.",
    icon: Cctv,
  },
  {
    title: "SecureShield Electronic Security Solutions (SESS)",
    description: "Smart electronic surveillance and integrated security tech.",
    icon: FileLock,
  },
  {
    title: "SecureShield Business Solutions (STBS)",
    description: "Business process support with security-driven insights.",
    icon: ScanFace,
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-100 font-['Poppins']">
      {/* Hero Slider */}
      <div
        className="relative z-0 h-[70vh] flex items-center justify-center bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10 flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 animate-fade-in">
            {slides[currentSlide].quote}
          </h2>
          <p className="text-lg md:text-xl animate-fade-in delay-100">
            {slides[currentSlide].description}
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="-mt-24 px-6 md:px-20 z-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const IconComponent = service.icon;
            return (
              <div
  key={i}
  className="group bg-white text-gray-800 rounded-xl p-6 shadow-lg hover:shadow-[#00232f] transition duration-300 transform hover:-translate-y-1 hover:scale-105 text-center"
>
  <h4 className="text-xl md:text-2xl font-bold text-indigo-600 mb-4 group-hover:text-[#00232f] transition duration-300">
    {service.title}
  </h4>
  <IconComponent
    size={60}
    className="mx-auto text-indigo-500 group-hover:text-[#00232f] transition duration-300 mb-4"
  />
  <p className="text-sm md:text-base leading-relaxed text-gray-600 group-hover:text-gray-800 transition-all">
    {service.description}
  </p>
</div>


            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;

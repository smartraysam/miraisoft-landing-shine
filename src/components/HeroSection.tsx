
import React from 'react';
import { ArrowRight, Code, Server, Settings } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-hero-pattern overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-mirai-100 rounded-full filter blur-3xl opacity-60"></div>
        <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-mirai-100 rounded-full filter blur-3xl opacity-60"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block mb-4 px-3 py-1 bg-mirai-50 border border-mirai-100 rounded-full">
            <p className="text-sm font-medium text-mirai-600">
              Building Tomorrow's Solutions Today
            </p>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl leading-tight md:leading-tight lg:leading-tight mb-6">
            Custom <span className="gradient-text">Software Development</span> for Forward-Thinking Businesses
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
            We transform your ideas into powerful, scalable, and user-friendly software solutions tailored to your unique business needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn-primary flex items-center justify-center gap-2">
              Start Your Project <ArrowRight size={18} />
            </a>
            <a href="#services" className="btn-secondary flex items-center justify-center">
              Explore Our Services
            </a>
          </div>
          
          {/* Features brief */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full">
            <div className="feature-card">
              <div className="mb-4 p-3 bg-mirai-50 rounded-lg w-fit">
                <Code className="text-mirai-600" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Custom Development</h3>
              <p className="text-gray-600">Tailored software solutions designed to meet your specific business needs</p>
            </div>
            
            <div className="feature-card">
              <div className="mb-4 p-3 bg-mirai-50 rounded-lg w-fit">
                <Server className="text-mirai-600" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Scalable Architecture</h3>
              <p className="text-gray-600">Built to grow with your business and adapt to changing requirements</p>
            </div>
            
            <div className="feature-card">
              <div className="mb-4 p-3 bg-mirai-50 rounded-lg w-fit">
                <Settings className="text-mirai-600" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Ongoing Support</h3>
              <p className="text-gray-600">Continuous maintenance and updates to ensure optimal performance</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

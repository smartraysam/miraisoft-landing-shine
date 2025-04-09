
import React from 'react';
import { CheckCircle } from 'lucide-react';

const AboutSection: React.FC = () => {
  const advantages = [
    "Expert development team with diverse technical expertise",
    "Agile development methodology for efficient project delivery",
    "Transparent communication and collaborative approach",
    "Customized solutions tailored to your specific business needs",
    "Ongoing support and maintenance to ensure optimal performance",
    "Cutting-edge technologies and industry best practices"
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="gradient-text">Miraisoft</span>
            </h2>
            
            <p className="text-gray-600 mb-6">
              At Miraisoft, we specialize in transforming your ideas into powerful, scalable software solutions tailored to your unique business needs. With a team of experienced developers and a passion for innovation, we're dedicated to helping businesses of all sizes leverage technology to achieve their goals.
            </p>
            
            <p className="text-gray-600 mb-8">
              Founded on the principles of quality, innovation, and client satisfaction, we work closely with you to understand your vision and deliver solutions that not only meet but exceed your expectations. Our expertise spans across various industries, allowing us to bring valuable insights to your projects.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-mirai-600 mt-1 shrink-0" />
                  <p className="text-gray-700">{advantage}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <div className="relative">
              <div className="aspect-video overflow-hidden rounded-lg mb-8 bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                  alt="Team working on software development"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-4xl font-bold text-mirai-600 mb-1">10+</div>
                  <p className="text-gray-600">Years of Experience</p>
                </div>
                
                <div>
                  <div className="text-4xl font-bold text-mirai-600 mb-1">200+</div>
                  <p className="text-gray-600">Projects Delivered</p>
                </div>
                
                <div>
                  <div className="text-4xl font-bold text-mirai-600 mb-1">50+</div>
                  <p className="text-gray-600">Expert Developers</p>
                </div>
                
                <div>
                  <div className="text-4xl font-bold text-mirai-600 mb-1">95%</div>
                  <p className="text-gray-600">Client Satisfaction</p>
                </div>
              </div>
              
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-mirai-600 rounded-lg -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-mirai-400 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

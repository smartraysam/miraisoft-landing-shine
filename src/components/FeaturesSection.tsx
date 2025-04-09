
import React from 'react';
import { Code, Monitor, Database, BarChart, Globe, Smartphone, Shield, Zap, Repeat } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Code className="text-white" size={24} />,
      title: "Custom Software Development",
      description: "Tailored solutions designed to address your specific business challenges and requirements.",
      bgColor: "bg-mirai-600"
    },
    {
      icon: <Monitor className="text-white" size={24} />,
      title: "Web Application Development",
      description: "Responsive web apps with modern UI/UX for an exceptional user experience.",
      bgColor: "bg-mirai-500"
    },
    {
      icon: <Smartphone className="text-white" size={24} />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      bgColor: "bg-mirai-600"
    },
    {
      icon: <Database className="text-white" size={24} />,
      title: "Database Design & Management",
      description: "Efficient database solutions for secure data storage and management.",
      bgColor: "bg-mirai-500"
    },
    {
      icon: <BarChart className="text-white" size={24} />,
      title: "Business Intelligence",
      description: "Data analytics and visualization tools to help you make informed business decisions.",
      bgColor: "bg-mirai-600"
    },
    {
      icon: <Globe className="text-white" size={24} />,
      title: "Cloud Solutions",
      description: "Secure, scalable cloud-based solutions for improved accessibility and efficiency.",
      bgColor: "bg-mirai-500"
    },
    {
      icon: <Shield className="text-white" size={24} />,
      title: "Cybersecurity Services",
      description: "Comprehensive security measures to protect your applications and data.",
      bgColor: "bg-mirai-600"
    },
    {
      icon: <Zap className="text-white" size={24} />,
      title: "Performance Optimization",
      description: "Speed and efficiency improvements for existing software systems.",
      bgColor: "bg-mirai-500"
    },
    {
      icon: <Repeat className="text-white" size={24} />,
      title: "Maintenance & Support",
      description: "Ongoing technical support and regular updates to ensure optimal performance.",
      bgColor: "bg-mirai-600"
    }
  ];

  return (
    <section id="services" className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of software development services to help businesses innovate and grow
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full border border-gray-100">
              <div className={`${feature.bgColor} p-4 flex items-center`}>
                <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#contact" className="btn-primary inline-flex items-center">
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

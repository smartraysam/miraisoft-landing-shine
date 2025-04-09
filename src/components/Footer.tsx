
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Github size={20} />, href: "#", label: "GitHub" }
  ];
  
  const links = [
    { section: "Company", items: ["About Us", "Careers", "Our Team", "Blog"] },
    { section: "Services", items: ["Web Development", "Mobile Apps", "Custom Software", "Cloud Solutions"] },
    { section: "Resources", items: ["Documentation", "Help Center", "FAQ", "Community"] },
    { section: "Legal", items: ["Terms of Service", "Privacy Policy", "Cookie Policy", "Security"] }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-4">
              <span className="text-2xl font-heading font-bold">
                Mirai<span className="text-mirai-400">soft</span>
              </span>
            </a>
            <p className="text-gray-400 mb-6 max-w-md">
              Transforming ideas into powerful, scalable software solutions tailored to your unique business needs.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="w-10 h-10 bg-gray-800 hover:bg-mirai-600 flex items-center justify-center rounded-full transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {links.map((column, index) => (
            <div key={index}>
              <h4 className="text-lg font-bold mb-4">{column.section}</h4>
              <ul className="space-y-3">
                {column.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a href="#" className="text-gray-400 hover:text-mirai-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {year} Miraisoft. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-mirai-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-mirai-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-mirai-400 transition-colors">
              Cookies Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

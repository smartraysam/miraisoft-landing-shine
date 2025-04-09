
import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      content: "Miraisoft transformed our business operations with a custom ERP solution that perfectly aligned with our workflow. Their attention to detail and commitment to understanding our needs led to a solution that exceeded our expectations.",
      author: "Sarah Johnson",
      position: "Operations Director, TechFlow Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    },
    {
      content: "Working with Miraisoft has been a game-changer for our startup. Their agile approach and technical expertise helped us launch our MVP ahead of schedule. The team's innovative solutions and reliable support have made them our go-to development partner.",
      author: "Michael Chen",
      position: "Founder, InnovateTech",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    },
    {
      content: "Miraisoft developed a mobile application that revolutionized how we interact with our customers. Their team's creativity, technical skills, and commitment to quality resulted in an intuitive, high-performing app that our users love.",
      author: "Lisa Rodriguez",
      position: "Digital Manager, ConsumerBrands",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    }
  ];

  return (
    <section id="testimonials" className="bg-mirai-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with Miraisoft.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 h-full flex flex-col">
              <Quote className="text-mirai-200 mb-4" size={40} />
              
              <p className="text-gray-600 flex-grow">"{testimonial.content}"</p>
              
              <div className="flex items-center mt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-mirai-600 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to start your project?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Partner with our expert team to transform your ideas into powerful, scalable software solutions.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-mirai-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

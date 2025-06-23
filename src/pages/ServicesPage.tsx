import React from 'react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Men\'s Haircuts',
      description: 'Modern and classic cuts personalized with AI technology',
      features: [
        'AI facial analysis',
        'Classic and modern cuts',
        'Beard and mustache',
        'Hair treatments',
        'Personalized style advice'
      ],
      price: 'From $25,000',
      image: '/images/services/haircut.png'
    },
    {
      id: 2,
      title: 'Women\'s Haircuts',
      description: 'Unique styles and current trends with smart recommendations',
      features: [
        'Trendy cuts',
        'Professional coloring',
        'Hydration treatments',
        'Event hairstyles',
        'AI color consulting'
      ],
      price: 'From $35,000',
      image: '/images/maryoris.png'
    },
    {
      id: 3,
      title: 'Professional Manicure',
      description: 'Unique designs and specialized care for your hands',
      features: [
        'Classic manicure',
        'Custom designs',
        'Acrylic nails',
        'Hydration treatments',
        'AI-powered designs'
      ],
      price: 'From $20,000',
      image: '/images/services/manicure.png'
    }
  ];

  return (
    <div className="services-page">
      <div className="services-hero">
        <h1>Our Services</h1>
        <p>Discover our full range of services with artificial intelligence technology</p>
      </div>

      <div className="services-container">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-features">
                <h4>Includes:</h4>
                <ul>
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="service-price">
                <span className="price">{service.price}</span>
                <button className="book-button">Book</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="services-cta">
        <div className="cta-content">
          <h2>Can't find what you're looking for?</h2>
          <p>Our team is ready to create the perfect service for you</p>
          <button className="contact-button">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage; 
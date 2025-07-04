import React from 'react';
import ImageCarousel from '../components/ImageCarousel';

const HomePage: React.FC = () => {
  const carouselImages = [
    {
      src: "/henry.jpg",
      alt: "Jerry McWay - Barber Shop Owner",
      title: "Jerry McWay - Master Barber"
    },
    {
      src: "/images/camilo.png",
      alt: "Quality Haircuts",
      title: "Premium Haircuts & Styling"
    },
    {
      src: "/images/juank.png",
      alt: "Professional Styling",
      title: "Professional Hair Styling"
    },
    {
      src: "/images/maryoris.png",
      alt: "Women's Haircuts",
      title: "Women's Haircuts"
    },
    {
      src: "/images/manicure.png",
      alt: "Professional Manicure",
      title: "Professional Manicure"
    },
    {
      src: "/images/oscarafro.png",
      alt: "Professional Haircut",
      title: "Professional Haircut"
    },
    {
      src: "/images/profe.png",
      alt: "Professional Haircut",
      title: "Professional Haircut"
    },
    {
      src: "/images/image1.png",
      alt: "Women's Haircuts",
      title: "Women's Haircuts"
    }
  ];

  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-content">
          <img src="/henry.jpg" alt="Jerry McWay" className="hero-image" />
          <h1>Jerry McWay Barber Shop</h1>
          <p className="hero-subtitle">Innovation in Beauty with Artificial Intelligence</p>
        </div>
      </div>

      <div className="content-section">
        <div className="container">
          <div className="about-section">
            <h2>About Us</h2>
            <p>
              At Jerry McWay Barber Shop, we have revolutionized the beauty experience
              by implementing cutting-edge artificial intelligence technology to
              offer you the best personalized suggestions.
            </p>
          </div>

          {/* Image Carousel Section */}
          <div className="carousel-section">
            <h2>Our Work</h2>
            <p>Discover the quality and professionalism we offer in every visit</p>
            <ImageCarousel images={carouselImages} autoPlay={true} interval={4000} />
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">✂️</div>
              <h3>Men's Haircuts</h3>
              <p>
                Our AI system analyzes your face shape, hair texture, and
                lifestyle to suggest the perfect cut that enhances your personality.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💇‍♀️</div>
              <h3>Women's Styles</h3>
              <p>
                Discover your unique style with personalized recommendations based on
                current trends and specific facial features.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💅</div>
              <h3>Professional Manicure</h3>
              <p>
                From classic designs to avant-garde trends, our AI
                suggests the perfect nail style for every occasion.
              </p>
            </div>
          </div>

          <div className="ai-section">
            <h2>How Does Our AI Work?</h2>
            <div className="ai-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h4>Facial Analysis</h4>
                <p>Our system analyzes the unique features of your face</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h4>Recommendations</h4>
                <p>It generates personalized suggestions based on your profile</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h4>Perfect Result</h4>
                <p>Enjoy a style that enhances your natural beauty</p>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h2>Ready for your Transformation?</h2>
            <p>
              Book your appointment today and discover how artificial intelligence can
              revolutionize your look.
            </p>
            <button className="cta-button">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 
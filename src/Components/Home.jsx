
import React, { useEffect } from 'react';  // react lib and useEff hook
import 'bootstrap/dist/css/bootstrap.min.css';
import '../custom.css';


function Home() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
        });
      });
    });
  }, []);

  return (
    <div className="container-fluid p-0"> {/* Full-width container with no padding */}
     
      <header className="hero-section">
        <div className="hero-text">
         
          
          <h1>MarryMates</h1>
          <h2>Mumbai-based wedding planners</h2>
          <p className="lead">
            Welcome to MarryMates. <br/>We are a full-service wedding planning company in Bandra, Mumbai, specializing in unique and memorable events.
          </p>
          <a href="/Services" className="btn btn-warning btn-lg mt-3">
            Explore Our Services
          </a>
        </div>
      </header>

      <main className="container">
  <section id="features" className="my-5 text-center">
    <h3>Why Choose Us?</h3>
    <div className="row mt-4">
      {/* Personalized Planning Section */}
      <div className="col-md-4">
        <i className="bi bi-heart-fill text-danger display-4"></i>
        <h4>Personalized Planning</h4>
        <p>Every wedding is uniquely crafted to reflect your love story.</p>
        <a href="/vendors" className="btn btn-primary mt-3">
        <i class="bi bi-send me-2"></i>
          Start Planning
        </a> 
      </div>

      {/* Perfect Venues Section */}
      <div className="col-md-4">
        <i className="bi bi-geo-alt-fill text-primary display-4"></i>
        <h4>Perfect Venues</h4>
        <p>Stunning venues tailored to your dream wedding.<br></br>Select your magical place!</p>
        
        <a href="/venues" className="btn btn-primary mt-3">
        <i class="bi bi-globe-central-south-asia me-2" ></i>
          Explore Venues
        </a> 
      </div>

      {/* Memorable Experiences Section */}
      <div className="col-md-4">
        <i className="bi bi-stars text-warning display-4"></i>
        <h4>Memorable Experiences</h4>
        <p>Create lasting memories with seamless execution.<br></br>Explore our curated Experiences!</p>
        <a href="/about-us" className="btn btn-primary mt-3">
        <i className="bi bi-chat-heart-fill me-2"></i> 
          About Us
        </a> 
      </div>
    </div>
  </section>

        <section id="testimonials" className="my-5">
          <h3 className='text-center'>What Our Clients Say</h3>
          <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <blockquote className="blockquote text-center">
                  <p>"MarryMates made our day magical! Everything was perfect."</p>
                  <footer className="blockquote-footer">Anjali & Harish</footer>
                </blockquote>
              </div>
              <div className="carousel-item">
                <blockquote className="blockquote text-center">
                  <p>"MarryMates team exceeded our expectations. Highly recommend them!"</p>
                  <footer className="blockquote-footer">Sonia & Rajesh</footer>
                </blockquote>
              </div>
              <div className="carousel-item">
                <blockquote className="blockquote text-center">
                  <p>"Working with MarryMates was an absolute pleasure from start to finish. 
                      They brought our wedding vision to life and exceeded our expectations in every way possible. 
                      From the stunning Hawaiian themed night to the glamorous Great Gatsby themed Sangeeth, the decor was simply breathtaking. 
                      Our guests couldn’t stop raving about how beautiful everything looked, and it was all thanks to the hard work and attention to detail by MarryMates Team. 
                      They went above and beyond to make sure everything was perfect, and we couldn’t be more grateful. Thank you both for making our daughter’s special day so magical!" 
                  </p>
                  <footer className="blockquote-footer"> Chitra Padival (the bride’s mother).</footer>
                </blockquote>
              </div>
              <div className="carousel-item">
                <blockquote className="blockquote text-center">
                  <p>"Divya & Vithika were the real stars of the show. 
                    We wanted everything floral and a mix of both modern and traditional decor. 
                    The team sent us mood-boards and vision charts to select themes for the wedding. 
                    We worked with them to identify the vegan dishes to be served during the ceremony, they coordinated our logistics, and the entire Taj Madikeri events. 
                    It rained profusely on the day before the wedding and their team were up from 10pm till 5am on the day of the wedding, working through a literal storm to set up the mandap and set up the flower arrangements." 
                  </p>
                  <footer className="blockquote-footer"> Chakra Sai (the groom) </footer>
                </blockquote>
              </div>
            </div>
            <a className="carousel-control-prev" href="#testimonialCarousel" role="button" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#testimonialCarousel" role="button" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </a>
          </div>
        </section>

        <section className="parallax">
          <h3>Your Dream Wedding Awaits</h3>
          <h4>Make sure to book your wedding planner today!! </h4>
        </section>
      </main>

      
    </div>
  );
}

export default Home;

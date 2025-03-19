import React from "react";  
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import { FaStar, FaQuoteLeft } from "react-icons/fa"; // Icon imports for star ratings and quotes
import '../custom.css';  // Import the custom styles

function Services() {
  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: 'url("/images/hero-bg.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "100px 0",
          textAlign: "center",
          color: "black",
          minHeight: "650px"  // Ensures a minimum height for the hero section
        }}
      >
        <Container>
          <h1 className="display-4 text-black">Our Wedding Services</h1>
          {/* <p className="lead text-black">Let us bring your dream wedding to life with elegance and style.</p> */}
          {/* <Button variant="light" href="/Services" className="mt-3">
            Explore Our Services
          </Button> */}
        </Container>
      </div>

      {/* Services Overview */}
      <Container className="my-5" id="services">
        <h2 className="text-center mb-4">What We Offer</h2>
        <Row className="d-flex justify-content-center">
          <Col md={6} className="mb-4">
            <Card className="service-card">
              <Card.Img variant="top" src="/images/weddings.jpg" alt="Weddings" />
              <Card.Body>
                <Card.Title>Weddings</Card.Title>
                <Card.Text>
                  Full wedding planning services tailored to your love story, from venue selection to stunning décor.
                </Card.Text>
              
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card className="service-card">
              <Card.Img variant="top" src="/images/extra-touches.jpg" alt="Extra Touches" />
              <Card.Body>
                <Card.Title>Extra Touches</Card.Title>
                <Card.Text>
                  Enhance your wedding with catering, cakes, photography, and personalized décor items.
                </Card.Text>
            
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col md={6} className="mb-4">
            <Card className="service-card">
              <Card.Img variant="top" src="/images/entertainment.jpg" alt="Entertainment" />
              <Card.Body>
                <Card.Title>Music & Entertainment</Card.Title>
                <Card.Text>
                  Create a lively atmosphere with DJs, live bands, fireworks, and photo booths.
                </Card.Text>
           
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card className="service-card">
              <Card.Img variant="top" src="/images/other-events.jpg" alt="Other Events" />
              <Card.Body>
                <Card.Title>Other Events</Card.Title>
                <Card.Text>
                  From christenings to corporate events, we cater to all kinds of celebrations with excellence.
                </Card.Text>
             
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Additional Services Carousel */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Additional Services</h2>
        <Carousel>
          {/* Carousel Item 1 */}
          <Carousel.Item>
            <Row className="d-flex justify-content-center">
              <Col md={4} className="mb-4">
                <Card className="service-card">
                  <Card.Img variant="top" src="/images/wedding-films.jpg" alt="Wedding Films" />
                  <Card.Body>
                    <Card.Title>Wedding Films</Card.Title>
                    <Card.Text>
                      Capture every moment of your wedding with stunning wedding films, preserving memories for a lifetime.
                    </Card.Text>
                   
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card className="service-card">
                  <Card.Img variant="top" src="/images/entertainment-setups.jpg" alt="Entertainment Setups" />
                  <Card.Body>
                    <Card.Title>Entertainment Setups</Card.Title>
                    <Card.Text>
                      Make your wedding memorable with exciting entertainment setups like live music, DJs, and photo booths.
                    </Card.Text>
               
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card className="service-card">
                  <Card.Img variant="top" src="/images/stage-setups.jpg" alt="Stage Setups" />
                  <Card.Body>
                    <Card.Title>Stage Setups</Card.Title>
                    <Card.Text>
                      Create a grand stage for your wedding ceremony with customized setups, floral arrangements, and lighting.
                    </Card.Text>
                 
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>

          {/* Carousel Item 2 */}
          <Carousel.Item>
            <Row className="d-flex justify-content-center">
              <Col md={4} className="mb-4">
                <Card className="service-card">
                  <Card.Img variant="top" src="/images/ceremony-accessories.jpg" alt="Ceremony Accessories" />
                  <Card.Body>
                    <Card.Title>Ceremony Accessories</Card.Title>
                    <Card.Text>
                      From floral decorations to ceremonial items, we offer a wide range of accessories to enhance your ceremony.
                    </Card.Text>
                 
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card className="service-card">
                  <Card.Img variant="top" src="/images/mehendi-artist.jpg" alt="Mehendi Artist" />
                  <Card.Body>
                    <Card.Title>Mehendi Artist</Card.Title>
                    <Card.Text>
                      Traditional and creative henna designs for brides and guests, adding an artistic touch to your celebrations.
                    </Card.Text>
                
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card className="service-card">
                  <Card.Img variant="top" src="/images/invitation-cards.jpg" alt="Invitation Cards" />
                  <Card.Body>
                    <Card.Title>Invitation Cards</Card.Title>
                    <Card.Text>
                      Design your perfect wedding invitation, with beautiful and personalized cards that reflect your theme.
                    </Card.Text>
                
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>

          {/* Carousel Item 3 */}
          <Carousel.Item>
            <Row className="d-flex justify-content-center">
              <Col md={4} className="mb-4">
                <Card className="service-card">
                  <Card.Img variant="top" src="/images/candid-photography.jpg" alt="Candid Photography" />
                  <Card.Body>
                    <Card.Title>Candid Photography</Card.Title>
                    <Card.Text>
                      Capture the most precious moments in an artistic and candid way, without posed photography.
                    </Card.Text>
                   
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card className="service-card">
                  <Card.Img variant="top" src="/images/ceremony-venues.jpg" alt="Ceremony Venues" />
                  <Card.Body>
                    <Card.Title>Ceremony Venues</Card.Title>
                    <Card.Text>
                      Choose from an exquisite selection of wedding venues that offer breathtaking views and luxurious settings.
                    </Card.Text>
                   
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>

      {/* Call to Action */}
      <div className="text-center py-5" style={{ background: "black" }}>
        <h2>Ready to Plan Your Dream Wedding?</h2>
        <p>Contact us now to get started on your magical journey.</p>
        <Button variant="success" href="https://wa.me/+919579883194" className="hover-btn">
          Chat with Us
        </Button>
      </div>
    </div>
  );
}

export default Services;
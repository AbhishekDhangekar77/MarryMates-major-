import React from "react";
import { Container, Row, Col, Card, Button, Accordion, Carousel } from "react-bootstrap";
import '../custom.css';


function Aboutus() {
  return (
    <div>
      {/* Hero Section */}
      <div className="hello"
        style={{
            backgroundImage: 'url("/images/photo7.jpg")', // Add your banner image here
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "100px 0",
            color: "black",
            textAlign: "center",
          }}
      >
        <Container>
          <h1>About MarryMates</h1>
          <h3>We Make Your Dream Day Magical</h3>
          <p>
            Passionate wedding planners at your service! We turn your love
            story into a perfect celebration.
          </p>
          <Button variant="light" href="#features" className="mt-3">
            Discover More
          </Button>
        </Container>
      </div>

      {/* Features Section */}
      <Container className="my-5" id="features">
        <h2 className="text-center">Why Choose MarryMates?</h2>
        <Row className="mt-4">
          <Col md={4} className="text-center">
            <img
              src="/images/tailored-themes.jpg"
              alt="Tailored Themes"
              className="img-fluid mb-3"
            />
            <h4>Tailored Themes</h4>
            <p>
              From vintage charm to modern chic, we create personalized wedding
              themes.
            </p>
          </Col>
          <Col md={4} className="text-center">
            <img
              src="/images/dedicated-team.jpg"
              alt="Dedicated Team"
              className="img-fluid mb-3"
            />
            <h4>Dedicated Team</h4>
            <p>
              Our experts ensure your special day is stress-free and flawless.
            </p>
          </Col>
          <Col md={4} className="text-center">
            <img
              src="/images/captivating-memories.jpg"
              alt="Captivating Memories"
              className="img-fluid mb-3"
            />
            <h4>Captivating Memories</h4>
            <p>
              Create moments that you’ll cherish forever with us by your side.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Story Section with Carousel */}
      <Container className="my-5">
        <h2 className="text-center">Our Journey</h2>
        <Carousel>
          {/* Carousel Item 1 */}
          <Carousel.Item>
            <img
              src="/images/our-journey-1.jpg"
              alt="Journey Step 1"
              className="d-block w-100"
            />
            <Carousel.Caption>
              <h4>Our Beginnings</h4>
              <p>
                MarryMates started with a dream to make every wedding special. In
                2024, we laid our foundation with a small, passionate team.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Carousel Item 2 */}
          <Carousel.Item>
            <img
              src="/images/our-journey-2.jpg"
              alt="Journey Step 2"
              className="d-block w-100"
            />
            <Carousel.Caption>
              <h4>Growing Together</h4>
              <p>
                Over the years, we expanded our services, planning elegant and
                memorable weddings across cities and destinations.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Carousel Item 3 */}
          <Carousel.Item>
            <img
              src="/images/our-journey-3.jpg"
              alt="Journey Step 3"
              className="d-block w-100"
            />
            <Carousel.Caption>
              <h4>Achieving Milestones</h4>
              <p>
                With countless weddings planned, we have become a trusted name in
                wedding planning, known for creativity and perfection.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

      {/* Testimonials Section */}
      <Container className="my-5">
        <h2 className="text-center">What Our Couples Say</h2>
        <Row className="mt-4">
          <Col md={6} className="mb-3">
            <Card className="hover-card">
              <Card.Img
                variant="top"
                src="/images/testimonial-1.jpg" // Add testimonial image
                alt="Priya & Raj"
              />
              <Card.Body>
                <Card.Text>
                  "MarryMates turned our wedding into a fairy tale. From décor
                  to execution, everything was magical!"
                </Card.Text>
                <Card.Footer >- Priya & Raj</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-3">
            <Card className="hover-card">
              <Card.Img
                variant="top"
                src="/images/testimonial-2.jpg" // Add testimonial image
                alt="Anjali & Karan"
              />
              <Card.Body>
                <Card.Text>
                  "Their professionalism and creative ideas made our day
                  perfect. We couldn’t have asked for more!"
                </Card.Text>
                <Card.Footer >- Anjali & Karan</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* FAQ Section */}
      <Container className="my-5" id="faq">
        <h2 className="text-center">Frequently Asked Questions</h2>
        <Accordion className="mt-4">
          <Accordion.Item eventKey="0">
            <Accordion.Header>What services do you provide?</Accordion.Header>
            <Accordion.Body>
              We offer end-to-end wedding planning services, including venue
              selection, décor, catering, entertainment, and more.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Do you handle destination weddings?</Accordion.Header>
            <Accordion.Body>
              Absolutely! We specialize in organizing beautiful destination
              weddings tailored to your preferences.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>How early should we contact you?</Accordion.Header>
            <Accordion.Body>
              It’s ideal to get in touch at least 6 months in advance, but we
              can also manage short-notice events.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>

      {/* Contact Section */}
      <div className="text-center py-5" style={{ background: "rgba(6, 6, 6, 0.5)" }}>
        <Container>
          <h2>Let’s Plan Your Wedding Together!</h2>
          <p>Contact us today to start your magical journey.</p>
          <Button variant="success" href="https://wa.me/your-number">
            Chat with Us
          </Button>
        </Container>
      </div>
    </div>
  );
}

export default Aboutus;

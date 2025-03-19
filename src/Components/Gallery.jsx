import React from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import '../Gallery.css';  // Optionally create a CSS file for custom styling

// Sample gallery data
const galleryData = [
  {
    id: 1,
    venue: 'Elegant Events',
    images: [
      'images/wed8.jpg',
      'images/gallery images/lun5.jfif',
      'images/gallery images/ven11.jfif',
      'images/gallery images/ven12.jfif',
    ],
    description: 'A grand venue for your special day.',
  },
  {
    id: 2,
    venue: 'Royal Weddings ',
    images: [
        'images/gallery images/ven4.jfif',
        'images/wed2.jpg',
        'images/wed3.jpg',
        'images/gallery images/lun3.jfif',
    ],
    description: 'Luxury and elegance combined.',
  },
  {
    id: 3,
    venue: 'Dream Day Planners',
    images: [
      'images/gallery images/ven1.jfif',
      'images/wed6.jpg',
      'images/gallery images/ven2.jfif',
      'images/gallery images/lun1.jfif',
    ],
    description: 'A perfect place for your dream wedding.',
  },
  {
    id: 4,
    venue: 'All in One',
    images: [
        'images/gallery images/ven3.jfif',
      'images/wed7.jpg',
      'images/wed4.jpg',
      'images/gallery images/lun2.jfif',
    ],
    description: 'A Royal wedding.',
  },
  {
    id: 5,
    venue: 'Wedding Wire',
    images: [
      'images/wed5.jpg',
      'images/gallery images/ven5.jfif',
      'images/gallery images/ven6.jfif',
      'images/gallery images/lun4.jfif',
    ],
    description: 'A perfect plan for your dream wedding.',
  },
  {
    id: 6,
    
    venue: 'Wed Good Planners',
    images: [
      'images/gallery images/ven9.jfif',
      'images/gallery images/ven8.jfif',
      'images/gallery images/lun6.jfif',
      'images/gallery images/ven10.jfif',
    ],
    description: 'A Beautiful dream wedding.',
  },
  
];

const Gallery = () => {
  return (
    <Container>
      <h1 className="my-4">Our Vendors Wedding Venues & Celebrations </h1>
      <p>Explore our beautiful wedding venues through this photo gallery.</p>

      <Row>
        {galleryData.map((venue) => (
          <Col key={venue.id} md={4} className="mb-4">
            <Card>
              <Carousel>
                {venue.images.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={image}
                      alt={`Slide ${index + 1}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
              <Card.Body>
                <Card.Title>{venue.venue}</Card.Title>
                <Card.Text>{venue.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
//<Button variant="primary">Learn More</Button>
export default Gallery;

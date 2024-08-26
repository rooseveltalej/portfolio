import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Contact Me</h5>
            <p>Email: <a href="mailto:your.email@example.com" className="text-light">your.email@example.com</a></p>
            <p>Phone: (123) 456-7890</p>
          </Col>
          <Col md={4}>
            <h5>Links</h5>
            <ListGroup variant="flush">
              <ListGroupItem as="a" href="#home">Home</ListGroupItem>
              <ListGroupItem as="a" href="#about">About</ListGroupItem>
              <ListGroupItem as="a" href="#projects">Projects</ListGroupItem>
              <ListGroupItem as="a" href="#contact">Contact</ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={4}>
            <h5>Follow Me</h5>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light me-2">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light me-2">
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light me-2">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-light">
                <FaGithub size={24} />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-4">
            <p>&copy; {new Date().getFullYear()} Roosevelt Alejandro. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

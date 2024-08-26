import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center text-center">
        <Col md={8}>
          <h1 className="display-4 mb-4">Contact Me</h1>
          <p className="lead mb-4">
            If you have any questions, opportunities, or just want to say hello, feel free to reach out to me!
          </p>
          <Form>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Your Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Your Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Write your message here" />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="mt-5 text-center">
        <Col>
          <h5>Connect with me on social media:</h5>
          <div className="d-flex justify-content-center mt-3">
            <a href="https://linkedin.com/in/rooseveltalej" target="_blank" rel="noopener noreferrer" className="mx-3 text-dark">
              <i className="fab fa-linkedin fa-2x">Linkedin</i>
            </a>
            <a href="https://github.com/rooseveltalej" target="_blank" rel="noopener noreferrer" className="mx-3 text-dark">
              <i className="fab fa-github fa-2x">Github</i>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;

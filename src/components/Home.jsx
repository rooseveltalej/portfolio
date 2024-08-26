import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <div id="home" className="home bg-dark text-light d-flex align-items-center" style={{ height: '100vh' }}>
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <h1 className="display-4">Hello, I'm Roosevelt Alejandro</h1>
            <p className="lead">Software Developer | Computer Science Student</p>
            <Button 
              href="/Roosevelt_Alejandro_CV.pdf" 
              variant="primary" 
              size="lg" 
              target="_blank"
              rel="noopener noreferrer"
            >
              View My CV
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;

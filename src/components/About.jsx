import { Container, Row, Col, Card, Image } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center text-center">
        <Col md={8}>
        <Image 
          src="src/assets/profilePicture.png" 
          alt="Roosevelt Alejandro" 
          roundedCircle 
          className="mb-4" 
          fluid 
          style={{ maxWidth: '150px', height: 'auto' }}
        />
          <h1 className="display-4 mb-4">About Me</h1>
          <p className="lead">
            Hi! I’m Roosevelt Alejandro, a passionate software developer from Costa Rica.
          </p>

          <p className="lead">

            My journey into computing began a bit unconventionally. Initially, I enrolled in Business Administration at university. 
            Although I enjoyed it, something deep inside me urged me to pursue something related to computers. 
            I followed that instinct and switched to studying Computer Engineering at the Instituto Tecnológico de Costa Rica.
          </p>
          <p className="lead">
            Since July 2022, I have been immersed in this field, and I am amazed by the endless possibilities it offers. 
            My academic background has provided me with a solid foundation, but I am committed to expanding my knowledge beyond the classroom. 
            I am passionate about supplementing my formal education with self-directed learning, 
            utilizing online resources such as Udemy and YouTube to explore various topics.
          </p>
          <p className="lead">
            Through these platforms, I have broadened my technological toolkit, mastering programming languages such as Java, 
            Python and JavaScript, as well as full-stack web development technologies, including Node.js for server-side 
            applications and HTML, CSS and React for client-side structure and design. This hybrid approach to learning has allowed me to apply 
            theoretical knowledge to practical projects, enhancing my technical skills and understanding.
          </p>
        </Col>
      </Row>
      <Row className="text-center">
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Experience</Card.Title>
              <Card.Text>
                Since July 2022, actively working and growing in the field of computing, tackling various challenges and projects.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Skills</Card.Title>
              <Card.Text>
                Proficient in Java, Python, JavaScript, React.js, Node.js, MySQL, Linux and Git. 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Education</Card.Title>
              <Card.Text>
                Bachelor’s Degree in Computer Engineering from Instituto Tecnológico de Costa Rica. 
                Continuously learning through online courses and practical projects.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;

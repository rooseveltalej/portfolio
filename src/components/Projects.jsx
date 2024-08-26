import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const projects = [
  {
    title: 'Event Ticketing System',
    description: 'Server-side implementation for a simulated event ticket purchasing system, developed as part of the Programming Languages course at the Instituto Tecnológico de Costa Rica (ITCR) during the second semester of 2024. The project is implemented using Rust, focusing on high performance, concurrency, and secure coding practices.',
    link: 'https://github.com/rooseveltalej/EventTicketServer',
  },
  {
    title: 'Movie and Series Search Page',
    description: 'This dynamic web application, developed using React, allows users to search for movies and TV series through The Movie Database API. The platform supports both Spanish and English, offering a bilingual user experience. Users can log in to their accounts to create and view personalized lists of their favorite movies and shows. This project is part of the Software Design course at the Instituto Tecnológico de Costa Rica, showcasing both technical skills and practical application in software development.',
    link: 'https://github.com/rooseveltalej/pry-diseno-fase-uno',
  },
  {
    title: 'Project 3',
    description: 'Description of Project 3. It includes technologies like Java, Spring Boot, and MySQL.',
    link: 'https://github.com/your-username/project3',
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <Container className="py-5">
      <h1 className="display-4 text-center mb-5">My Projects</h1>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
              </Card.Body>
              <Card.Footer className="text-center">
                <Button href={project.link} target="_blank" variant="primary">
                  View Project
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;

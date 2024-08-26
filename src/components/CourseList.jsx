import { Container, Row, Col, Card } from 'react-bootstrap';
import { coursesBySemester } from '../data/courses';  // Importa los cursos por semestres

const CourseList = () => {
  const getVariant = (status) => {
    switch (status) {
      case "completed":
        return "success"; // Verde para completados
      case "in-progress":
        return "warning"; // Amarillo para en curso
      case "pending":
        return "secondary"; // Gris para pendientes
      default:
        return "light";
    }
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">University Courses</h2>
      {coursesBySemester.map((semesterData, index) => (
        <div key={index} className="mb-5">
          <h3 className="mb-4">{semesterData.semester}</h3>
          <Row>
            {semesterData.courses.map((course, idx) => (
              <Col md={6} lg={4} key={idx} className="mb-4">
                <Card bg={getVariant(course.status)} text="white">
                  <Card.Body>
                    <Card.Title>{course.name}</Card.Title>
                    <Card.Text>Status: {course.status.charAt(0).toUpperCase() + course.status.slice(1)}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default CourseList;
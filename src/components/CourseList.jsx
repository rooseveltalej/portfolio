import { Container, Grid, Card, CardContent, Typography } from '@mui/material';
import { green, yellow, grey } from '@mui/material/colors';
import { coursesBySemester } from '../data/courses';  // Importa los cursos por semestres

const CourseList = () => {
  const getBgColor = (status) => {
    switch (status) {
      case "completed":
        return green[500]; // Verde para completados
      case "in-progress":
        return yellow[700]; // Amarillo para en curso
      case "pending":
        return grey[500]; // Gris para pendientes
      default:
        return grey[200]; // Fondo claro para casos por defecto
    }
  };

  return (
    <Container sx={{ my: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        University Courses
      </Typography>
      {coursesBySemester.map((semesterData, index) => (
        <div key={index} style={{ marginBottom: '2rem' }}>
          <Typography variant="h5" gutterBottom>
            {semesterData.semester}
          </Typography>
          <Grid container spacing={4}>
            {semesterData.courses.map((course, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Card sx={{ bgcolor: getBgColor(course.status), color: 'white' }}>
                  <CardContent>
                    <Typography variant="h6">
                      {course.name}
                    </Typography>
                    <Typography>
                      Status: {course.status.charAt(0).toUpperCase() + course.status.slice(1)}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      ))}
    </Container>
  );
};

export default CourseList;

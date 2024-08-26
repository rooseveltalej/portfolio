import { Container, Grid, Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Grid container justifyContent="center">
        <Grid item md={8}>
          <CardMedia
            component="img"
            src="src/assets/profilePicture.png"
            alt="Roosevelt Alejandro"
            sx={{
              borderRadius: '50%',
              mb: 4,
              width: 150,
              height: 'auto',
              mx: 'auto',
            }}
          />
          <Typography variant="h3" component="h1" gutterBottom textAlign="center">
            About Me
          </Typography>
          <Typography variant="body1" paragraph textAlign="center">
            Hi! I’m Roosevelt Alejandro, a passionate software developer from Costa Rica.
          </Typography>
          <Typography variant="body1" paragraph textAlign="center">
            My journey into computing began a bit unconventionally. Initially, I enrolled in Business Administration at university. 
            Although I enjoyed it, something deep inside me urged me to pursue something related to computers. 
            I followed that instinct and switched to studying Computer Engineering at the Instituto Tecnológico de Costa Rica.
          </Typography>
          <Typography variant="body1" paragraph textAlign="center">
            Since July 2022, I have been immersed in this field, and I am amazed by the endless possibilities it offers. 
            My academic background has provided me with a solid foundation, but I am committed to expanding my knowledge beyond the classroom. 
            I am passionate about supplementing my formal education with self-directed learning, 
            utilizing online resources such as Udemy and YouTube to explore various topics.
          </Typography>
          <Typography variant="body1" paragraph textAlign="center">
            Through these platforms, I have broadened my technological toolkit, mastering programming languages such as Java, 
            Python and JavaScript, as well as full-stack web development technologies, including Node.js for server-side 
            applications and HTML, CSS and React for client-side structure and design. This hybrid approach to learning has allowed me to apply 
            theoretical knowledge to practical projects, enhancing my technical skills and understanding.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={4} sx={{ mt: 5 }} textAlign="left">
        <Grid item md={4}>
          <Card variant='outlined'>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Experience
              </Typography>
              <Typography variant="body2">
                Since July 2022, actively working and growing in the field of computing, tackling various challenges and projects.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card variant='outlined'>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Skills
              </Typography>
              <Typography variant="body2">
                Proficient in Java, Python, JavaScript, React.js, Node.js, MySQL, Linux and Git. 
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card variant='outlined'>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Education
              </Typography>
              <Typography variant="body2">
                Bachelor’s Degree in Computer Engineering from Instituto Tecnológico de Costa Rica. 
                Continuously learning through online courses and practical projects.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;

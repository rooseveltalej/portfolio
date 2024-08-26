import { Container, Grid, Card, CardContent, CardActions, Button, Typography } from '@mui/material';

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
    <Container sx={{ py: 5 }}>
      <Typography variant="h3" component="h1" gutterBottom textAlign="center" mb={5}>
        My Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', border: '1px solid #ddd' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button href={project.link} target="_blank" variant="contained" color="primary">
                  View Project
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;

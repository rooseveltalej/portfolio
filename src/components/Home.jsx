import { Container, Grid, Button, Typography, Box } from '@mui/material';

const Home = () => {
  return (
    <Box
      id="home"
      sx={{
        height: '100vh',
        backgroundColor: 'white',  // Fondo blanco
        color: 'black',            // Texto en negro para buen contraste
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',      // Necesario para posicionar la capa de fondo correctamente
        overflow: 'hidden',        // Para asegurarse de que el fondo no se desborde
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.5)', // Capa de fondo semi-transparente
          zIndex: -1,
        }}
      />
      <Container>
        <Grid container justifyContent="center" textAlign="center">
          <Grid item md={8}>
            <Typography variant="h1" component="h1" gutterBottom>
              Hi, I'm Roosevelt Alejandro
            </Typography>
            <Typography variant="h5" component="p" gutterBottom>
              Software Developer | Computer Science Student
            </Typography>
            <Button
              href="/Roosevelt_Alejandro_CV.pdf"
              variant="contained"
              size="large"
              color="primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View My CV
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;

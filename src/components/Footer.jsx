import { Container, Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'background.paper',
        color: 'text.secondary',
        py: 2,
        textAlign: 'center',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Roosevelt Alejandro. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

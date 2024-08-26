import React from 'react';
import { Container, Grid, Typography, Box, Link } from '@mui/material';
import { Instagram, Twitter, LinkedIn, GitHub } from '@mui/icons-material';

const Contact = () => {
  return (
    <Box sx={{ py: 5, textAlign: 'center' }}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Contact Me
        </Typography>
        <Typography variant="h6" paragraph>
          If you have any questions, opportunities, or just want to say hello, feel free to reach out to me!
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Email:</strong> <Link href="mailto:rooseveltalej@icloud.com" color="inherit">rooseveltalej@icloud.com</Link>
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Phone:</strong> <Link href="tel:+50662560520" color="inherit">+506 6256 0520</Link>
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" paragraph>
            Connect with me on social media:
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Link href="https://linkedin.com/in/rooseveltalej" target="_blank" rel="noopener noreferrer">
              <LinkedIn color="primary" sx={{ fontSize: 40 }} />
            </Link>
            <Link href="https://github.com/rooseveltalej" target="_blank" rel="noopener noreferrer">
              <GitHub color="primary" sx={{ fontSize: 40 }} />
            </Link>
            <Link href="https://twitter.com/rooseveltalej" target="_blank" rel="noopener noreferrer">
              <Twitter color="primary" sx={{ fontSize: 40 }} />
            </Link>
            <Link href="https://instagram.com/rooseveltalej" target="_blank" rel="noopener noreferrer">
              <Instagram color="primary" sx={{ fontSize: 40 }} />
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;

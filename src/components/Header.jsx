import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'white' }}>
          Roosevelt Alejandro
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <Button component={Link} to="/" sx={{ color: 'white' }}>
            Home
          </Button>
          <Button component={Link} to="/about" sx={{ color: 'white' }}>
            About
          </Button>
          <Button component={Link} to="/projects" sx={{ color: 'white' }}>
            Projects
          </Button>
          <Button component={Link} to="/contact" sx={{ color: 'white' }}>
            Contact
          </Button>
          <Button component={Link} to="/courses" sx={{ color: 'white' }}>
            Courses
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

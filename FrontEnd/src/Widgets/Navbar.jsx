import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import theme from '../Theme.js';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Button routes
import About from '../Pages/AboutPage.jsx';
import HomePage from '../Pages/HomePage.jsx';
import ContactPage from '../Pages/ContactPage.jsx';
function Navbar({ isDark, handleButtonClick }) {
  return (
    <Router>
      <div>
        <ThemeProvider theme={theme}>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ backgroundColor: isDark ? 'black' : '#FFFFFF', transition: '0.3s' }}>
              <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography sx={{ flexGrow: 1, color: isDark ? 'white' : 'black', fontSize: 25.89, fontWeight: 'bold' }}>
                  VERTECH
                </Typography>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(5, 0.07fr)', alignItems: 'center' }}>
                  <Button
                    sx={{ p: 3, pl: 6, pr: 6, '&:hover': { color: '#161F01', transition: '0.3s' } }}
                    component={Link}
                    to="/"
                  >
                    <Typography
                      sx={{
                        flexGrow: 1,
                        color: isDark ? '#FDFEFD' : 'black',
                        fontSize: 16,
                        fontFamily: 'Inter',
                        fontWeight: 'bold',
                        textTransform: 'none',
                      }}
                      component={Link}
                      to="/"
                    >
                      Home
                    </Typography>
                  </Button>
                  <Button
                    sx={{ p: 3, pl: 6, pr: 6, '&:hover': { color: '#161F01', transition: '0.3s' } }}
                    component={Link}
                    to="/about"
                  >
                    <Typography
                      sx={{
                        flexGrow: 1,
                        color: isDark ? '#FDFEFD' : 'black',
                        fontSize: 16,
                        fontFamily: 'Inter',
                        fontWeight: 'Regular',
                        textTransform: 'none',
                      }}
                    >
                      About
                    </Typography>
                  </Button>
                  <Button
                    sx={{ p: 3, pl: 6, pr: 6, '&:hover': { color: '#161F01', transition: '0.3s' } }}
                    component={Link}
                    to="/contact"
                  >
                    <Typography
                      sx={{
                        flexGrow: 1,
                        color: isDark ? '#FDFEFD' : 'black',
                        fontSize: 16,
                        fontFamily: 'Inter',
                        fontWeight: 'Regular',
                        textTransform: 'none',
                      }}
                    >
                      Contact
                    </Typography>
                  </Button>
                  <Button onClick={handleButtonClick} sx={{ p: 3, pl: 6, pr: 6, color: isDark ? '#161F01' : 'black' }}>
                    {isDark ? (
                      <LightModeIcon sx={{ color: '#FDFEFD' }} />
                    ) : (
                      <Brightness3Icon sx={{ color: '#161F01' }} />
                    )}
                  </Button>
                </Box>
              </Toolbar>
            </AppBar>
          </Box>
        </ThemeProvider>

        <div>
          <Routes>
            <Route path="/" element={< HomePage  isDark={isDark} handleButtonClick={handleButtonClick}/>} />
            <Route path="/about" element={<About isDark={isDark} handleButtonClick={handleButtonClick}/>} />
            <Route path="/contact" element={<ContactPage isDark={isDark} handleButtonClick={handleButtonClick}/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Navbar;

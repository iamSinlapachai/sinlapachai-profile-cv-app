import React from 'react'
import {
  AppBar, Toolbar, Typography, Box, Stack, IconButton,
  TextField, Button
} from '@mui/material'
import { Link } from 'react-router-dom'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'

export default function ContactUI() {
  return (
    <>
      {/* AppBar */}
      <AppBar position="static" sx={{ backgroundColor: '#121212' }}>
        <Toolbar>
          <Typography sx={{ ml: 2, textDecoration: 'none', color: '#C7C7C7', flexGrow: 1 }} component={Link} to='/'>
            Sinlapachai Keawbunruang
          </Typography>
          <Typography sx={{ mr: '20px', textDecoration: 'none', color: '#C7C7C7' }} component={Link} to='/work'>
            Work
          </Typography>
          <Typography sx={{ mr: '20px', textDecoration: 'none', color: '#C7C7C7' }} component={Link} to='/about'>
            About
          </Typography>
          <Typography sx={{ mr: '25px', textDecoration: 'none', color: '#C7C7C7' }} component={Link} to='/contact'>
            Contact
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box sx={{ px: 5, py: 8 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 5
          }}
        >
          {/* Left Side */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
              Let's Connect
            </Typography>

            <Typography variant="body1" sx={{ mb: 1 }}>
              Email: <a href="mailto:your.email@example.com">your.email@example.com</a>
            </Typography>

            <Typography variant="body1" sx={{ mb: 2 }}>
              Resume: <a href="https://your-resume-link.com" target="_blank" rel="noopener noreferrer">ดูเรซูเม่</a>
            </Typography>

            <Stack direction="row" spacing={2}>
              <IconButton component="a" href="https://www.linkedin.com/in/yourlinkedin" target="_blank">
                <LinkedInIcon fontSize="large" />
              </IconButton>
              <IconButton component="a" href="https://github.com/yourgithub" target="_blank">
                <GitHubIcon fontSize="large" />
              </IconButton>
              <IconButton component="a" href="https://twitter.com/yourtwitter" target="_blank">
                <TwitterIcon fontSize="large" />
              </IconButton>
              <IconButton component="a" href="https://instagram.com/yourinstagram" target="_blank">
                <InstagramIcon fontSize="large" />
              </IconButton>
            </Stack>
          </Box>

          {/* Right Side - Contact Form */}
          <Box sx={{ flex: 1 }}>
            <form>
              <Stack spacing={2}>
                <TextField label="Name" variant="outlined" fullWidth required />
                <TextField label="Email" variant="outlined" type="email" fullWidth required />
                <TextField label="Subject" variant="outlined" fullWidth />
                <TextField
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ backgroundColor: '#2196f3', color: 'white' }}
                >
                  Submit
                </Button>
              </Stack>
            </form>
          </Box>
        </Box>
      </Box>
    </>
  )
}

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
      <Box>
        <AppBar position="static">
          <Toolbar sx={{ backgroundColor: 'black' }}>
            <Typography sx={{ textDecoration: 'none', color: '#FFFFFF', ml: '520px', flexGrow: 1 }} component={Link} to='/'>
              Sinlapachai Keawbunruang
            </Typography>
            <Typography sx={{
              mr: '20px',
              textDecoration: 'none',
              color: '#FFFFFF',
              fontWeight: 'light'
            }}
              component={Link} to='/work'
            >
              Work
            </Typography>
            <Typography sx={{
              mr: '20px',
              textDecoration: 'none',
              color: '#FFFFFF',
              fontWeight: 'light'
            }}
              component={Link} to={'/about'}
            >
              About
            </Typography>
            <Typography sx={{
              mr: '540px',
              textDecoration: 'none',
              color: '#FFFFFF',
              fontWeight: 'light'
            }}
              component={Link} to={'/contact'}
            >
              Contact
            </Typography>

          </Toolbar>
        </AppBar >
      </Box>

    </>
  )
}

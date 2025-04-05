import React from 'react'
import { AppBar, Toolbar, Typography, Box, Avatar, Button, Stack, IconButton } from '@mui/material'
import { FormControl, FormControlLabel, RadioGroup, Radio, } from '@mui/material'
import { Link } from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'

export default function HomeUI() {
    return (
        <>
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
            </AppBar >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    px: 5,
                    py: 8,
                    backgroundColor: '#f5f5f5'
                }}
            >
                <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
                    <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
                        HI, I'm Apec Sinlapachai
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'text.secondary', mb: 4 }}>
                        นักพัฒนาเว็บไซต์ฟรอนท์เอนต์จากประเทศไทย ชอบสร้างเว็บไซต์ที่เข้าถึงง่ายและเป็นมิตรกับผู้ใช้
                    </Typography>
                    <Stack direction="row" spacing={2} justifyContent={{ xs: 'center', md: 'flex-start' }}>
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<EmailIcon />}
                            href="mailto:your.email@example.com"
                        >
                            Contact Me
                        </Button>
                        <IconButton color="primary" component="a" href="https://www.linkedin.com/in/yourlinkedin" target="_blank">
                            <LinkedInIcon fontSize="large" />
                        </IconButton>
                        <IconButton color="primary" component="a" href="https://github.com/yourgithub" target="_blank">
                            <GitHubIcon fontSize="large" />
                        </IconButton>
                    </Stack>
                </Box>

                <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', mt: { xs: 5, md: 0 } }}>
                    <Avatar
                        alt="Profile"
                        src="https://your-image-link.com/your-photo.jpg"
                        sx={{ width: 250, height: 250 }}
                    />
                </Box>
            </Box>
        </>
    )
}

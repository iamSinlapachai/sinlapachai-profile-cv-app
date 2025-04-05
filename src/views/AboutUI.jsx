import React from 'react'
import {
    AppBar, Toolbar, Typography, Box, Stack, IconButton, Button,
    Divider, Avatar, Chip
} from '@mui/material'
import { Link } from 'react-router-dom'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

export default function AboutUI() {
    return (
        <>
            {/* AppBar */}
            <AppBar position="static" sx={{ backgroundColor: '#121212' }}>
                <Toolbar>
                    <Typography sx={{ ml: 2, color: 'white', flexGrow: 1 }}>
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
            <Box sx={{ px: 5, py: 8, backgroundColor: '#fdfdfd' }}>

                {/* About Me Section */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mb: 10
                    }}
                >
                    {/* Left - Title */}
                    <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' }, mb: { xs: 4, md: 0 } }}>
                        <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                            About Me
                        </Typography>
                    </Box>

                    {/* Right - Description & Buttons */}
                    <Box sx={{ flex: 2 }}>
                        <Typography variant="body1" sx={{ mb: 3 }}>
                            ผมเป็นนักพัฒนาเว็บไซต์ฟรอนท์เอนต์ที่มีความหลงใหลในการออกแบบและสร้างประสบการณ์ผู้ใช้ที่เรียบง่าย เข้าถึงง่าย และใช้งานได้จริง
                            ผมใส่ใจในรายละเอียดเพื่อให้เว็บไซต์มีประสิทธิภาพและดูดีบนทุกอุปกรณ์
                        </Typography>
                        <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
                            <Button
                                variant="contained"
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
                    {/* Large Image */}
                    <Box sx={{ mt: 1 }}>
                        <img
                            src="https://your-image-link.com/large-photo.jpg"
                            alt="Large Portfolio Image"
                            sx={{ width: '100%', alignItems: 'center', maxHeight: 400 }}
                        />
                    </Box>
                </Box>

                {/* Divider Line */}
                <Divider sx={{ my: 10 }} />

                {/* My Capabilities Section */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    {/* Left - Title */}
                    <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' }, mb: { xs: 4, md: 0 } }}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                            My Capabilities
                        </Typography>
                    </Box>

                    {/* Right - Description & Skills */}
                    <Box sx={{ flex: 2 }}>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            ผมมุ่งมั่นในการเรียนรู้สิ่งใหม่ ๆ อย่างต่อเนื่องเพื่อให้เท่าทันกับเทคโนโลยีที่เปลี่ยนแปลงอยู่เสมอ
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 3 }}>
                            ความสามารถของผมครอบคลุมทั้งการออกแบบ การพัฒนา และการปรับปรุงเว็บไซต์ให้ตรงกับความต้องการของผู้ใช้งาน
                        </Typography>
                        <Stack direction="row" spacing={2} flexWrap="wrap">
                            <Chip label="HTML" color="primary" variant="outlined" sx={{ fontSize: '16px', px: 2 }} />
                            <Chip label="CSS" color="primary" variant="outlined" sx={{ fontSize: '16px', px: 2 }} />
                            <Chip label="JavaScript" color="primary" variant="outlined" sx={{ fontSize: '16px', px: 2 }} />
                            <Chip label="React" color="primary" variant="outlined" sx={{ fontSize: '16px', px: 2 }} />
                            <Chip label="Material UI" color="primary" variant="outlined" sx={{ fontSize: '16px', px: 2 }} />
                        </Stack>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

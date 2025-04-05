import React from 'react'
import {
  AppBar, Toolbar, Typography, Box, Divider
} from '@mui/material'
import { Link } from 'react-router-dom'

export default function WorkUI() {
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
      <Box sx={{ px: 5, py: 8, backgroundColor: '#fdfdfd' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'center' },
            mb: 4
          }}
        >
          {/* Left Side: Heading */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              mb: { xs: 2, md: 0 },
              flex: 1,
              textAlign: { xs: 'center', md: 'left' }
            }}
          >
            My Experience
          </Typography>

          {/* Right Side: Role and Date */}
          <Box sx={{ flex: 2, width: '100%' }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap'
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 500 }}>
                Freelance Developer
              </Typography>
              <Typography variant="body2" sx={{ color: 'gray' }}>
                Nov 2023 - Present
              </Typography>
            </Box>

            {/* Description */}
            <Typography variant="body1" sx={{ mt: 1 }}>
              พัฒนาเว็บไซต์ฟรอนท์เอนต์ให้กับลูกค้าหลากหลายรูปแบบ ทั้งเว็บไซต์พอร์ตโฟลิโอ เว็บไซต์องค์กร และหน้าแลนดิ้งเพจ โดยเน้น UX/UI ที่ใช้งานง่าย รองรับทั้งเดสก์ท็อปและมือถือ พร้อมปรับแต่ง SEO เบื้องต้น
            </Typography>
          </Box>
        </Box>

        <Divider />
      </Box>
    </>
  )
}


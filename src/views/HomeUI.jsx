import React from 'react'
import { AppBar, Toolbar, Typography, Box, Avatar, Button, Stack, IconButton, TextField } from '@mui/material'
// import { FormControl, FormControlLabel, RadioGroup, Radio, } from '@mui/material'
import { Link } from 'react-router-dom'
import { Email } from '@mui/icons-material'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

import Apec from "../components/Apec.jsx";
import ImageAssets from '../components/ImageAssets.jsx';

import DownloadButton from './../components/DownloadButton.jsx';
import LinkedInButton from '../components/LinkedInButton.jsx';
import GitHubButton from '../components/GitHubButton.jsx';
import CustomChip from "../components/CustomChip.jsx";



export default function HomeUI() {
    return (
        <>
            <Box>  {/* Menu */}
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

            <Box sx={{
                mx: 'auto',
                display: 'flex',
                mt: '50px',
                alignItems: 'center',
                flexDirection: "column",
            }}>
                {/* Name & Pic*/}
                <Box sx={{
                    display: 'flex',
                    width: '800px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    backgroundColor: 'black',
                    height: 'justifyContent',
                    // border: '1px solid #FFFFFF'
                }}>
                    {/* Name */}
                    <Box sx={{ flex: 1, mt: '70px' }}>
                        <Typography sx={{ color: '#FFFFFF', fontSize: '25px', fontWeight: 'bold' }}>
                            HI, I AM
                            <br />
                            SINLAPACHAI K.
                        </Typography>
                        <Typography sx={{
                            color: 'gray',
                            fontSize: '12px',
                            fontWeight: 'light',
                            marginTop: '12px',

                        }}>
                            Hello I'm Apec, I'm a Web Developer.
                        </Typography>
                        <Button
                            sx={{
                                marginTop: '20px',
                                backgroundColor: '#6495ED',
                                color: 'black',
                                fontSize: '15px',
                                fontWeight: '400',
                                width: '170px',
                                height: '45px',
                                '&:hover': {
                                    backgroundColor: 'gray',
                                }
                            }}
                            variant="contained"
                            endIcon={<Email sx={{ fontSize: 130 }} />} style={{ borderRadius: '30px', }}
                        >
                            CONTACT ME
                        </Button>
                        <IconButton
                            sx={{
                                ml: '15px',
                                marginTop: '20px',
                                backgroundColor: '#2f2f2f',
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                '&:hover': {
                                    backgroundColor: 'darkgray',
                                }
                            }}
                        >
                            <LinkedInIcon sx={{ color: '#6495ED', fontSize: '30px' }} />
                        </IconButton>
                        <IconButton
                            sx={{
                                ml: '15px',
                                marginTop: '20px',
                                backgroundColor: '#2f2f2f',
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                '&:hover': {
                                    backgroundColor: 'darkgray',
                                }
                            }}
                        >
                            <GitHubIcon sx={{ color: '#6495ED', fontSize: '30px' }} />
                        </IconButton>
                    </Box>

                    {/* Picture */}
                    <Box sx={{ ml: '160px', flex: 1 }}>
                        <Apec />
                    </Box>
                </Box>

                {/* About Me */}
                <Box sx={{
                    display: 'flex',
                    backgroundColor: 'black',
                    height: 'justifyContent',
                    width: '800px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    mt: '50px',
                    // border: '1px solid #FFFFFF'
                }}>
                    <Typography sx={{
                        color: '#FFFFFF',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        mt: '20px'
                    }}>
                        ABOUT ME
                    </Typography>
                    <Typography sx={{
                        flex: 1,
                        ml: '100px',
                        mt: '20px',
                        fontSize: '15px',
                        fontWeight: 'normal',

                    }}>
                        ผมเป็นนักพัฒนาเว็บไซต์ฟรอนท์เอนต์ที่มีความหลงใหลในการออกแบบและสร้างประสบการณ์ผู้ใช้ที่เรียบง่าย เข้าถึงง่าย และใช้งานได้จริง ผมใส่ใจในรายละเอียดเพื่อให้เว็บไซต์มีประสิทธิภาพและดูดีบนทุกอุปกรณ์
                    </Typography>
                </Box>
                {/* About Me Subhead*/}
                <Box sx={{
                    width: '800px',
                    ml: 'auto',
                    mr: 'auto',
                    // border: '1px solid #FFFFFF'
                }}>
                    <Typography sx={{
                        flex: 1,
                        color: 'gray',
                        ml: '222px',
                        mt: '20px',
                        fontWeight: 'light',
                        fontSize: '12px'

                    }}>
                        ชอบการทำงานพัฒนาเว็บไซต์ รักการพัฒนาตัวเอง


                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        ml: '340px',
                        mt: '20px'
                    }}>

                        <DownloadButton />
                        <LinkedInButton />
                        <GitHubButton />
                    </Box>
                    <Box>
                        <ImageAssets sx={{}} />
                    </Box>

                </Box>
                {/* My Capabilities */}
                <Box sx={{
                    display: 'flex',
                    backgroundColor: 'black',
                    width: '800px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    mt: '50px',
                    // border: '1px solid #FFFFFF'
                }}>
                    <Typography sx={{
                        color: '#FFFFFF',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        mt: '20px'
                    }}>
                        MY CAPABILITIES
                    </Typography>
                    <Typography sx={{
                        flex: 1,
                        ml: '170px',
                        mt: '25px',
                        fontWeight: '200',
                        fontSize: '15px',
                        color: 'gray',
                    }}>
                        ผมมุ่งมั่นในการเรียนรู้สิ่งใหม่ ๆ อย่างต่อเนื่องเพื่อให้เท่าทันกับเทคโนโลยีที่เปลี่ยนแปลงอยู่เสมอความสามารถของผมครอบคลุมทั้งการออกแบบ การพัฒนาและการปรับปรุงเว็บไซต์ให้ตรงกับความต้องการของผู้ใช้งาน


                    </Typography>

                </Box>

                {/* Chip in My Capabilities */}
                <Box sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 2,
                    mt: '20px',
                    ml: '280px'
                }}>
                    <CustomChip label="HTML" variant="outlined" />
                    <CustomChip label="CSS" variant="outlined" />
                    <CustomChip label="JavaScript" variant="outlined" />
                    <CustomChip label="React" variant="outlined" />
                    <CustomChip label="Material UI" variant="outlined" />

                </Box>
                {/* My Experience */}
                <Box sx={{
                    display: 'flex',
                    backgroundColor: 'black',
                    width: '800px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    mt: '50px',
                    justifyContent: 'space-between',
                    // border: '1px solid #FFFFFF'
                }}>
                    <Typography sx={{
                        color: '#FFFFFF',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        mt: '20px'
                    }}>
                        MY EXPERIENCE
                    </Typography>
                    <Typography sx={{
                        flex: 1,
                        ml: '190px',
                        mt: '22px',
                        fontSize: '18px',
                        fontWeight: '400',

                    }}>
                        Freelance Developer
                    </Typography>

                    <Typography sx={{
                        fontSize: '12px',
                        mt: '28px',
                        fontWeight: 'light',
                        color: 'gray'
                    }}>
                        Nov 2023 - Present
                    </Typography>
                </Box>

                {/* My Experience Subhead*/}
                <Box sx={{
                    width: '800px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    // border: '1px solid #FFFFFF'
                }}>
                    <Typography sx={{
                        flex: 1,
                        color: 'gray',
                        mt: '20px',
                        ml: '340px',
                        fontWeight: '200',
                        fontSize: '15px'

                    }}>
                        พัฒนาเว็บไซต์ฟรอนท์เอนต์ให้กับลูกค้าหลากหลายรูปแบบ ทั้งเว็บไซต์พอร์ตโฟลิโอ เว็บไซต์องค์กร และหน้าแลนดิ้งเพจ โดยเน้น UX/UI ที่ใช้งานง่าย รองรับทั้งเดสก์ท็อปและมือถือ พร้อมปรับแต่ง SEO เบื้องต้น
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        ml: '340px',
                        mt: '20px'
                    }}>
                    </Box>

                </Box>

                {/* Let's Connect */}
                <Box
                    sx={{
                        backgroundColor: '#000000',
                        color: 'white',
                        padding: '40px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        mt: '60px',
                        width: '870px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}
                >
                    <Box sx={{ flex: 1, maxWidth: '400px' }}>
                        <Typography sx={{
                            color: '#FFFFFF',
                            fontSize: '20px',
                            fontWeight: 'bold',
                            mb: '10px'

                        }}>
                            LET'S CONNECT
                        </Typography>
                        <Typography sx={{
                            flex: 1,
                            color: 'gray',
                            fontWeight: '200',
                            fontSize: '15px'
                        }}>
                            Say Hi at {""}
                            <Link style={{
                                fontSize: '15px',
                                color: '#ffffff',
                                textDecorationColor: '#6495ED'


                            }}>
                                ApecSinlapachai@gmail.com                            </Link>

                        </Typography>
                        <Typography variant="body1" sx={{
                            flex: 1,
                            color: 'gray',
                            fontWeight: '200',
                            fontSize: '15px',
                            mb: '20px'
                        }}>
                            more info: {""}

                            <Link style={{
                                color: '#ffffff',
                                textDecorationColor: '#6495ED'
                            }}>
                                Resume
                            </Link>

                        </Typography>
                        <Box sx={{ display: 'flex', marginBottom: '40px' }}>
                            <IconButton sx={{ color: '#6495ED' }}>
                                <LinkedInIcon />
                            </IconButton>
                            <IconButton sx={{ color: '#6495ED' }}>
                                <GitHubIcon />
                            </IconButton>
                            <IconButton sx={{ color: '#6495ED' }}>
                                <XIcon />
                            </IconButton>
                            <IconButton sx={{ color: '#6495ED' }}>
                                <InstagramIcon />
                            </IconButton>
                        </Box>
                        <Typography variant="body2" sx={{
                            fontSize: '0.8rem',
                            mt: '230px',
                            fontWeight: '200'
                        }}>
                            © 2025 Sinlapachai Keawbunruang
                        </Typography>
                    </Box>
                    <Box sx={{ flex: 1, maxWidth: '450px' }}>
                        <TextField label="Name" variant="filled" fullWidth sx={{ marginBottom: '15px', input: { color: 'white' }, label: { color: 'white' }, fieldset: { borderColor: '#333333' }, backgroundColor: '#222222', width: '450px' }} />

                        <TextField label="Email" variant="filled" fullWidth sx={{ marginBottom: '15px', input: { color: 'white' }, label: { color: 'white' }, fieldset: { borderColor: '#333333' }, backgroundColor: '#222222' }} />

                        <TextField label="Class" variant="filled" fullWidth sx={{ marginBottom: '15px', input: { color: 'white' }, label: { color: 'white' }, fieldset: { borderColor: '#333333' }, backgroundColor: '#222222' }} />

                        <TextField label="Message" variant="filled" multiline rows={4} fullWidth sx={{ marginBottom: '20px', input: { color: 'white' }, label: { color: 'white' }, fieldset: { borderColor: '#333333' }, backgroundColor: '#222222' }} />

                        <Button variant="contained" sx={{
                            backgroundColor: '#6495ED',
                            color: 'black',
                            borderRadius: '30px',
                            mb: '50px',

                            '&:hover':
                                { backgroundColor: '#2f2f2f' }
                        }}>
                            SUBMIT
                        </Button>
                    </Box>
                </Box>

            </Box >

        </>
    )
}

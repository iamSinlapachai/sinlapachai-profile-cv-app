import React from 'react'
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

function GitHubButton() {
    return (
        <div>
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

        </div>
    )
}

export default GitHubButton
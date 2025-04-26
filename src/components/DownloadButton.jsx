import React from 'react'
import { Button } from '@mui/material';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

function DownloadButton() {
    return (
        <div>
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
                endIcon={<DownloadForOfflineIcon sx={{ fontSize: 130 }} />} style={{ borderRadius: '30px', }}
            >
                RESUME
            </Button>
        </div>

    )
}

export default DownloadButton
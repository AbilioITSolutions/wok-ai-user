import { Box } from '@mui/system'
import React from 'react'
import Bgimage from "../../Assets/Aboutusimages/Bgimage.png";
import Dcotorimg from "../../Assets/Aboutusimages/Doctorsimage.png"

const AboutHeropage = () => {
  return (
    <Box>
    <Box
        sx={{
                        position: 'relative',
                        height: '100vh',
                        width: '100%',
                        overflow: 'hidden',
                        backgroundImage: `url(${Bgimage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        pb: 10,
                        color: '#fff',
                    }}
                >
    </Box>
  
{/* Foreground image */}
        <Box
          component="img"
          src={Dcotorimg}
          alt="Foreground"
          sx={{
            position: "absolute",
            top: "93%",
            left: "50%",
            transform: "translate(-50%, -50%)",
             width: "1350px",
                height:"500px",

          }}
        />




</Box>
// </Box>
    
  )
}

export default AboutHeropage

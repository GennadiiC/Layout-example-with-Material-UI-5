import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import BoxWrapper from './BoxWrapper';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { styled } from "@mui/material/styles"
import theme from '../../styles';


const IconWrapper = styled(IconButton)(() => ({
  padding: 0,
  color: theme.light
}))


const box1 = ['Information', 'Lorem ipsum', 'Privacy & Policy', 'Terms & Conditions']
const box2 = ['My account', 'Initiatives & projects', 'Favorite Animals', 'My Account']


export default function Footer() {

  return (
    <Box
      sx={{
        fontSize: 300,
        p: 3,
        border: 20,
        borderBottom: {
          xs: 'none', 
          sm: 'none', 
          md: `20px solid ${theme.white}`, 
          lg: `20px solid ${theme.white}`, 
          xl: `20px solid ${theme.white}` 
        },
        borderColor: theme.white,
        bgcolor: theme.shaft,
        color: theme.light
      }}
    >
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          lg={6}
          md={12}
          sm={12}
          xs={12}
          sx={{ mb: 3, fontSize: 14 }}
        >
          <Typography 
            sx={{ textTransform: 'uppercase', fontSize: 14 }}
            gutterBottom
          >
            About us
          </Typography>

          <Typography
            sx={{
              fontSize: 14,
            }}
            gutterBottom
          >
            Lorem ipsum dolor sit amet, cosectetur adipiscin elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
            veniam, quis nostrud exercitacion ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </Typography>

          <Stack direction='row' spacing={1} sx={{ mt: 3 }}>
            <IconWrapper>
              <FacebookIcon />
            </IconWrapper>
            <IconWrapper>
              <TwitterIcon />
            </IconWrapper>
            <IconWrapper>
              <InstagramIcon />
            </IconWrapper>
          </Stack>
        </Grid>
        
        <BoxWrapper box={box1} />
        
        
        <BoxWrapper box={box2} />
       
      </Grid>
    </Box>
  )
}

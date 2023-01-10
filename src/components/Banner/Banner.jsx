import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import { styled } from "@mui/material/styles"
import theme from '../../styles';

export const Text = styled(Typography)(() => ({
  color: theme.dark
}))


export default function Banner () {

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'column', md: 'row' },
        px: 4,
        mt: 2,
        justifyContent: 'space-between',
        alignItems: 'center',
        bgcolor: theme.bodyBG
      }}
    > 
      <Box
        sx={{
          p: 1,
          width: {md: 0.54, sm: 1, xs: 1},
        }}
        component='img'
        src='./images/banner-cat1.png'
        alt='banner-cat1' 
      >
      </Box>
      <Box
        sx={{
          p: 5,
          width: {md: 0.43, sm: 1, xs: 1},
          height: 500,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <Text
          variant='h5'
          gutterBottom
          sx={{
            fontSize: {md: 27, sm: 32, xs: 32}
          }}
        >
          Our motto
        </Text>
        <Text
          variant='h1'
          sx={{
            fontSize: {lg: 80, md: 70, sm: 65, xs: 50},
            fontWeight: 'regular'
          }}
          gutterBottom
        >
          Help animals
        </Text>
        <Text
          variant='body2'
          gutterBottom
          alignjustify='true'	
          sx={{
            fontSize: {lg: 19, md: 20, sm: 20, xs: 20},
            fontFamily: 'Work Sans',
            fontWeight: 400,
            lineHeight: 1.2,
          }}
        >
          Lorem ipsum dolor sit amet, cosectetur
          adipiscin elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </Text>
        <Button
          variant="contained"
          sx={{
            width: 1,
            height: 70,
            mt: 3,
            fontSize: 18,
            fontWeight: 600,
            '&:hover': {
              color: theme.bodyBG
            }
          }}
          color='secondary'
        >
          Donate
        </Button>
      </Box>
    </Box> 
  )
}

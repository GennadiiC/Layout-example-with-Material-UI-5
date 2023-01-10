import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid';
import { styled } from "@mui/material/styles"


const RegularButton = styled(Button)(() => ({
  textTransform: 'none',
  padding: 0,
  marginTop: 3
}))


export default function BoxWrapper({ box }) {
  return (
    <Grid
      item
      lg={3}
      md={6}
      sm={6}
      xs={12}
      sx={{ mb: 3 }}
    >
      <Typography
        sx={{ 
          textTransform: 'uppercase',
          fontSize: 14 
        }}
      >
        {box[0]}
      </Typography>

      <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <RegularButton variant='text'>
          {box[1]}
        </RegularButton>
        <RegularButton variant='text'>
          {box[2]}
        </RegularButton>
        <RegularButton variant='text'>
          {box[3]}
        </RegularButton>
      </Box>
    </Grid>
  )
}

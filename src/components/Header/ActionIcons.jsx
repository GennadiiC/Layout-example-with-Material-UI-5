import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

export default function ActionIcons(props) {

  const {
    dividerSX, 
    stackSpacing, 
    stackSX, 
    dividerColor, 
    iconColor 
  } = props

  return (
    <Stack
      direction="row"
      divider={
        <Divider 
          color={dividerColor}
          flexItem
          orientation="vertical" 
          sx={dividerSX} 
        />
      }
      spacing={stackSpacing}
      sx={stackSX}
    >
      <IconButton>
        <FavoriteIcon 
          color={iconColor}
        />
      </IconButton>
      
      <IconButton>
        <PersonIcon 
          color={iconColor}
        />
      </IconButton>
      
      <IconButton>
        <NotificationsIcon 
          color={iconColor}
        /> 
      </IconButton>
    </Stack>
  )
}

import { useState } from 'react';
import { styled } from "@mui/material/styles"
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import theme from '../../styles'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const NavButton = styled(Button)(() => ({
  color: theme.dark,
  textTransform: 'uppercase'
}))



export default function LinkStack () {

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  };
  const handleClose = (e) => {
    setAnchorEl(null)
  };

  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '0.8rem',
        columnGap: {lg: 2, md: 1}
      }}
    >   
      <NavButton>
        Home
      </NavButton>
      <NavButton>
        Volunteer
      </NavButton>
      <NavButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        endIcon={<ExpandMoreIcon />}
        onClick={handleClick}
      >
        Stories
      </NavButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Blog</MenuItem>
        <MenuItem onClick={handleClose}>Podcast</MenuItem>
      </Menu>
      <NavButton>
        Login
      </NavButton>    
    </Box>
  )
}
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Stories from './Stories';

export default function LeftDrawer() {
  
  const [open, setOpen] = React.useState(false)
  
  const list = () => (
    <Box
      sx={{ 
        width: 250,
        p: 3
      }}
      role="presentation"
    >
      <List>
        {['Home', 'Volonteer', 'Stories', 'Login', 'Contact Us'].map((text, index) => (
          <div key={index}>
            {
              index === 2 ? 
              <Stories 
                setOpen={setOpen}
              /> :
              <ListItem disablePadding onClick={() => setOpen(false)}>
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            }
            <Divider />
          </div>
        ))}
      </List>
    </Box>
  )

  return (
    <Box>
      <MenuIcon onClick={() => setOpen(true)}/>
      <Drawer
        anchor='left'
        open={open}
        onClose={() => setOpen(false)}
      >
        {list()}
      </Drawer>
    </Box>
  );
}
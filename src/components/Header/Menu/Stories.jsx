import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Divider from '@mui/material/Divider';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


export default function Stories ({ setOpen }) {
  return (
    <Accordion 
      elevation={0}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon color='light'/>}
        sx={{
          p: 2,
        }}
      >
        <Typography>Stories</Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          p: 2
        }}
      >
        <Divider />
        <ListItem disablePadding onClick={() => setOpen(false)}>
          <ListItemButton>
            <ListItemText primary='Blog' />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding onClick={() => setOpen(false)}>
          <ListItemButton>
            <ListItemText primary='Podcast' />
          </ListItemButton>
        </ListItem>
      </AccordionDetails>
    </Accordion>
  )
}
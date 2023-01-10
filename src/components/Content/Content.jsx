import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import useMediaQuery from '@mui/material/useMediaQuery';
import { itemData } from '../data';
import theme from '../../styles';

export default function Content() {

  const mdUp = useMediaQuery(theme.breakpoints.up('md'))
  const smUp = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <Box
      sx={{
        width: 0.9,
        my: 2,
        mx: 'auto'
      }}
    >
      <Typography
        variant='h4'
        align="center"
        sx={{
          color: theme.dark
        }}
      >
        Waiting for their owners
      </Typography>
      <ImageList
        variant="masonry"
        cols={mdUp ? 3 : smUp ? 2 : 1} 
        gap={15}
      >
        {
          itemData.map(item => 
            <ImageListItem 
              key={item.title}
            >
              <img 
                src={`./images/${item.img}`}
                alt={item.title}
              />
              <ImageListItemBar 
                title={item.title}
                actionIcon={
                  <IconButton
                    sx={{
                      color: 'rgba(255, 255, 255, 0.54)'
                    }}
                    aria-label={`info about ${item.title}`}
                  >
                    <FavoriteIcon 
                      sx={{
                        '&:hover': {
                          color: theme.palette.secondary.main
                        }
                      }}
                    />
                  </IconButton>
                }
                sx={{
                  opacity: '40%',
                  '&:hover' : {
                    opacity: '80%'
                  }
                }}
              />
            </ImageListItem>
          )
        }
      </ImageList>
    </Box>
  )
}

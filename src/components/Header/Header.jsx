import AppBar from '@mui/material/AppBar'
import ActionIcons from './ActionIcons';
import LinkStack from './LinkStack'
import CatsFriends from './CatsFriends';
import LeftDrawer from './Menu/LeftDrawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from '../../styles'


function Header () {

const mdUp = useMediaQuery(theme.breakpoints.up('md'))
const mdDown = useMediaQuery(theme.breakpoints.down('md'))

const dividerSX = {
  height: 40
}

const stackSpacing = {
  lg: 4,
  md: 1
}

const stackSX = {
  mr: 5,
  justifyContent: 'space-between',
  alignItems: 'center'
}


  return (
    <AppBar
      position='static'
      color='neutral'
      sx={{
        flexDirection: 'row', 
        justifyContent: 'space-between' ,
        alignItems: 'center',
        height: '7rem',
        px: '1rem'
      }}
    >
      {mdDown && <LeftDrawer />}
      <CatsFriends
        color='secondary'
        sx={{
          fontFamily: 'Allison',
          fontStyle: 'cursive',
          fontSize: '4rem'
        }}
      >
          Cats & Friends
      </CatsFriends> 
      {mdUp && <LinkStack />}
      {mdUp && 
        <ActionIcons 
          dividerSX={dividerSX} 
          stackSpacing={stackSpacing} 
          stackSX={stackSX}
          iconColor='primary'
        />
      } 
    </AppBar> 
  )
}

export default Header
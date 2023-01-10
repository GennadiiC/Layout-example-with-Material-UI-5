import Header from "./components/Header";
import Banner from "./components/Banner";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Paper from '@mui/material/Paper'
import ActionIcons from "./components/Header/ActionIcons";
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider } from '@mui/material'
import theme from './styles'


function App() {

  const dividerSX = {
    height: 45
  }

  const stackSpacing = {
    md: 5
  }

  const stackSX = {
    bgcolor: theme.shaft,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }

  const mdDown = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Banner />
      <Content />
      <Footer />
      {mdDown &&
        <Paper elevation={3} sx={{ borderTop: `1px solid ${theme.light}` }}>
          <ActionIcons 
            dividerSX={dividerSX}
            stackSpacing={stackSpacing}
            stackSX={stackSX}
            iconColor='secondary'
            dividerColor={theme.palette.secondary.main}
          />
        </Paper>
      }
    </ThemeProvider>
  )
}

export default App;

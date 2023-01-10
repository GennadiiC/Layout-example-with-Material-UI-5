import { styled } from "@mui/material/styles"
import theme from '../../styles'
import Typography from '@mui/material/Typography'


const CatsFriends = styled(Typography)(() => ({
  [theme.breakpoints.down('md')]: {
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}))

export default CatsFriends
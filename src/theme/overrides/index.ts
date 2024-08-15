
import { Theme } from '@mui/material/styles'
import MUITable from './table'
import MUIPaper from './paper'
import MUITypography from './typography'
import MUICard from './card'


const Overrides = () => {
 

  return Object.assign(
    MUIPaper(),
    MUICard(),
    MUITypography(),
    MUITable(),
  )
}

export default Overrides

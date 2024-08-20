
import { Theme } from '@mui/material/styles'
import MUITable from './table'
import MUIPaper from './paper'
import MUITypography from './typography'
import MUICard from './card'
import MUIDialog from './dialog'


const Overrides = () => {
 

  return Object.assign(
    MUIPaper(),
    MUIDialog(),
    MUICard(),
    MUITypography(),
    MUITable(),
  )
}

export default Overrides

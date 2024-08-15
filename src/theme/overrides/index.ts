
import { Theme } from '@mui/material/styles'
import MUITable from './table'
import MUIPaper from './paper'
import MUICard from './card'


const Overrides = () => {
 

  return Object.assign(
    MUITable(),
    MUIPaper(),
    MUICard(),
  )
}

export default Overrides

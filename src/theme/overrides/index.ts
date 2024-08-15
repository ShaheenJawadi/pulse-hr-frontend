
import { Theme } from '@mui/material/styles'
import MUITable from './table'
import MUIPaper from './paper'


const Overrides = () => {
 

  return Object.assign(
    MUITable(),
    MUIPaper(),
  )
}

export default Overrides

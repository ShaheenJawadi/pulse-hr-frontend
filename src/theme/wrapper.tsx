
import { Box } from '@mui/material'
import { ChildrenType } from './types'
import Navigation from '@/components/navigation'
 

 

const Wrapper = ({ children }: ChildrenType) => {  
  
  return (
    <Box sx={{display:'flex'}} >
      <Navigation/>
      {children}
    </Box>
  )
}

export default Wrapper

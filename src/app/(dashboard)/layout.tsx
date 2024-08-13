'use client'
import { ChildrenType } from '@/theme/types'
import Wrapper from '@/theme/wrapper'
import Button from '@mui/material/Button'
import { ReactNode } from 'react'

 

const Layout = async ({ children }: ChildrenType) => {
 

  return (
    <Wrapper>
        {children}
    </Wrapper>
  )
}

export default Layout

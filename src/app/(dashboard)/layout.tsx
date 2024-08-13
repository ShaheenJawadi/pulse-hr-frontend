'use client'
import { ChildrenType } from '@/types/themeTypes'
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

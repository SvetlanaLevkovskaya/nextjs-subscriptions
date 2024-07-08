'use client'

import { type FC, type PropsWithChildren } from 'react'

import { Footer } from '@/components/NavLayout/Footer/Footer'
import { Header } from '@/components/NavLayout/Header/Header'

export const NavLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-6">{children}</main>
      <Footer />
    </>
  )
}

'use client'

import { type FC, type PropsWithChildren } from 'react'

import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'

export const NavLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-6">{children}</main>
      <Footer />
    </>
  )
}

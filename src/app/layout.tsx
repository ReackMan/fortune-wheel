import { ReactNode } from 'react'

import { Metadata } from 'next'
import { Alumni_Sans, Kelly_Slab } from 'next/font/google'

import { StoreProvider } from '@/app/StoreProvider'
import { Footer } from '@/widgets/footer/ui/Footer'
import { Header } from '@/widgets/header/ui/Header'

import './globals.css'

const alumniSans = Alumni_Sans({
  subsets: ['latin'],
  variable: '--font-alumni-sans',
})

const kellySlab = Kelly_Slab({
  subsets: ['latin'],
  variable: '--font-kelly-slab',
  weight: ['400'],
})

export const metadata: Metadata = {
  description: 'Fortune Wheel',
  title: 'HIRO VPN',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html className={`${alumniSans.variable} ${kellySlab.variable} h-full antialiased`} lang={'en'}>
      <body className={' mx-4 md:mx-6 lg:mx-12 xl:mx-13 min-h-full flex flex-col items-center'}>
        <StoreProvider>
          <Header />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  )
}

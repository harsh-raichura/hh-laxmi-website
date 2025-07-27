import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HH Laxmi - Premium Farali & Millet Products',
  description: 'Authentic farali (upvas) items and premium millets including Rajgira Atta, Moraiyo, Kodari, Sabudana, and Methi Flour for healthy living.',
  keywords: 'farali, upvas, rajgira atta, moraiyo, kodari, sabudana, methi flour, millets, fasting food, navratri, ekadashi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 
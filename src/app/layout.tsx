import './globals.css'
import { Rubik } from 'next/font/google'
import type { Metadata } from 'next'
import Navbar from './components/Navbar'

export const revalidate = 3600

const rubik = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Image Gallery',
  description: 'Image Gallery'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar />
        <main className="max-w-6xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  )
}

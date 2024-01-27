import type { Metadata } from 'next'
import { Inter, Manrope, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { Sidebar } from './dashboard/Sidebar'

// const inter = Inter({ subsets: ['latin'] })
// const manrope = Manrope({ subsets: ['latin'] })
// const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'StormSale',
  description: 'Right Stats, Right Decisions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='overflow-hidden'>
      <body className={`bg-smoke text-black`}>
        {children}
      </body>
    </html>
  )
}

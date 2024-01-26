import type { Metadata } from 'next'
import { Inter, Manrope, Plus_Jakarta_Sans } from 'next/font/google'
import './../globals.css';
import { Sidebar } from './Sidebar'
import { ReactNode } from 'react';


const inter = Inter({ subsets: ['latin'] })
// const manrope = Manrope({ subsets: ['latin'] })
// const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'StormSale Analytics',
  description: 'Right Stats, Right Decisions.',
}


export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <main className='flex w-full bg-neutral-100 text-black bg-[url(/dashboard.sv)] [background-size:100%] h-screen overflow-hidden'>
      <Sidebar />
      <div className='w-full h-full overflow-y-scroll'>
        {children}
      </div>
    </main>
  )
}

import type { Metadata } from 'next'
import { Inter, Manrope, Plus_Jakarta_Sans } from 'next/font/google'
import './../globals.css';
import { Sidebar } from './Sidebar'
import { ReactNode } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

// const inter = Inter({ subsets: ['latin'] })
const manrope = Manrope({ subsets: ['latin'],
variable: "--font-manrope", })
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'],
variable: "--font-jak", });

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
    <main className={`${manrope.variable} ${jakarta.variable} flex w-full bg-background text-black bg-[url(/dashboard.sv)] [background-size:100%] h-screen overflow-hidden`}>
      <Sidebar />
      <div className='w-full h-full overflow-y-scroll'>
        {children}
      </div>
      <ToastContainer 
      position='top-left'
      toastClassName={'toast-message'}/>
    </main>
  )
}

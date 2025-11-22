// /app/layout.tsx
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'John Bryx Jovellanos | Portfolio',
  description: 'Professional portfolio - John Bryx Jovellanos',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="site">
          <Nav />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
 

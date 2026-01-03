import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fleur Stays BNB | Luxury Vacation Rentals',
  description: 'Experience luxury and comfort with Fleur Stays BNB. Premium vacation rentals with stunning views, premium amenities, and unforgettable experiences.',
  keywords: 'luxury vacation rentals, airbnb, premium stays, teal luxury, vacation homes',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fleurstaysbnb.com',
    title: 'Fleur Stays BNB | Luxury Vacation Rentals',
    description: 'Premium vacation rentals with luxury amenities',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#006f75" />
      </head>
      <body 
        className={`${inter.className} bg-ivory`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
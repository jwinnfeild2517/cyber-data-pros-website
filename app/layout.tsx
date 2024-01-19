import type { Metadata } from 'next'
import './globals.css'
import Head from 'next/head'
import { Poppins, DM_Sans } from 'next/font/google'

const dmSans = DM_Sans({ subsets: ['latin'], weight: '500' })

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '500', '700'] })

export const metadata: Metadata = {
  title: 'CyberData Pros - Data Privacy & Security made simple',
  description:
    'With CyberData Pros, we keep up for you, providing the up-to-date knowledge you need to manage a robust information security program.',
  keywords:
    'cybersecurity, information security, network security, data protection, cyber threats, penetration testing, encryption, security awareness',
  // openGraph: {
  //   title: 'Data Privacy & Security made simple',
  //   description:
  //     'With CyberData Pros, we keep up for you, providing the up-to-date knowledge you need to manage a robust information security program.',
  //   url: 'https://cyberdatapros.com/',
  //   type: 'website',
  //   siteName: 'CyberData Pros',
  //   images: [
  //     {
  //       url: '/public/cdp-logo.png',
  //     },
  //   ],
  // },
  authors: {
    name: 'CyberData Pros',
    url: 'https://cyberdatapros.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.className} ${dmSans.className}`}>
      <Head>
        <link
          rel="preload"
          href="/components/jumbo/jumbo.module.css"
          as="style"
        />
      </Head>
      <body>{children}</body>
    </html>
  )
}

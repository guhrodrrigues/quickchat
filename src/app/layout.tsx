import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'QuickChat',
  description:
    'The chatbot developed with VercelSDK is the perfect solution for improving customer service and simplifying processes, 24 hours a day, 7 days a week.',
  creator: 'Gustavo Rodrigues',
  authors: [
    {
      name: 'Gustavo Rodrigues',
      url: 'https://guhrodrigues.com',
    },
  ],
  icons: {
    apple: '/favicon.svg',
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

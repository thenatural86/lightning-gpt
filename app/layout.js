import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lightning-GPT',
  description:
    'Lightning-GPT: Your AI language companion. Powered by OpenAI, it enhances your conversations, content creation, and more!',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider fallbackRedirectUrl='/'>
      <html lang='en'>
        <body className={inter.className}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}

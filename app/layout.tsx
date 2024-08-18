import { Onest } from 'next/font/google'
import { ProviderTheme, ToastProvider } from '@/provider'
import { Footer } from '@/components'

import './globals.css'

const onest = Onest({ subsets: ['latin'] })
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`bg-gradient-to-t from-teal-100 to-slate-300 dark:bg-gradient-to-t dark:from-teal-900 dark:to-slate-800 text-black dark:text-white ${onest.className}`}>
        <ProviderTheme>
          <ToastProvider>{children}</ToastProvider>
        </ProviderTheme>
        <Footer />
      </body>
    </html>
  )
}

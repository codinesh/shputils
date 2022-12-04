import Header from '../../src/components/Header'
import '../../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='h-full bg-gray-100'>
      <body className='h-full'>
        <Header />

        <main className='max-w-7xl py-6 px-4 sm:px-6 lg:px-8'>{children}</main>
      </body>
    </html>
  )
}

import '../../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='h-full bg-gray-100'>
      <body className='h-full flex justify-center items-center'>
        {children}
      </body>
    </html>
  )
}

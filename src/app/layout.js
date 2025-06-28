
import './globals.css'
import Sidebar from './components/Sidebar'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        <main className="flex-1 p-4 md:ml-64 bg-gray-100 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}

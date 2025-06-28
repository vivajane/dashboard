'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Sidebar() {
  const pathname = usePathname()
  const [clientPath, setClientPath] = useState(null)

  useEffect(() => {
    // Ensures value is only set client-side
    setClientPath(pathname)
  }, [pathname])

  const navItems = [
    { label: 'Dashboard', href: '/' },
    { label: 'Orders', href: '/orders' },
    { label: 'Order Detail', href: '/orderdetail' },
    { label: 'Customers', href: '/customers' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Food', href: '/food' },
    { label: 'Food Detail', href: '/fooddetail' },
    { label: 'Calendar', href: '/calender' },
    { label: 'Chat', href: '/chat' },
    { label: 'Wallet', href: '/wallet' },
  ]

  if (!clientPath) return null // Prevent SSR mismatch

  return (
    <aside className="w-64 fixed text-black h-full p-6 hidden md:block bg-white shadow">
      <div className="mb-10">
        <h2 className="text-2xl font-bold">Sedap</h2>
        <h3 className="text-sm text-gray-500">Modern Admin Dashboard</h3>
      </div>
      <ul className="space-y-4">
        {navItems.map((item) => {
          const isActive = clientPath === item.href
          return (
            <li key={item.href} className="relative">
              {isActive && (
                <div className="absolute left-[-6px] top-0 h-full w-1 bg-[#6B911B] rounded-r" />
              )}
              <Link
                href={item.href}
                className={`block px-2 py-1 rounded hover:text-blue-500 ${
                  isActive ? 'text-[#6B911B] font-semibold' : ''
                }`}
              >
                {item.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

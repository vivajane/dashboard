'use client'

import Sidebar from "../components/SideBar"

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-4 md:ml-64 bg-gray-100 min-h-screen">
        {children}
      </main>
    </div>
  )
}

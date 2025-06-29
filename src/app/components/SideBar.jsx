'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { GoHome } from "react-icons/go";
import { HiViewList } from "react-icons/hi";
import { HiUserGroup } from "react-icons/hi";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { HiCreditCard } from "react-icons/hi2";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { MdEmojiFoodBeverage } from "react-icons/md";
import { FaFilePen } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Dashboard", href: "/dashboard", icon: GoHome },
    { label: "Orders", href: "/dashboard/orders", icon: HiViewList },
    { label: "Order Detail", href: "/dashboard/orderdetail", icon: MdOutlineBookmarkBorder },
    { label: "Customers", href: "/dashboard/customers", icon: HiUserGroup },
    { label: "Reviews", href: "/dashboard/reviews", icon: FaPen },
    { label: "Food", href: "/dashboard/food", icon: MdEmojiFoodBeverage },
    { label: "Food Detail", href: "/dashboard/fooddetail", icon: FaFilePen },
    { label: "Calendar", href: "/dashboard/calender", icon: HiOutlineCalendarDays },
    { label: "Chat", href: "/dashboard/chat", icon: HiChatBubbleLeftRight },
    { label: "Wallet", href: "/dashboard/wallet", icon: HiCreditCard },
  ];

  return (
    <>
      {/* Hamburger on mobile */}
      <div className="md:hidden p-4">
        <button onClick={() => setIsOpen(true)}>
          <RxHamburgerMenu size={24} />
        </button>
      </div>

      {/* Mobile sidebar */}
      {isOpen && (
        <>
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
          />
          <aside className="w-64 fixed z-50 top-0 left-0 h-full bg-white shadow p-6 block md:hidden">
            <h2 className="text-xl font-bold mb-4">Sedap</h2>
            <ul className="space-y-3">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block py-2 px-3 rounded ${
                        isActive ? "bg-[#00B07426] text-[#00B074]" : ""
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="inline mr-2" />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </aside>
        </>
      )}

      {/* Desktop sidebar */}
      <aside className="w-64 fixed h-screen bg-white shadow p-6 hidden md:block">
        <h2 className="text-xl font-bold mb-4">Sedap</h2>
        <ul className="space-y-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block py-2 px-3 rounded ${
                    isActive ? "bg-[#00B07426] text-[#00B074]" : ""
                  }`}
                >
                  <item.icon className="inline mr-2" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
}

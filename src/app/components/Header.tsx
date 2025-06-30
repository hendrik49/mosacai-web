'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Home, User, Settings, FolderOpen, Brain, Mail } from 'lucide-react'
import { FloatingDock } from './ui/floating-dock'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  // FloatingDock导航项目
  const dockItems = [
    {
      title: "Home",
      icon: <Home className="h-full w-full text-slate-300 hover:text-purple-300 transition-colors duration-300" />,
      href: "/",
    },
    {
      title: "About", 
      icon: <User className="h-full w-full text-slate-300 hover:text-purple-300 transition-colors duration-300" />,
      href: "/about",
    },
    {
      title: "Services",
      icon: <Settings className="h-full w-full text-slate-300 hover:text-purple-300 transition-colors duration-300" />,
      href: "/services",
    },
    {
      title: "Projects",
      icon: <FolderOpen className="h-full w-full text-slate-300 hover:text-purple-300 transition-colors duration-300" />,
      href: "/projects",
    },
    {
      title: "AI",
      icon: <Brain className="h-full w-full text-slate-300 hover:text-purple-300 transition-colors duration-300" />,
      href: "/ai",
    },
    {
      title: "Contact",
      icon: <Mail className="h-full w-full text-slate-300 hover:text-purple-300 transition-colors duration-300" />,
      href: "/contact",
    },
  ]

  // 传统菜单项（移动端fallback）
  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'AI', href: '/ai' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      {/* 顶部Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16 px-4 lg:px-8">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 z-50">
              <img 
                src="/images/logo.png" 
                alt="Mosaic AI Logo" 
                className="h-8 w-auto"
              />
            </Link>

            {/* 桌面端中央FloatingDock导航 */}
            <div className="hidden md:flex justify-center flex-1 mx-8">
              <FloatingDock
                items={dockItems}
                mobileClassName="hidden"
              />
            </div>

            {/* 桌面端右侧CTA */}
            <div className="hidden md:block z-50">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                Work with us
              </Link>
            </div>

            {/* 移动端汉堡菜单 */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2 z-50"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* 移动端导航菜单 */}
          {isOpen && (
            <div className="md:hidden bg-slate-800/95 backdrop-blur-xl">
              <nav className="px-4 py-4 space-y-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-gray-300 hover:text-purple-400 transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-white/5"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <Link 
                    href="/contact" 
                    className="block bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Work with us
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  )
}

export default Header
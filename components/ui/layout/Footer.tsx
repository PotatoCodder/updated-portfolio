'use client'
import { Github, Facebook, Mail } from 'lucide-react'
import { FaTiktok } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer id='footer' className="border-t mt-24 pt-10 pb-6 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm text-gray-500 mb-4 sm:mb-0">
          © {new Date().getFullYear()} Konoe. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a
            href="https://github.com/PotatoCodder"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-indigo-600 transition"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.facebook.com/hikigaya09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-indigo-600 transition"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://www.tiktok.com/@xides_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-indigo-600 transition"
          >
            <FaTiktok size={20} />
          </a>
          <a
            href="mailto:xidesadrian@gmail.com"
            className="text-gray-500 hover:text-indigo-600 transition"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}

"use client"

import { Bookmark } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative z-10 py-10 border-t border-[rgba(255,255,255,0.04)]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center space-x-2 mb-3">
          <div className="w-8 h-8 bg-gradient-to-r from-[rgba(var(--accent-1),0.95)] to-[rgba(var(--accent-2),0.95)] rounded-lg flex items-center justify-center">
            <Bookmark className="w-4 h-4 text-white" />
          </div>
          <span className="text-base font-medium text-white">LinkSaver</span>
        </div>
        <p className="text-[color:var(--muted)] text-sm">Built with care — modern UI preview</p>
      </div>
    </footer>
  )
}

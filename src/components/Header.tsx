"use client"

import { motion } from 'framer-motion'
import { Bookmark, ArrowRight } from 'lucide-react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

export default function Header() {
  const router = useRouter()

  return (
    <header className="relative z-50 py-5">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-r from-[rgba(var(--accent-1),0.95)] to-[rgba(var(--accent-2),0.95)] rounded-xl flex items-center justify-center shadow-xl">
              <Bookmark className="w-5 h-5 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse" />
          </div>
          <div>
            <div className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-cyan-200">LinkSaver</div>
            <div className="text-xs text-[color:var(--muted)]">AI-Powered Bookmarks</div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} className="flex items-center space-x-3">
          <Button variant="outline" onClick={() => router.push('/auth')}>
            Sign In
          </Button>

          <Button onClick={() => router.push('/auth')} className="px-4 py-2" size="md">
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </header>
  )
}

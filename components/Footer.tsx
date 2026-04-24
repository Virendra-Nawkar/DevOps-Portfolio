'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa'
import profile from '@/data/profile.json'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-[rgba(0,255,157,0.08)] py-8 px-4 sm:px-6 lg:px-8">
      {/* Glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-[#00ff9d] to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          {/* Logo */}
          <a href="#hero" className="font-mono text-sm flex items-center gap-1">
            <span className="text-[#00ff9d]">&gt; </span>
            <span className="text-[#e2e8f0]">virpages_</span>
            <span className="text-[#00ff9d] cursor-blink">█</span>
          </a>

          {/* Copyright */}
          <p className="font-mono text-xs text-[#64748b] flex items-center gap-1.5 flex-wrap justify-center">
            <span>© {year}</span>
            <span className="text-[#e2e8f0]">Virendra Nawkar</span>
            <span>·</span>
            <span>Built with</span>
            <FaHeart className="text-[#00ff9d] inline" size={10} />
            {/* <span>using Next.js</span> */}
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64748b] hover:text-[#00ff9d] transition-colors duration-200"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64748b] hover:text-[#00cfff] transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'
import profile from '@/data/profile.json'

const typingRoles = [
  'Cloud Engineer',
  'DevOps Engineer',
  'K8s Enthusiast',
  'CI/CD Builder',
  'Infrastructure Automator',
]

function useTypingEffect(words: string[], speed = 80, deleteSpeed = 40, pause = 2000) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), pause)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setWordIndex((prev) => (prev + 1) % words.length)
    } else {
      timeout = setTimeout(() => {
        setText(isDeleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1))
      }, isDeleting ? deleteSpeed : speed)
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words, speed, deleteSpeed, pause])

  return text
}

export default function Hero() {
  const typedText = useTypingEffect(typingRoles)

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center grid-bg scanline overflow-hidden"
    >
      {/* Radial gradient focal glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,255,157,0.04) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Decorative corner brackets */}
      <div className="absolute top-24 left-8 text-[rgba(0,255,157,0.15)] font-mono text-xs hidden lg:block" aria-hidden="true">
        {['[', '01', '10', '00', '11', ']'].map((c, i) => (
          <div key={i}>{c}</div>
        ))}
      </div>
      <div className="absolute bottom-16 right-8 text-[rgba(0,255,157,0.15)] font-mono text-xs hidden lg:block" aria-hidden="true">
        {['[', '11', '00', '10', '01', ']'].map((c, i) => (
          <div key={i}>{c}</div>
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status line */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-6 flex items-center justify-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-[#00ff9d] animate-pulse" />
          <span className="font-mono text-xs text-[#64748b] tracking-widest uppercase">
            Available for opportunities
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
        >
          <p className="font-mono text-[#64748b] text-sm mb-2 tracking-widest">
            <span className="text-[#00ff9d]">$</span> whoami
          </p>
          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-2 leading-tight"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            <span className="text-[#e2e8f0]">Hi, I'm </span>
            <span className="gradient-text">{profile.name}</span>
          </h1>
        </motion.div>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="h-10 flex items-center justify-center mb-4"
        >
          <span className="font-mono text-xl sm:text-2xl text-[#00cfff]">
            {typedText}
            <span className="text-[#00ff9d] cursor-blink">|</span>
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="font-mono text-sm sm:text-base text-[#64748b] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          <span className="text-[#00ff9d]">// </span>
          {profile.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          <button
            onClick={() => scrollTo('#projects')}
            className="btn-primary text-sm font-mono px-6 py-3 flex items-center gap-2"
            aria-label="View Projects"
          >
            <span className="text-[#00ff9d]">&gt;</span>
            View Projects
          </button>
          <a
            href={profile.resumeUrl}
            download
            className="btn-secondary text-sm font-mono px-6 py-3 flex items-center gap-2"
            aria-label="Download Resume"
          >
            <FaDownload size={14} />
            Download Resume
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex items-center justify-center gap-5"
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64748b] hover:text-[#00ff9d] transition-colors duration-200 hover:drop-shadow-[0_0_8px_rgba(0,255,157,0.5)]"
            aria-label="GitHub Profile"
          >
            <FaGithub size={22} />
          </a>
          <span className="text-[rgba(0,255,157,0.2)] font-mono">|</span>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64748b] hover:text-[#00cfff] transition-colors duration-200 hover:drop-shadow-[0_0_8px_rgba(0,207,255,0.5)]"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={22} />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          {/* <span className="font-mono text-[10px] text-[#64748b] tracking-widest">SCROLL</span> */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-[#00ff9d] to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}

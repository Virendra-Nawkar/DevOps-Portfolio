'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaCheckCircle, FaTimesCircle } from 'react-icons/fa'
import profile from '@/data/profile.json'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<FormState>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      if (res.ok) {
        setStatus('success')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }

    setTimeout(() => setStatus('idle'), 5000)
  }

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,255,157,0.15)] to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-label mb-2">
            <span className="text-[#00ff9d]">06.</span> contact
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#e2e8f0]"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            <span className="text-[#00ff9d]">// </span>contact
          </h2>
          <p className="font-mono text-sm text-[#64748b] mt-3">
            Have a project in mind? Let's build something great together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Contact info — left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <p className="font-mono text-xs text-[#64748b] mb-4 tracking-widest uppercase">
                reach_me_at
              </p>
              <div className="space-y-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-4 group"
                  aria-label="Email"
                >
                  <div className="w-10 h-10 rounded border border-[rgba(0,255,157,0.2)] flex items-center justify-center group-hover:border-[#00ff9d] group-hover:bg-[rgba(0,255,157,0.08)] transition-all duration-200">
                    <FaEnvelope className="text-[#64748b] group-hover:text-[#00ff9d] transition-colors" size={16} />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-[#64748b]">email</p>
                    <p className="font-mono text-sm text-[#e2e8f0] group-hover:text-[#00ff9d] transition-colors">
                      {profile.email}
                    </p>
                  </div>
                </a>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                  aria-label="GitHub"
                >
                  <div className="w-10 h-10 rounded border border-[rgba(0,255,157,0.2)] flex items-center justify-center group-hover:border-[#00ff9d] group-hover:bg-[rgba(0,255,157,0.08)] transition-all duration-200">
                    <FaGithub className="text-[#64748b] group-hover:text-[#00ff9d] transition-colors" size={16} />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-[#64748b]">github</p>
                    <p className="font-mono text-sm text-[#e2e8f0] group-hover:text-[#00ff9d] transition-colors">
                      Virendra-Nawkar
                    </p>
                  </div>
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                  aria-label="LinkedIn"
                >
                  <div className="w-10 h-10 rounded border border-[rgba(0,207,255,0.2)] flex items-center justify-center group-hover:border-[#00cfff] group-hover:bg-[rgba(0,207,255,0.08)] transition-all duration-200">
                    <FaLinkedin className="text-[#64748b] group-hover:text-[#00cfff] transition-colors" size={16} />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-[#64748b]">linkedin</p>
                    <p className="font-mono text-sm text-[#e2e8f0] group-hover:text-[#00cfff] transition-colors">
                      virendra-nawkar
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Response time note */}
            <div className="rounded-lg p-4 bg-[rgba(0,255,157,0.03)] border border-[rgba(0,255,157,0.1)]">
              <p className="font-mono text-xs text-[#64748b] leading-relaxed">
                <span className="text-[#00ff9d]">// </span>
                I typically respond within 24 hours. Feel free to reach out about DevOps roles, collaborations, or just to say hi.
              </p>
            </div>
          </motion.div>

          {/* Contact form — right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[rgba(0,255,157,0.04)] border border-b-0 border-[rgba(0,255,157,0.15)] rounded-t-lg">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="ml-4 font-mono text-xs text-[#64748b]">send_message.sh</span>
            </div>

            <form
              onSubmit={handleSubmit}
              className="p-6 border border-[rgba(0,255,157,0.15)] rounded-b-lg bg-[rgba(0,0,0,0.4)] space-y-5"
            >
              {/* Name */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="font-mono text-xs text-[#64748b]">
                  <span className="text-[#00ff9d]">$ </span>name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="terminal-input rounded"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="font-mono text-xs text-[#64748b]">
                  <span className="text-[#00ff9d]">$ </span>email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="terminal-input rounded"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="font-mono text-xs text-[#64748b]">
                  <span className="text-[#00ff9d]">$ </span>message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hey Virendra, I wanted to reach out about..."
                  className="terminal-input rounded resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full text-sm font-mono py-3 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed rounded"
                aria-label="Send Message"
              >
                {status === 'loading' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-[#00ff9d] border-t-transparent rounded-full animate-spin" />
                    sending...
                  </>
                ) : (
                  <>
                    <span className="text-[#00ff9d]">&gt;</span>
                    ./send_message.sh
                  </>
                )}
              </button>

              {/* Status messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 font-mono text-sm text-[#00ff9d] bg-[rgba(0,255,157,0.08)] border border-[rgba(0,255,157,0.25)] rounded p-3"
                >
                  <FaCheckCircle size={14} />
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 font-mono text-sm text-red-400 bg-[rgba(239,68,68,0.08)] border border-[rgba(239,68,68,0.25)] rounded p-3"
                >
                  <FaTimesCircle size={14} />
                  Failed to send. Please email me directly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

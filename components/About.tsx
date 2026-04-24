'use client'

import { motion } from 'framer-motion'
import profile from '@/data/profile.json'

const stats = [
  { value: '1+', label: 'Years Learning', prefix: '>' },
  { value: '10+', label: 'Projects Built', prefix: '>' },
  { value: '5+', label: 'Tools Mastered', prefix: '>' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-label mb-2">
            <span className="text-[#00ff9d]">01.</span> about
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#e2e8f0]"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            <span className="text-[#00ff9d]">// </span>about_me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Terminal block */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Terminal window chrome */}
            <div className="rounded-lg overflow-hidden border border-[rgba(0,255,157,0.15)] shadow-[0_0_40px_rgba(0,255,157,0.05)]">
              {/* Window titlebar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[rgba(0,255,157,0.04)] border-b border-[rgba(0,255,157,0.1)]">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-4 font-mono text-xs text-[#64748b]">
                  virendra@devops:~
                </span>
              </div>

              {/* Terminal body */}
              <div className="p-6 bg-[rgba(0,0,0,0.5)] font-mono text-sm leading-relaxed">
                <p className="text-[#64748b] mb-1">
                  <span className="text-[#00ff9d]">virendra@devops</span>
                  <span className="text-[#e2e8f0]">:</span>
                  <span className="text-[#00cfff]">~</span>
                  <span className="text-[#e2e8f0]">$ </span>
                  <span className="text-[#e2e8f0]">cat about.txt</span>
                </p>
                <div className="mt-3 text-[#e2e8f0] space-y-3">
                  <p className="text-[#64748b]"># {'>>'} Profile loaded</p>
                  <p className="leading-loose">
                    {profile.about}
                  </p>
                </div>
                <p className="mt-4 text-[#64748b]">
                  <span className="text-[#00ff9d]">virendra@devops</span>
                  <span className="text-[#e2e8f0]">:</span>
                  <span className="text-[#00cfff]">~</span>
                  <span className="text-[#e2e8f0]">$ </span>
                  <span className="cursor-blink text-[#00ff9d]">█</span>
                </p>
              </div>
            </div>

            {/* Quick facts */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: 'Location', value: 'India' },
                { label: 'Focus', value: 'Cloud & DevOps' },
                { label: 'Company', value: 'Cognizant' },
                { label: 'Email', value: profile.email },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 font-mono text-xs py-2 border-b border-[rgba(0,255,157,0.08)]"
                >
                  <span className="text-[#00ff9d] shrink-0">&gt;</span>
                  <span className="text-[#64748b]">{item.label}:</span>
                  <span className="text-[#e2e8f0] truncate">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-col gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="glow-card rounded-lg p-6 bg-[rgba(0,255,157,0.02)] flex items-center gap-6"
              >
                <div className="shrink-0">
                  <span
                    className="text-5xl font-bold gradient-text"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {stat.value}
                  </span>
                </div>
                <div>
                  <p className="font-mono text-xs text-[#00ff9d] mb-1">{stat.prefix} stat</p>
                  <p className="text-[#e2e8f0] font-medium" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Current status card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="rounded-lg p-6 bg-[rgba(0,207,255,0.03)] border border-[rgba(0,207,255,0.15)]"
            >
              <p className="font-mono text-xs text-[#00cfff] mb-3 tracking-widest uppercase">
                current_status
              </p>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00ff9d] animate-pulse shrink-0" />
                  <span className="text-[#e2e8f0]">DevOps Engineer @ Cognizant</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00cfff] animate-pulse shrink-0" />
                  <span className="text-[#e2e8f0]">Building K8s & CI/CD systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#a855f7] animate-pulse shrink-0" />
                  <span className="text-[#e2e8f0]">Open to new opportunities</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import experienceData from '@/data/experience.json'

type Experience = {
  id: number
  company: string
  role: string
  duration: string
  points: string[]
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,255,157,0.15)] to-transparent" />

      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-label mb-2">
            <span className="text-[#00ff9d]">04.</span> experience
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#e2e8f0]"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            <span className="text-[#00ff9d]">// </span>experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#00ff9d] via-[rgba(0,255,157,0.3)] to-transparent" />

          <div className="space-y-10">
            {(experienceData as Experience[]).map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-14 sm:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-2 sm:left-4 top-2 w-5 h-5 rounded-full bg-[#0a0a0a] border-2 border-[#00ff9d] timeline-dot flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#00ff9d]" />
                </div>

                {/* Content card */}
                <div className="glow-card rounded-xl p-6 bg-[rgba(0,255,157,0.02)]">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3
                        className="text-xl font-bold text-[#e2e8f0]"
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                      >
                        {exp.role}
                      </h3>
                      <p className="font-mono text-sm text-[#00ff9d] mt-0.5">
                        @ {exp.company}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-[#64748b] bg-[rgba(0,255,157,0.06)] border border-[rgba(0,255,157,0.15)] px-3 py-1 rounded whitespace-nowrap self-start">
                      {exp.duration}
                    </span>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-3">
                    {exp.points.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                        className="flex items-start gap-3 font-mono text-sm text-[#64748b] leading-relaxed"
                      >
                        <span className="text-[#00ff9d] shrink-0 mt-0.5">▸</span>
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}

            {/* "More coming" placeholder */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative pl-14 sm:pl-20"
            >
              <div className="absolute left-2 sm:left-4 top-2 w-5 h-5 rounded-full bg-[#0a0a0a] border-2 border-[rgba(0,255,157,0.3)] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[rgba(0,255,157,0.3)] cursor-blink" />
              </div>
              <div className="border border-dashed border-[rgba(0,255,157,0.15)] rounded-xl p-5">
                <p className="font-mono text-sm text-[#64748b]">
                  <span className="text-[#00ff9d]">// </span>
                  more experience being written...
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

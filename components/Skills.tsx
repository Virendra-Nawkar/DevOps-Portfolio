'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaDocker,
  FaLinux,
  FaGitAlt,
  FaPython,
} from 'react-icons/fa'
import {
  SiKubernetes,
  SiMicrosoftazure,
  SiJenkins,
  SiGithubactions,
  SiTerraform,
  SiAnsible,
  SiHelm,
  SiNginx,
  SiPrometheus,
  SiGrafana,
} from 'react-icons/si'
import skillsData from '@/data/skills.json'

type Skill = {
  name: string
  icon: string
  category: string
}

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  FaDocker: FaDocker,
  FaLinux: FaLinux,
  FaGitAlt: FaGitAlt,
  FaPython: FaPython,
  SiKubernetes: SiKubernetes,
  SiMicrosoftazure: SiMicrosoftazure,
  SiJenkins: SiJenkins,
  SiGithubactions: SiGithubactions,
  SiTerraform: SiTerraform,
  SiAnsible: SiAnsible,
  SiHelm: SiHelm,
  SiNginx: SiNginx,
  SiPrometheus: SiPrometheus,
  SiGrafana: SiGrafana,
}

const categoryColors: Record<string, string> = {
  Containers: '#00ff9d',
  Cloud: '#00cfff',
  'CI/CD': '#a855f7',
  IaC: '#f59e0b',
  OS: '#ec4899',
  VCS: '#f97316',
  Languages: '#3b82f6',
  Networking: '#10b981',
  Monitoring: '#ef4444',
}

const categories = ['All', ...Array.from(new Set((skillsData as Skill[]).map((s) => s.category)))]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? (skillsData as Skill[])
      : (skillsData as Skill[]).filter((s) => s.category === activeCategory)

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Subtle top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,255,157,0.15)] to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="section-label mb-2">
            <span className="text-[#00ff9d]">02.</span> skills
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#e2e8f0]"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            <span className="text-[#00ff9d]">// </span>skills &amp; tools
          </h2>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-mono text-xs px-3 py-1.5 rounded border transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[rgba(0,255,157,0.12)] border-[rgba(0,255,157,0.5)] text-[#00ff9d]'
                  : 'border-[rgba(0,255,157,0.1)] text-[#64748b] hover:border-[rgba(0,255,157,0.3)] hover:text-[#e2e8f0]'
              }`}
            >
              {cat === 'All' ? '[ all ]' : cat}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3"
        >
          {filtered.map((skill) => {
            const IconComponent = iconMap[skill.icon]
            const color = categoryColors[skill.category] || '#00ff9d'

            return (
              <motion.div
                key={`${skill.name}-${skill.category}`}
                variants={item}
                transition={{ duration: 0.35 }}
                className="group relative glow-card rounded-lg p-4 flex flex-col items-center gap-3 bg-[rgba(0,255,157,0.02)] cursor-default"
              >
                {/* Icon */}
                <div
                  className="transition-all duration-300 group-hover:scale-110"
                  style={{ color, filter: `drop-shadow(0 0 8px ${color}40)` }}
                >
                  {IconComponent ? (
                    <IconComponent size={28} />
                  ) : (
                    <span className="text-xl font-bold">{skill.name.slice(0, 2)}</span>
                  )}
                </div>

                {/* Name */}
                <span className="font-mono text-xs text-[#e2e8f0] text-center leading-tight">
                  {skill.name}
                </span>

                {/* Category badge */}
                <span
                  className="font-mono text-[9px] px-1.5 py-0.5 rounded-sm"
                  style={{
                    color,
                    background: `${color}15`,
                    border: `1px solid ${color}30`,
                  }}
                >
                  {skill.category}
                </span>

                {/* Hover glow overlay */}
                <div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 50% 50%, ${color}08, transparent 70%)` }}
                />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Count */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 font-mono text-xs text-[#64748b] text-center"
        >
          <span className="text-[#00ff9d]">{filtered.length}</span> tools loaded
        </motion.p>
      </div>
    </section>
  )
}

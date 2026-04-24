'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import projectsData from '@/data/projects.json'

type Project = {
  id: number
  title: string
  description: string
  tags: string[]
  github: string
  live: string
}

const allTags = ['All', ...Array.from(new Set((projectsData as Project[]).flatMap((p) => p.tags)))]

const tagColors = [
  'rgba(0,255,157,0.15)',
  'rgba(0,207,255,0.15)',
  'rgba(168,85,247,0.15)',
  'rgba(245,158,11,0.15)',
  'rgba(239,68,68,0.15)',
  'rgba(59,130,246,0.15)',
  'rgba(16,185,129,0.15)',
  'rgba(249,115,22,0.15)',
]

function getTagColor(tag: string) {
  let hash = 0
  for (let i = 0; i < tag.length; i++) hash = tag.charCodeAt(i) + ((hash << 5) - hash)
  return tagColors[Math.abs(hash) % tagColors.length]
}

export default function Projects() {
  const [activeTag, setActiveTag] = useState('All')

  const filtered =
    activeTag === 'All'
      ? (projectsData as Project[])
      : (projectsData as Project[]).filter((p) => p.tags.includes(activeTag))

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
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
            <span className="text-[#00ff9d]">03.</span> projects
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#e2e8f0]"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            <span className="text-[#00ff9d]">// </span>projects
          </h2>
        </motion.div>

        {/* Tag filter bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {allTags.slice(0, 14).map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`font-mono text-xs px-3 py-1.5 rounded border transition-all duration-200 ${
                activeTag === tag
                  ? 'bg-[rgba(0,255,157,0.12)] border-[rgba(0,255,157,0.5)] text-[#00ff9d]'
                  : 'border-[rgba(0,255,157,0.1)] text-[#64748b] hover:border-[rgba(0,255,157,0.3)] hover:text-[#e2e8f0]'
              }`}
            >
              {tag === 'All' ? '[ all ]' : `#${tag}`}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="group glow-card rounded-xl bg-[rgba(0,255,157,0.02)] p-6 flex flex-col gap-4 relative overflow-hidden"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#00ff9d] to-[#00cfff] opacity-0 group-hover:opacity-60 transition-opacity duration-300" />

                {/* Project number */}
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-[#64748b]">
                    project_{String(project.id).padStart(2, '0')}
                  </span>
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#64748b] hover:text-[#00ff9d] transition-colors duration-200"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <FaGithub size={18} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#64748b] hover:text-[#00cfff] transition-colors duration-200"
                        aria-label={`View ${project.title} live`}
                      >
                        <FaExternalLinkAlt size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold text-[#00ff9d] group-hover:drop-shadow-[0_0_10px_rgba(0,255,157,0.4)] transition-all duration-300"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p className="font-mono text-sm text-[#64748b] leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] px-2 py-1 rounded border"
                      style={{
                        background: getTagColor(tag),
                        borderColor: getTagColor(tag).replace('0.15', '0.3'),
                        color: '#e2e8f0',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center font-mono text-[#64748b] py-12"
          >
            <span className="text-[#00ff9d]">$ </span>
            No projects found for tag: {activeTag}
          </motion.p>
        )}
      </div>
    </section>
  )
}

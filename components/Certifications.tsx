'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaAward } from 'react-icons/fa'
import certificationsData from '@/data/certifications.json'

type Certification = {
  id: number
  name: string
  issuer: string
  date: string
  badge: string
  link: string
}

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 px-4 sm:px-6 lg:px-8">
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
            <span className="text-[#00ff9d]">05.</span> certifications
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#e2e8f0]"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            <span className="text-[#00ff9d]">// </span>certifications
          </h2>
        </motion.div>

        {/* Cert grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(certificationsData as Certification[]).map((cert, index) => (
            <motion.a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glow-card rounded-xl p-6 bg-[rgba(0,255,157,0.02)] flex flex-col items-center gap-5 relative overflow-hidden cursor-pointer"
              aria-label={`View ${cert.name} certification`}
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#00ff9d] to-[#00cfff] opacity-0 group-hover:opacity-60 transition-opacity duration-300" />

              {/* Badge */}
              <div className="relative w-24 h-24 shrink-0">
                <Image
                  src={cert.badge}
                  alt={`${cert.name} badge`}
                  fill
                  className="object-contain drop-shadow-[0_0_15px_rgba(0,255,157,0.3)] group-hover:drop-shadow-[0_0_25px_rgba(0,255,157,0.5)] transition-all duration-300 group-hover:scale-105"
                  sizes="96px"
                />
              </div>

              {/* Info */}
              <div className="text-center space-y-1.5">
                <div className="flex items-center justify-center gap-2">
                  <FaAward className="text-[#00ff9d] shrink-0" size={14} />
                  <h3
                    className="font-bold text-[#e2e8f0] text-sm leading-tight"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {cert.name}
                  </h3>
                </div>
                <p className="font-mono text-xs text-[#00cfff]">{cert.issuer}</p>
                <p className="font-mono text-xs text-[#64748b]">
                  <span className="text-[#00ff9d]">issued: </span>
                  {cert.date}
                </p>
              </div>

              {/* Hover link indicator */}
              <div className="flex items-center gap-1.5 font-mono text-xs text-[#64748b] group-hover:text-[#00ff9d] transition-colors duration-200 mt-1">
                <FaExternalLinkAlt size={10} />
                <span>verify credential</span>
              </div>

              {/* Background glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 50% 50%, rgba(0,255,157,0.04), transparent 70%)' }}
              />
            </motion.a>
          ))}

          {/* More coming card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: (certificationsData.length) * 0.1 }}
            className="rounded-xl p-6 border border-dashed border-[rgba(0,255,157,0.15)] bg-[rgba(0,255,157,0.01)] flex flex-col items-center justify-center gap-3 min-h-[200px]"
          >
            <span className="font-mono text-3xl text-[rgba(0,255,157,0.2)]">+</span>
            <p className="font-mono text-xs text-[#64748b] text-center">
              <span className="text-[#00ff9d]">// </span>
              more certs<br />in progress...
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

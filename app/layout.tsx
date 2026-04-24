import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Virendra Nawkar | DevOps Engineer',
  description: 'Cloud & DevOps Engineer specializing in Docker, Kubernetes, Azure, and CI/CD pipelines.',
  keywords: ['DevOps', 'Cloud Engineer', 'Kubernetes', 'Docker', 'Azure', 'CI/CD', 'Terraform'],
  authors: [{ name: 'Virendra Nawkar' }],
  openGraph: {
    title: 'Virendra Nawkar | DevOps Engineer',
    description: 'Cloud & DevOps Engineer specializing in Docker, Kubernetes, Azure, and CI/CD pipelines.',
    url: 'https://virpages.com',
    siteName: 'virpages.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Virendra Nawkar | DevOps Engineer',
    description: 'Cloud & DevOps Engineer specializing in Docker, Kubernetes, Azure, and CI/CD pipelines.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}

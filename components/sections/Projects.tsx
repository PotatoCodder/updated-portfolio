'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

const webProjects = [
  {
    name: 'Formula Formatter (Web)',
    images: [
      '/projects/formula-formatter/1.png',
      '/projects/formula-formatter/2.png',
      '/projects/formula-formatter/3.png',
    ],
    description: 'A web app that converts and visualizes math formulas into MathML with animated UI and calculator integration.',
    details: ['React', 'MathJax', 'Tailwind', 'Next.js'],
  },
  {
    name: 'eLIT (Gamified Learning Site)',
    images: [
      '/projects/elit/1.png',
      '/projects/elit/2.png',
      '/projects/elit/3.png',
    ],
    description: 'An interactive and gamified educational website built for learners with quizzes, levels, and rewards.',
    details: ['Laravel', 'Blade', 'MySQL', 'Bootstrap'],
  },
  {
    name: 'Library Management System',
    images: [
      '/projects/library/1.png',
      '/projects/library/2.png',
      '/projects/library/3.png',
    ],
    description: 'A full-featured library system with login, book borrowing, and admin dashboard.',
    details: ['PHP', 'MySQL', 'Bootstrap'],
  },
  {
    name: 'FastBite (E-commerce Fastfood Site)',
    images: [
      '/projects/fastbite/1.png',
      '/projects/fastbite/2.png',
      '/projects/fastbite/3.png',
    ],
    description: 'A modern fastfood ordering system for customers with real-time order management.',
    details: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
]

const androidProjects = [
  {
    name: 'Formula Formatter (Android)',
    images: [
      '/projects/android/formula/1.png',
      '/projects/android/formula/2.png',
    ],
    description: 'Android version of Formula Formatter with input, history, and formatting view optimized for mobile.',
    details: ['React Native', 'JavaScript', 'MathML'],
  },
  {
    name: 'WealthWise (Forecasting App)',
    images: [
      '/projects/android/wealthwise/1.png',
      '/projects/android/wealthwise/2.png',
    ],
    description: 'A forecasting and financial tracking app that helps users manage income and expenses.',
    details: ['React Native', 'Firebase', 'Chart.js'],
  },
  {
    name: 'PUJgrab (Tricycle Booking)',
    images: [
      '/projects/android/pujgrab/1.png',
      '/projects/android/pujgrab/2.png',
    ],
    description: 'A mobile booking platform for local tricycle transport with map and real-time updates.',
    details: ['React Native', 'Expo', 'Firebase'],
  },
]

export default function Projects() {
  const [openWebIndex, setOpenWebIndex] = useState<number | null>(null)
  const [openAndroidIndex, setOpenAndroidIndex] = useState<number | null>(null)

  const renderProjectSection = (
    projects: {
      name: string
      images: string[]
      description: string
      details: string[]
    }[],
    openIndex: number | null,
    setOpenIndex: React.Dispatch<React.SetStateAction<number | null>>,
    title: string
  ) => (
    <div className="mb-20">
      <h3 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-3 pl-1 border-indigo-200 shadow-sm bg-gradient-to-r from-white to-indigo-50 rounded-md inline-block w-fit animate-fadeUp">
        {title}
      </h3>
      <div id="projects" className="grid gap-10">
        {projects.map((project, index) => {
          const isOpen = openIndex === index

          return (
            <div
              key={index}
              className={`rounded-xl border border-gray-100 bg-white transition-all duration-500 overflow-hidden group hover:border-indigo-200 hover:shadow-lg ${isOpen ? 'shadow-2xl border-indigo-300 bg-white/60 backdrop-blur-md scale-[1.015]' : ''}`}
            >
              <button
                className="flex items-center justify-between w-full px-6 py-5 text-lg font-medium text-gray-700 hover:bg-indigo-50 transition-all"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="flex items-center gap-3">
                  <span className="text-indigo-500 text-2xl">📂</span> {project.name}
                </span>
                <ChevronDown
                  className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} text-gray-500`}
                />
              </button>

              <div
                className={`grid transition-all duration-500 px-8 ${
                  isOpen ? 'grid-rows-[1fr] opacity-100 py-6' : 'grid-rows-[0fr] opacity-0'
                }`}
                style={{ overflow: 'hidden' }}
              >
                <div className="overflow-hidden animate-fadeIn">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
                    {project.images.map((imgSrc, i) => (
                      <div key={i} className="relative w-full h-64 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
                        <Image
                          src={imgSrc}
                          alt={`${project.name} screenshot ${i + 1}`}
                          fill
                          className="object-cover transition duration-500 group-hover:scale-105 rounded-xl"
                        />
                      </div>
                    ))}
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-5 px-2 italic">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 px-2">
                    {project.details.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-indigo-100 text-indigo-800 px-4 py-1.5 text-sm font-semibold rounded-full shadow hover:bg-indigo-200 transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )

  return (
    <section className="bg-gradient-to-b from-white to-slate-100 py-24 px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 drop-shadow-md animate-fadeUp">
          🚀 Featured Projects
        </h2>
        {renderProjectSection(webProjects, openWebIndex, setOpenWebIndex, '🖥️ Web Projects')}
        {renderProjectSection(androidProjects, openAndroidIndex, setOpenAndroidIndex, '📱 Android Projects')}
      </div>
    </section>
  )
}

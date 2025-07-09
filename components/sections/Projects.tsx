'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

const projects = [
  {
    name: 'Formula Formatter',
    image: '/projects/formula-formatter.png',
    description: 'Math formula converter that transforms expressions into readable MathML + calculator integration. Built to make Math beautiful on the web.',
    details: ['React', 'MathML', 'Tailwind', 'MathJax', 'Framer Motion'],
  },
  {
    name: 'Budget Tracker',
    image: '/projects/budget-tracker.png',
    description: 'Track income, expenses, and savings. Firebase-authenticated + clean charts.',
    details: ['Next.js', 'Firebase', 'Chart.js', 'Tailwind'],
  },
  {
    name: 'Voting System',
    image: '/projects/voting-system.png',
    description: 'Capstone-ready e-voting app with real-time result tracking and admin control panel.',
    details: ['Laravel', 'MySQL', 'PHP', 'Blade', 'Bootstrap'],
  },
  {
    name: 'Movie Explorer',
    image: '/projects/movie-explorer.png',
    description: 'Movie search and explore interface using The Movie DB API with dark/light themes.',
    details: ['React', 'API', 'Tailwind', 'Axios'],
  },
  {
    name: 'Portfolio v2',
    image: '/projects/portfolio-v2.png',
    description: 'My current portfolio. Built to reflect modern design + interaction with polish.',
    details: ['Next.js', 'Framer Motion', 'Tailwind', 'Responsive'],
  },
]

export default function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-gradient-to-b from-white to-slate-100 py-24 px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-800 animate-fadeUp">🚀 Featured Projects</h2>

        <div className="grid gap-10">
          {projects.map((project, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className={`rounded-3xl border border-gray-200 shadow-2xl bg-white/60 backdrop-blur-md transition-all duration-500 overflow-hidden group hover:scale-[1.015] hover:shadow-3xl animate-fadeIn`}
              >
                <button
                  className="flex items-center justify-between w-full px-8 py-6 text-xl font-semibold text-gray-800 hover:bg-gray-100 transition"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-indigo-500 text-2xl">📂</span> {project.name}
                  </span>
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    } text-gray-500`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-500 px-8 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 py-6' : 'grid-rows-[0fr] opacity-0'
                  }`}
                  style={{ overflow: 'hidden' }}
                >
                  <div className="overflow-hidden animate-fadeIn">
                    <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-md mb-4">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>

                    <p className="text-gray-700 text-sm leading-relaxed mb-5">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.details.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-indigo-100 text-indigo-800 px-3 py-1 text-xs font-medium rounded-full shadow-sm hover:bg-indigo-200 transition"
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
    </section>
  )
}

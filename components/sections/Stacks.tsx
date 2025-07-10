'use client'

import Image from "next/image"
import styles from '@/styles/Stack.module.css'

const logos = [
  { name: "React", src: "/logos/react.svg" },
  { name: "React Native", src: "/logos/react-native.svg" },
  { name: "Tailwind", src: "/logos/tailwind.svg" },
  { name: "Node.js", src: "/logos/nodejs.svg" },
  { name: "Express", src: "/logos/express.svg" },
  { name: "Laravel", src: "/logos/laravel.svg" },
  { name: "MongoDB", src: "/logos/mongodb.svg" },
  { name: "Firebase", src: "/logos/firebase.svg" },
  { name: "Linux", src: "../" },
  { name: "ML", src: "/logos/ml.svg" },
  { name: "Cybersec", src: "/logos/security.svg" },
]

export default function Stack() {
  return (
    <section className="bg-white py-20 border-t overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className={styles.trackWrapper}>
          {logos.map((tech, index) => (
            <div
              key={index}
              className={`${styles.item} ${index % 2 === 0 ? styles.down : styles.up}`}
              style={{ animationDelay: `${index * 1}s` }} // Delay each one
            >
              <div className="relative w-12 h-12 mb-1">
                <Image
                  src={tech.src}
                  alt={tech.name}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-xs text-center text-gray-600">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

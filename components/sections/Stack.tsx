'use client'

import Image from "next/image"
import styles from '@/styles/Stack.module.css'
import react from '../../assets/stacks/React.webp'
import reactnative from '../../assets/stacks/reactnative.png'
import tailwind from '../../assets/stacks/tailwind.png'
import nodejs from '../../assets/stacks/nodejs.png'
import express from '../../assets/stacks/express.png'
import laravel from '../../assets/stacks/laravel.png'
import mongodb from '../../assets/stacks/mongodb.png'
import firebase from '../../assets/stacks/firebase.webp'
import linux from '../../assets/stacks/linux.png'
import tensorflow from '../../assets/stacks/tensorflow.png'
import kali from '../../assets/stacks/kali.png'

const logos = [
  { name: "React", src: react },
  { name: "React Native", src: reactnative },
  { name: "Tailwind", src: tailwind },
  { name: "Node.js", src: nodejs },
  { name: "Express", src: express },
  { name: "Laravel", src: laravel },
  { name: "MongoDB", src: mongodb },
  { name: "Firebase", src: firebase },
  { name: "Linux", src: linux },
  { name: "ML", src: tensorflow },
  { name: "Cybersec", src: kali },
]

export default function Stack() {
  return (
    <section id="stack" className="bg-white py-20 border-t overflow-hidden">
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

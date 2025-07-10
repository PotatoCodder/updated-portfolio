'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"
import profile from '../../assets/images/profile.jpg'

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text Content */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900 mb-6">
            Building Smart, Scalable, and Beautiful Web Apps
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            I’m Konoe, a full-stack dev crafting fast, clean, and modern web experiences. Let’s make something amazing together.
          </p>
          <div className="flex space-x-4">
            <Button size="lg">View Projects</Button>
            <Button size="lg" variant="outline">Contact Me</Button>
          </div>
        </div>

        {/* Right: Image or Illustration */}
        <div className="relative w-[250px] h-[250px] mx-auto rounded-full overflow-hidden shadow-xl ring-4 ring-indigo-200">
          <Image
            src={profile}
            alt="Profile Picture"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface IPhoneMockupProps {
  src: string;
  alt: string;
  className?: string;
}

export function IPhoneMockup({ src, alt, className = "" }: IPhoneMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotateX: 10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative mx-auto ${className}`}
      style={{ perspective: "1000px" }}
    >
      {/* iPhone 15 Pro Frame */}
      <div className="relative mx-auto w-[280px]">
        {/* Phone shadow */}
        <div className="absolute -inset-2 rounded-[3.5rem] bg-black/20 blur-xl" />

        {/* Titanium frame */}
        <div className="relative rounded-[3rem] bg-gradient-to-b from-zinc-600 via-zinc-700 to-zinc-800 p-[2px] shadow-2xl">
          {/* Inner bezel */}
          <div className="rounded-[2.9rem] bg-gradient-to-b from-zinc-800 via-zinc-900 to-black p-[10px]">

            {/* Screen bezel */}
            <div className="relative rounded-[2.2rem] bg-black p-[2px]">

              {/* Screen container */}
              <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.1rem] bg-black">

                {/* Dynamic Island */}
                <div className="absolute top-3 left-1/2 z-30 flex h-[30px] w-[100px] -translate-x-1/2 items-center justify-center rounded-full bg-black">
                  {/* Camera lens */}
                  <div className="absolute left-4 h-3 w-3 rounded-full bg-zinc-900 ring-1 ring-zinc-700">
                    <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-zinc-600 to-zinc-800" />
                    <div className="absolute inset-[4px] rounded-full bg-gradient-to-br from-blue-900/50 to-purple-900/50" />
                  </div>
                </div>

                {/* Screen content */}
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover object-top"
                  sizes="280px"
                />

                {/* Screen edge highlight */}
                <div className="pointer-events-none absolute inset-0 rounded-[2.1rem] ring-1 ring-white/10" />

                {/* Subtle screen reflection */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Side buttons - Volume */}
        <div className="absolute top-[100px] -left-[2px] h-8 w-[3px] rounded-l-sm bg-gradient-to-b from-zinc-500 to-zinc-700" />
        <div className="absolute top-[140px] -left-[2px] h-14 w-[3px] rounded-l-sm bg-gradient-to-b from-zinc-500 to-zinc-700" />
        <div className="absolute top-[200px] -left-[2px] h-14 w-[3px] rounded-l-sm bg-gradient-to-b from-zinc-500 to-zinc-700" />

        {/* Side button - Power */}
        <div className="absolute top-[160px] -right-[2px] h-20 w-[3px] rounded-r-sm bg-gradient-to-b from-zinc-500 to-zinc-700" />

        {/* Ambient glow */}
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="from-primary/30 to-secondary/30 absolute -inset-8 -z-10 rounded-[5rem] bg-gradient-to-br via-transparent blur-3xl"
        />
      </div>
    </motion.div>
  );
}

export function IPhoneMockupLandscape({ src, alt, className = "" }: IPhoneMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`relative mx-auto ${className}`}
    >
      {/* iPhone Frame - Landscape */}
      <div className="relative mx-auto w-[500px]">
        {/* Outer frame */}
        <div className="relative rounded-[2rem] border-[12px] border-zinc-800 bg-zinc-900 p-1 shadow-xl dark:border-zinc-700">
          {/* Dynamic Island - rotated to left side */}
          <div className="absolute top-1/2 left-4 z-20 h-24 w-6 -translate-y-1/2 rounded-full bg-zinc-900" />

          {/* Screen container */}
          <div className="relative aspect-[19.5/9] overflow-hidden rounded-[1.4rem] bg-black">
            {/* Screen content */}
            <Image src={src} alt={alt} fill className="object-cover" sizes="500px" />

            {/* Screen glare effect */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
          </div>
        </div>

        {/* Reflection/glow effect */}
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="from-primary/20 to-secondary/20 absolute -inset-4 -z-10 rounded-[3rem] bg-gradient-to-br via-transparent blur-2xl"
        />
      </div>
    </motion.div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TerminalWindowProps {
  children: React.ReactNode;
  title?: string;
  animated?: boolean;
}

export function TerminalWindow({
  children,
  title = "terminal",
  animated = true,
}: TerminalWindowProps) {
  return (
    <motion.div
      initial={animated ? { opacity: 0, y: 20 } : undefined}
      whileInView={animated ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="border-border bg-card overflow-hidden border"
    >
      <div className="border-border bg-muted/50 flex items-center gap-2 border-b px-4 py-2">
        <div className="flex gap-1.5">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            className="bg-destructive h-3 w-3 rounded-full"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
            className="h-3 w-3 rounded-full bg-yellow-500"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
            className="bg-secondary h-3 w-3 rounded-full"
          />
        </div>
        <span className="text-muted-foreground ml-2 font-mono text-xs">{title}</span>
      </div>
      <div className="p-4 font-mono text-sm">{children}</div>
    </motion.div>
  );
}

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
}

export function TypewriterText({
  text,
  delay = 50,
  className = "",
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <span className={className}>
      {displayText}
      {currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="bg-primary inline-block w-2"
        >
          _
        </motion.span>
      )}
    </span>
  );
}

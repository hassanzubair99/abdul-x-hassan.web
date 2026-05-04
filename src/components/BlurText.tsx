import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

interface BlurTextProps {
  text: string;
  className?: string;
  delayOffset?: number;
}

export function BlurText({ text, className, delayOffset = 0 }: BlurTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(containerRef, { amount: 0.1, once: true });
  const words = text.split(' ');

  return (
    <p ref={containerRef} className={`blur-text-parent ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="blur-text-word"
          initial={{ filter: 'blur(10px)', opacity: 0, y: 50 }}
          animate={isInView ? {
            filter: ['blur(10px)', 'blur(5px)', 'blur(0px)'],
            opacity: [0, 0.5, 1],
            y: [50, -5, 0]
          } : {}}
          transition={{
            duration: 0.7,
            times: [0, 0.5, 1],
            ease: 'easeOut',
            delay: delayOffset + (i * 0.1)
          }}
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}

import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="relative z-10 py-12 px-8 flex flex-col items-center justify-center gap-4 bg-black/50 backdrop-blur-sm border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-2"
      >
        <span className="text-white/40 text-sm font-body tracking-wider uppercase">Designed & Developed by</span>
        <span className="font-heading italic text-white text-xl tracking-tight">abdul rehman webs</span>
      </motion.div>
      
      <div className="flex items-center gap-6 mt-2">
        {['Privacy', 'Terms', 'Contact'].map((item) => (
          <button key={item} className="text-xs text-white/30 font-body hover:text-white transition-colors">
            {item}
          </button>
        ))}
      </div>
      
      <p className="text-[10px] text-white/20 mt-4 font-body uppercase tracking-[0.2em]">
        © 2026 Aether Space Voyages. All Rights Reserved.
      </p>
    </footer>
  );
}

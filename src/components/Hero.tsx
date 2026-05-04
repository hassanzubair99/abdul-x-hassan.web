import { motion } from 'motion/react';
import { ArrowUpRight, Play, Clock, Globe } from 'lucide-react';
import { FadingVideo } from './FadingVideo';
import { BlurText } from './BlurText';

export function Hero() {
  const partners = ['Aeon', 'Vela', 'Apex', 'Orbit', 'Zeno'];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex flex-col pt-24 pb-8">
      {/* Background Video */}
      <FadingVideo
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4"
        className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
        style={{ width: '120%', height: '120%' }}
      />

      {/* Content Layer */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
          className="liquid-glass rounded-full p-1 pr-3 flex items-center gap-3 mb-8"
        >
          <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-semibold">New</span>
          <span className="text-sm text-white/90 font-body">Maiden Crewed Voyage to Mars Arrives 2026</span>
        </motion.div>

        {/* Headline */}
        <BlurText
          text="Venture Past Our Sky Across the Universe"
          className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] max-w-2xl tracking-[-4px]"
        />

        {/* Subheading */}
        <motion.p
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7, ease: 'easeOut' }}
          className="mt-6 text-sm md:text-base text-white/80 max-w-xl font-body font-light leading-tight"
        >
          Discover the universe in ways once unimaginable. Our pioneering vessels and breakthrough engineering bring deep-space exploration within reach—secure and extraordinary.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7, ease: 'easeOut' }}
          className="flex items-center gap-6 mt-8"
        >
          <button className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium text-white flex items-center gap-2 hover:bg-white/5 transition-colors">
            Start Your Voyage
            <ArrowUpRight className="h-5 w-5" />
          </button>
          <button className="flex items-center gap-2 text-sm font-medium text-white hover:text-white/80 transition-colors">
            <Play className="h-4 w-4 fill-white" />
            View Liftoff
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7, ease: 'easeOut' }}
          className="flex flex-wrap justify-center items-stretch gap-4 mt-12"
        >
          <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] text-left">
            <Clock className="w-7 h-7 text-white/80 mb-4 stroke-[1.5px]" />
            <h3 className="font-heading italic text-4xl text-white tracking-[-1px] leading-none">34.5 Min</h3>
            <p className="text-xs text-white/60 font-body font-light mt-2">Average Videos Watch Time</p>
          </div>
          <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] text-left">
            <Globe className="w-7 h-7 text-white/80 mb-4 stroke-[1.5px]" />
            <h3 className="font-heading italic text-4xl text-white tracking-[-1px] leading-none">2.8B+</h3>
            <p className="text-xs text-white/60 font-body font-light mt-2">Users Across the Globe</p>
          </div>
        </motion.div>
      </div>

      {/* Partners Row */}
      <motion.div
        initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
        animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 flex flex-col items-center gap-6 mt-12 mb-8"
      >
        <div className="liquid-glass rounded-full px-4 py-1 text-xs font-medium text-white/80">
          Collaborating with top aerospace pioneers globally
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner) => (
            <span key={partner} className="font-heading italic text-2xl md:text-3xl text-white/90 tracking-tight">
              {partner}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

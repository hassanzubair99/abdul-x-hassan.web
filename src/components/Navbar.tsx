import { ArrowUpRight } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-4 left-0 w-full px-8 lg:px-16 z-50 flex items-center justify-between pointer-events-none">
      {/* Logo */}
      <div className="w-12 h-12 flex items-center justify-center liquid-glass rounded-full pointer-events-auto">
        <span className="font-heading italic text-2xl lowercase text-white">a</span>
      </div>

      {/* Center Nav (Desktop Only) */}
      <div className="hidden lg:flex items-center gap-1.5 liquid-glass rounded-full px-1.5 py-1.5 shadow-xl pointer-events-auto">
        {['Home', 'Voyages', 'Worlds', 'Innovation', 'Plan Launch'].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(' ', '-')}`}
            className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors"
          >
            {link}
          </a>
        ))}
        <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1.5 whitespace-nowrap ml-1.5 hover:bg-white/90 transition-colors">
          Claim a Spot
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>

      {/* Right Balance Spacer */}
      <div className="w-12 h-12 invisible" />
    </nav>
  );
}

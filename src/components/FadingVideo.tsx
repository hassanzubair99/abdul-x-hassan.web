import { useEffect, useRef } from 'react';

interface FadingVideoProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

const FADE_MS = 500;
const FADE_OUT_LEAD = 0.55;

export function FadingVideo({ src, className, style }: FadingVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafIdRef = useRef<number | null>(null);
  const fadingOutRef = useRef(false);

  const fadeTo = (targetOpacity: number, duration: number) => {
    if (!videoRef.current) return;
    
    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current);
    }

    const startOpacity = parseFloat(videoRef.current.style.opacity || '0');
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const nextOpacity = startOpacity + (targetOpacity - startOpacity) * progress;
      
      if (videoRef.current) {
        videoRef.current.style.opacity = nextOpacity.toString();
      }

      if (progress < 1) {
        rafIdRef.current = requestAnimationFrame(animate);
      } else {
        rafIdRef.current = null;
      }
    };

    rafIdRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      video.style.opacity = '0';
      video.play().catch(e => console.error("Autoplay prevented:", e));
      fadeTo(1, FADE_MS);
    };

    const handleTimeUpdate = () => {
      if (!fadingOutRef.current && video.duration > 0 && video.duration - video.currentTime <= FADE_OUT_LEAD) {
        fadingOutRef.current = true;
        fadeTo(0, FADE_MS);
      }
    };

    const handleEnded = () => {
      video.style.opacity = '0';
      setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(e => console.error("Replay prevented:", e));
        fadingOutRef.current = false;
        fadeTo(1, FADE_MS);
      }, 100);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      style={{ ...style, opacity: 0 }}
      muted
      playsInline
      preload="auto"
      autoPlay
    />
  );
}

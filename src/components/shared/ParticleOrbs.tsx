import React from 'react';

interface Props {
  count?: number;
  className?: string;
}

export const ParticleOrbs: React.FC<Props> = ({ count = 6, className = '' }) => {
  const orbs = Array.from({ length: count }, (_, i) => i);
  const configs = [
    { size: 'w-64 h-64', pos: 'top-[-80px] left-[-60px]', color: 'bg-blue-600/20', blur: 'blur-3xl', delay: '0s', duration: '14s' },
    { size: 'w-96 h-96', pos: 'top-[20%] right-[-100px]', color: 'bg-cyan-500/15', blur: 'blur-3xl', delay: '2s', duration: '18s' },
    { size: 'w-80 h-80', pos: 'bottom-[-60px] left-[20%]', color: 'bg-indigo-600/15', blur: 'blur-3xl', delay: '4s', duration: '16s' },
    { size: 'w-48 h-48', pos: 'top-[40%] left-[10%]', color: 'bg-violet-500/10', blur: 'blur-2xl', delay: '1s', duration: '12s' },
    { size: 'w-56 h-56', pos: 'bottom-[10%] right-[15%]', color: 'bg-blue-500/15', blur: 'blur-3xl', delay: '3s', duration: '20s' },
    { size: 'w-32 h-32', pos: 'top-[10%] left-[50%]', color: 'bg-cyan-400/10', blur: 'blur-2xl', delay: '5s', duration: '10s' },
  ];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {orbs.slice(0, count).map((_, i) => {
        const cfg = configs[i % configs.length];
        return (
          <div
            key={i}
            className={`absolute rounded-full ${cfg.size} ${cfg.pos} ${cfg.color} ${cfg.blur} orb-float`}
            style={{ animationDelay: cfg.delay, animationDuration: cfg.duration }}
          />
        );
      })}
    </div>
  );
};

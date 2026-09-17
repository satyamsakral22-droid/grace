import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: string;
  dark?: boolean;
  center?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<Props> = ({
  badge,
  badgeIcon,
  title,
  subtitle,
  dark = false,
  center = true,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${center ? 'text-center' : ''} ${className}`}
    >
      {badge && (
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 ${
          dark
            ? 'bg-white/5 border border-cyan-400/30 text-cyan-400'
            : 'bg-blue-50 border border-blue-200 text-grace-primary'
        }`}>
          {badgeIcon && <span className="w-3.5 h-3.5">{badgeIcon}</span>}
          {badge}
        </div>
      )}
      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black font-serif tracking-tight leading-tight ${
        dark ? 'text-white' : 'text-slate-900'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-sm mt-3 max-w-2xl ${center ? 'mx-auto' : ''} leading-relaxed ${
          dark ? 'text-slate-400' : 'text-slate-500'
        }`}>
          {subtitle}
        </p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`h-0.5 w-16 rounded-full mt-4 origin-left bg-gradient-to-r from-grace-primary to-cyan-400 ${center ? 'mx-auto' : ''}`}
      />
    </motion.div>
  );
};

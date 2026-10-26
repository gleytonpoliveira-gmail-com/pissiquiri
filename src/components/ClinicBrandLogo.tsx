import React from 'react';
import { CLINIC_INFO } from '../data/clinicalData';

interface ClinicBrandLogoProps {
  variant?: 'header' | 'footer';
  className?: string;
}

export const ClinicBrandLogo: React.FC<ClinicBrandLogoProps> = ({ variant = 'header', className = '' }) => {
  if (variant === 'footer') {
    return (
      <div className={`inline-flex items-center bg-[#faf8f5] px-3.5 py-2.5 rounded-2xl shadow-xs border border-[#e2e8f0] w-fit ${className}`}>
        <picture>
          <source srcSet={CLINIC_INFO.assets.logoWebp} type="image/webp" />
          <img
            src={CLINIC_INFO.assets.logoWebp}
            alt="Andréia Francisca do Nascimento - Psicóloga Clínica"
            className="h-12 sm:h-13 w-auto object-contain"
            loading="lazy"
          />
        </picture>
      </div>
    );
  }

  // Header default variant: uses high-contrast trimmed WEBP format with dark, legible subtitle
  return (
    <div className={`flex items-center select-none ${className}`}>
      <picture>
        <source srcSet={CLINIC_INFO.assets.logoWebp} type="image/webp" />
        <img
          src={CLINIC_INFO.assets.logoWebp}
          alt="Andréia Francisca do Nascimento - Psicóloga Clínica"
          className="h-13 sm:h-15 md:h-16 w-auto max-w-[280px] sm:max-w-[360px] md:max-w-[400px] object-contain shrink-0"
          fetchPriority="high"
        />
      </picture>
    </div>
  );
};


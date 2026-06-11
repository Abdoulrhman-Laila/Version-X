'use client';

import Image from 'next/image';
import Link from 'next/link';

import { brand } from '@/data/navigation';
import { useTranslation } from '@/hooks/useTranslation';

interface BrandLogoProps {
  href?: string;
  onClick?: () => void;
  showTagline?: boolean;
  variant?: 'default' | 'footer';
  iconClassName?: string;
  nameClassName?: string;
  taglineClassName?: string;
  className?: string;
}

function BrandMark({
  showTagline,
  variant = 'default',
  iconClassName,
  nameClassName,
  taglineClassName,
  className,
}: Omit<BrandLogoProps, 'href' | 'onClick'>) {
  const { t } = useTranslation();
  const brandName = t('common.brandName');
  const parts = brandName.split(' ');
  const suffix = parts.length > 1 ? parts.pop()! : '';
  const prefix = parts.join(' ');

  const defaultIconClass =
    variant === 'footer'
      ? 'h-11 w-auto shrink-0 object-contain sm:h-12'
      : 'h-10 w-auto shrink-0 object-contain sm:h-11 mix-blend-multiply';

  const iconWrapperClass =
    variant === 'footer' ? 'inline-flex shrink-0' : 'inline-flex shrink-0 bg-background';

  return (
    <div className={`flex min-w-0 items-center gap-2.5 sm:gap-3 ${className ?? ''}`}>
      <span className={iconWrapperClass}>
        <Image
          src={brand.logoIconSrc}
          alt=""
          width={1018}
          height={669}
          priority
          unoptimized
          aria-hidden
          className={iconClassName ?? defaultIconClass}
        />
      </span>
      <div className="min-w-0 leading-tight">
        <p className={nameClassName ?? `flex items-baseline gap-0.5 font-bold tracking-tight ${variant === 'footer' ? 'text-lg' : 'text-lg sm:text-xl'}`}>
          {prefix && (
            <span className={variant === 'footer' ? 'site-footer__brand-prefix' : 'text-foreground'}>{prefix}</span>
          )}
          {suffix ? (
            <span className="gradient-text">{suffix}</span>
          ) : (
            <span className="gradient-text">{brandName}</span>
          )}
        </p>
        {showTagline && (
          <p className={taglineClassName ?? 'mt-0.5 text-[10px] tracking-wide text-muted sm:text-xs'}>
            {t('common.brandTagline')}
          </p>
        )}
      </div>
    </div>
  );
}

export default function BrandLogo({ href, onClick, ...markProps }: BrandLogoProps) {
  const { t } = useTranslation();
  const mark = <BrandMark {...markProps} />;

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        aria-label={t('common.brandLogoAlt')}
        className="group inline-flex transition-opacity hover:opacity-90"
      >
        {mark}
      </Link>
    );
  }

  return mark;
}

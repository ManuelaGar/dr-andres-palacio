interface Props {
  alt: string
  variant?: 'full' | 'face'
  sizes: string
  className?: string
  priority?: boolean
  objectPosition?: string
}

const WIDTHS = [480, 800, 1200]

function srcSet (variant: 'full' | 'face', ext: string): string {
  if (variant === 'face') return `/images/andres-palacio-face-128.${ext} 128w`
  return WIDTHS.map((w) => `/images/andres-palacio-${w}.${ext} ${w}w`).join(', ')
}

export function Portrait ({ alt, variant = 'full', sizes, className, priority = false, objectPosition = '50% 40%' }: Props): React.JSX.Element {
  const fallback = variant === 'face' ? '/images/andres-palacio-face-128.jpg' : '/images/andres-palacio-1200.jpg'
  const side = variant === 'face' ? 128 : 1200

  return (
    <picture>
      <source type='image/avif' srcSet={srcSet(variant, 'avif')} sizes={sizes} />
      <source type='image/webp' srcSet={srcSet(variant, 'webp')} sizes={sizes} />
      <img
        src={fallback}
        srcSet={srcSet(variant, 'jpg')}
        sizes={sizes}
        alt={alt}
        width={side}
        height={side}
        className={className}
        style={{ objectFit: 'cover', objectPosition }}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding='async'
      />
    </picture>
  )
}

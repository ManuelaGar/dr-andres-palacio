import type { ServiceIcon } from '@/content/types'

interface IconProps {
  size?: number
  color?: string
  strokeWidth?: number
}

export function Monogram ({ color = 'var(--green)', width = 46 }: { color?: string, width?: number }): React.JSX.Element {
  return (
    <svg viewBox='0 0 120 96' width={width} height={Math.round(width * 0.8)} fill='none' stroke={color} strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' style={{ flex: 'none', display: 'block' }}>
      <path d='M6 88 L44 8 L82 88' strokeWidth='5' />
      <path d='M22 62 H66' strokeWidth='4' />
      <path d='M60 88 V26 H84 a19 19 0 0 1 0 38 H60' strokeWidth='5' />
    </svg>
  )
}

export function WhatsAppIcon ({ size = 18, color = 'var(--gold)', strokeWidth = 1.7 }: IconProps): React.JSX.Element {
  return (
    <svg viewBox='0 0 24 24' width={size} height={size} fill='none' stroke={color} strokeWidth={strokeWidth} strokeLinecap='round' aria-hidden='true'>
      <path d='M4 20l1.5-4A8 8 0 1 1 12 20a8 8 0 0 1-4-1L4 20z' />
    </svg>
  )
}

export function MailIcon ({ size = 18, color = 'var(--green)' }: IconProps): React.JSX.Element {
  return (
    <svg viewBox='0 0 24 24' width={size} height={size} fill='none' stroke={color} strokeWidth='1.4' strokeLinecap='round' aria-hidden='true'>
      <rect x='3' y='5' width='18' height='14' rx='2' />
      <path d='M3.5 6l8.5 7 8.5-7' />
    </svg>
  )
}

export function PinIcon ({ size = 19 }: IconProps): React.JSX.Element {
  return (
    <svg viewBox='0 0 24 24' width={size} height={size} fill='none' stroke='var(--green)' strokeWidth='1.4' strokeLinecap='round' aria-hidden='true'>
      <path d='M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z' />
      <circle cx='12' cy='10' r='2.3' />
    </svg>
  )
}

export function ClockIcon ({ size = 19 }: IconProps): React.JSX.Element {
  return (
    <svg viewBox='0 0 24 24' width={size} height={size} fill='none' stroke='var(--green)' strokeWidth='1.4' strokeLinecap='round' aria-hidden='true'>
      <circle cx='12' cy='12' r='8.5' />
      <path d='M12 7.5V12l3 2' />
    </svg>
  )
}

export function GlobeIcon ({ size = 15 }: IconProps): React.JSX.Element {
  return (
    <svg viewBox='0 0 24 24' width={size} height={size} fill='none' stroke='var(--green)' strokeWidth='1.4' aria-hidden='true'>
      <circle cx='12' cy='12' r='8.5' />
      <path d='M3.5 12h17M12 3.5c3 3 3 14 0 17M12 3.5c-3 3-3 14 0 17' />
    </svg>
  )
}

export function XIcon ({ size = 14, color = 'var(--ink)' }: IconProps): React.JSX.Element {
  return (
    <svg viewBox='0 0 24 24' width={size} height={size} fill={color} aria-hidden='true'>
      <path d='M18.9 2H22l-6.8 7.8L22.8 22h-6.3l-4.6-6.2L6.2 22H3l7.3-8.3L2.6 2h6.4l4.3 5.8L18.9 2zm-1.1 18h1.7L7.3 3.8H5.5L17.8 20z' />
    </svg>
  )
}

export function SubstackIcon ({ size = 14, color = 'var(--ink)' }: IconProps): React.JSX.Element {
  return (
    <svg viewBox='0 0 24 24' width={size} height={size} fill={color} aria-hidden='true'>
      <path d='M4 3h16v2.6H4V3zm0 4.6h16V11H4V7.6zM4 13l8 4.4 8-4.4v8L12 17l-8 4v-8z' />
    </svg>
  )
}

const SERVICE_PATHS: Record<ServiceIcon, React.JSX.Element> = {
  drop: <><path d='M20 5c5 7 9 11 9 16a9 9 0 0 1-18 0c0-5 4-9 9-16z' /><path d='M20 27a6 6 0 0 1-6-6' /></>,
  scale: <><rect x='8' y='9' width='26' height='26' rx='2' /><path d='M14 22a6 6 0 0 1 12 0' /><path d='M20 22l4-5' /></>,
  thyroid: <><path d='M20 13c-2.2-2.4-5.4-2.9-7.3-1.2-2 1.8-1.9 6.2-.4 9.4 1.3 2.8 3.6 4.6 5.6 3.9 1.6-.6 2.1-2.8 2.1-5' /><path d='M20 13c2.2-2.4 5.4-2.9 7.3-1.2 2 1.8 1.9 6.2.4 9.4-1.3 2.8-3.6 4.6-5.6 3.9-1.6-.6-2.1-2.8-2.1-5' /><path d='M20 8.5V13' /></>,
  heart: <><path d='M20 30s-9-6-9-13a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 7-9 13-9 13z' /><path d='M11 20h5l2-3 3 6 2-3h6' /></>,
  pump: <><rect x='12' y='7' width='16' height='20' rx='2' /><path d='M16 12h8M16 16h8' /><path d='M20 27v3a3 3 0 0 0 3 3h5' /></>,
  bone: <><path d='M14 12a3 3 0 1 0-2 5v6a3 3 0 1 0 2 5' /><path d='M26 12a3 3 0 1 1 2 5v6a3 3 0 1 1-2 5' /><path d='M13 17h14M13 28h14' /></>,
  venus: <><circle cx='20' cy='16' r='7' /><path d='M20 23v11M15 29h10' /></>,
  mars: <><circle cx='17' cy='23' r='7' /><path d='M22 18l9-9M25 9h6v6' /></>
}

export function ServiceGlyph ({ name }: { name: ServiceIcon }): React.JSX.Element {
  return (
    <svg viewBox='0 0 40 40' width='26' height='26' fill='none' stroke='var(--green)' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
      {SERVICE_PATHS[name]}
    </svg>
  )
}

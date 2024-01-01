'use client'

import { usePathname } from 'next/navigation'
import { FC, ReactNode } from 'react'

import { cn } from '../utils'

type Props = {
  href: string
  children: ReactNode
}

export const NavigationLink: FC<Props> = ({ href, children }) => {
  const pathname = usePathname()

  return (
    <a
      className={cn(
        'hover:text-foreground/80 text-foreground/60 transition-colors',
        pathname === href && 'text-foreground',
      )}
      href={href}
    >
      {children}
    </a>
  )
}

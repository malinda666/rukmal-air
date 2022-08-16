import { FC, ReactNode } from 'react'

interface SectionProps {
  isLight?: boolean
  children: ReactNode
  height?: number
  cls?: string
}

const Section: FC<SectionProps> = ({
  isLight = false,
  children,
  height = 100,
  cls,
}) => {
  return (
    <section
      className={[
        'relative flex items-center justify-center',
        `h-[${height}vh]`,
        isLight ? 'bg-light' : 'bg-dark',
        cls,
      ].join(' ')}
    >
      {children}
    </section>
  )
}

export default Section

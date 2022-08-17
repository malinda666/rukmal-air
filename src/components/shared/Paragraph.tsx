import { FC, ReactNode } from 'react'

interface ParagraphProps {
  children: ReactNode
  cls?: string
}

const Paragraph: FC<ParagraphProps> = ({ children, cls }) => {
  return (
    <p
      className={[
        'text-base text-gray-400 px-4 max-w-md text-center',
        cls,
      ].join(' ')}
    >
      {children}
    </p>
  )
}

export default Paragraph

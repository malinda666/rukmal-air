import { FC, ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: string
  size?: string
}

const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
}) => {
  const getColors = () => {
    let _color = ''

    switch (variant) {
      case 'primary':
        _color = 'text-white bg-dark'
        break
      case 'secondary':
        _color = 'text-dark bg-light'
        break
      case 'third':
        _color = 'text-black bg-third'
        break
      case 'outlined':
        _color = 'text-dark bg-transparent border border-third'
        break

      default:
        _color = 'text-white bg-dark'
        break
    }

    return _color
  }

  const getSize = () => {
    let _size = ''

    switch (size) {
      case 'sm':
        _size = 'px-3 py-1 text-sm'
        break
      case 'md':
        _size = 'px-5 py-2 text-base'
        break
      case 'lg':
        _size = 'px-7 py-3 text-xl'
        break

      default:
        _size = 'px-5 py-2 text-base'
        break
    }

    return _size
  }
  return (
    <div
      className={[
        'relative rounded-full cursor-pointer capitalize hover:bg-black hover:text-third hover:border-transparent transition-all tr drop-shadow-md hover:drop-shadow-xl',
        getColors(),
        getSize(),
      ].join(' ')}
      aria-hidden
    >
      {children}
    </div>
  )
}

export default Button

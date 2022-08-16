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
        _color = 'text-white bg-dark after:bg-dark'
        break
      case 'secondary':
        _color = 'text-light bg-light after:bg-accent'
        break
      case 'third':
        _color = 'text-black bg-third after:bg-third'
        break
      case 'outlined':
        _color = 'text-black after:bg-light'
        break
      case 'cta':
        _color = 'text-third after:bg-black'
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
        _size = 'px-4 py-1 text-sm'
        break
      case 'md':
        _size = 'px-6 py-2 text-base'
        break
      case 'lg':
        _size = 'px-8 py-3 text-xl'
        break

      default:
        _size = 'px-6 py-2 text-base'
        break
    }

    return _size
  }
  return (
    <button
      className={[
        'button',
        getColors(),
        getSize(),
        variant === 'cta' ? 'cta-button' : '',
      ].join(' ')}
      aria-hidden
    >
      {children}
    </button>
  )
}

export default Button

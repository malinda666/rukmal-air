import { FC, MutableRefObject, useRef, useEffect } from 'react'
import { gsap } from 'gsap'

interface NavItemProps {
  navItem: any
  delay: number
  isOpen: boolean
}

const NavItem: FC<NavItemProps> = ({ navItem, delay, isOpen }) => {
  const navItemRef = useRef() as MutableRefObject<HTMLLIElement>

  useEffect(() => {
    const charArray = gsap.utils.toArray(
      navItemRef.current.querySelectorAll('span')
    )

    if (isOpen) {
      const tl = gsap.timeline()

      tl.fromTo(
        charArray,
        {
          y: '105%',
          opacity: 0,
        },
        {
          y: '0%',
          opacity: 1,
          ease: 'expo.out',
          duration: 1.25,
          stagger: { amount: 0.25, from: 'start' },
          delay: delay ?? 0,
        },
        0
      )
    } else {
      const tl = gsap.timeline()

      tl.fromTo(
        charArray,
        {
          y: '0%',
          opacity: 1,
        },
        {
          y: '-105%',
          opacity: 0,
          ease: 'expo.out',
          stagger: { amount: 0.125, from: 'start' },
          duration: 0.75,
        },
        0
      )
    }

    // isOpen ? tl.play() : tl.reverse()
  }, [delay, isOpen])

  return (
    <li
      key={navItem.title}
      className='text-white opacity-60 hover:opacity-100 tr transition-opacity font-title text-xl lg:text-7xl font-light inline-block p-2 md:p-8 cursor-pointer overflow-hidden uppercase'
      ref={navItemRef}
    >
      <span className='inline-block whitespace-pre'></span>
      <span className='inline-block whitespace-pre'>
        &#10035; {navItem.title}
      </span>
    </li>
  )
}

export default NavItem

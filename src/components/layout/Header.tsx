// eslint-disable-next-line no-unused-vars
import Image from 'next/image'
import { FC, MutableRefObject, useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap/dist/gsap'

import { MenuIcon, CloseIcon } from '../shared/MenuIcons'

import { navData } from '@/data'

const Header: FC = () => {
  const headerWrapper = useRef() as MutableRefObject<HTMLHeadingElement>
  const menuTl = useRef() as any
  const menuScrollTL = useRef() as any

  const [isMenuOpen, setMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    const trigger = gsap.utils.selector('#js--scroll-parent')('section')[0]
    const navbar = gsap.utils.selector(headerWrapper.current)('nav#js--navbar')
    const menubutton = gsap.utils.selector(headerWrapper.current)(
      '#js--menu-button'
    )
    gsap.set(menubutton, {
      opacity: 0,
      pointerEvents: 'none',
      visibility: 'hidden',
    })

    menuScrollTL.current = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: 'center 40%',
        toggleActions: 'play none none reverse',
      },
    })

    menuScrollTL.current
      .to(
        navbar,
        {
          opacity: 0,
          ease: 'none',
          duration: 0.1,
          pointerEvents: 'none',
          visibility: 'hidden',

          // lazy: false,
        },
        0
      )
      .to(
        menubutton,
        {
          opacity: 1,
          ease: 'none',
          duration: 0.1,
          pointerEvents: 'all',
          visibility: 'visible',
        },
        0.1
      )
  }, [])

  useEffect(() => {
    const openmenubutton =
      gsap.utils.selector('#js--menu-button')('#js--menu-open')
    // const openmenubuttonsvg = gsap.utils.selector('#js--menu-button')(
    //   '#js--menu-open > svg > line'
    // )
    const closemenubutton =
      gsap.utils.selector('#js--menu-button')('#js--menu-close')
    // const closemenubuttonsvg = gsap.utils.selector('#js--menu-button')(
    //   '#js--menu-close > svg > line'
    // )

    gsap.set(closemenubutton, {
      opacity: 0,
    })
    // gsap.set(closemenubuttonsvg, {
    //   strokeDashoffset: 0.001,
    //   strokeDasharray: '0px, 999999px',
    //   opacity: 0,
    // })
    menuTl.current = gsap.timeline({
      paused: true,
      defaults: { ease: 'none', duration: 0.3 },
      onStart: () => {},
    })

    menuTl.current
      .to(
        openmenubutton,
        {
          yPercent: 30,
          opacity: 0,
        },
        0
      )
      .fromTo(
        closemenubutton,
        { yPercent: -30, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
        },
        0
      )

    // .to(
    //   openmenubuttonsvg,
    //   {
    //     duration: 1.25,

    //     strokeDashoffset: 0.001,
    //     strokeDasharray: '0px, 999999px',
    //     opacity: 0,
    //   },
    //   0
    // )
    // .to(openmenubutton, { opacity: 0 }, 0.2)
    // .to(
    //   closemenubuttonsvg,
    //   {
    //     duration: 1.25,

    //     strokeDashoffset: 0,
    //     strokeDasharray: 'none',
    //     opacity: 1,
    //   },
    //   0.2
    // )

    // .to(closemenubutton, { opacity: 1 }, 0.3)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) {
      menuTl.current.reverse()
    } else {
      menuTl.current.play()
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header
        className='fixed top-0 left-0 w-full px-16 py-6 z-[99] flex items-center justify-between'
        ref={headerWrapper}
      >
        <div className='relative w-auto'>
          {/* <Image src='/assets/logo.png' alt='Logo' layout='fill' /> */}
          <span className='text-third font-semibold font-title text-lg'>
            Rukmal Air Tours.
          </span>
        </div>
        <div className='relative flex-1 flex items-center justify-end'>
          <nav id='js--navbar' className='absolute'>
            <ul>
              {navData.map((item) =>
                item.title.toLowerCase() === 'contact' ? (
                  <span
                    className='text-third mx-2 font-title text-sm'
                    key={item.title}
                  >
                    {item.title} Us
                  </span>
                ) : (
                  <span
                    className='text-light mx-2 font-title text-sm'
                    key={item.title}
                  >
                    {item.title}
                  </span>
                )
              )}
            </ul>
          </nav>
          <button
            type='button'
            id='js--menu-button'
            className='absolute text-light text-sm flex items-center justify-center w-[6rem]'
            onClick={toggleMenu}
          >
            <div className='relative w-full p-4 flex items-center'>
              <span
                className='absolute flex w-full items-center justify-end'
                id='js--menu-open'
              >
                Menu <MenuIcon />
              </span>
              <span
                className='absolute flex w-full items-center justify-end'
                id='js--menu-close'
              >
                Close <CloseIcon />
              </span>
            </div>

            {/* <div className='relative flex items-center justify-center px-4'>
              
             
            </div> */}
          </button>
        </div>
      </header>
      <nav id='js--menu' className='absolute'>
        <ul>
          {navData.map((item) =>
            item.title.toLowerCase() === 'contact' ? (
              <span className='text-accent mx-2 font-title' key={item.title}>
                {item.title} Us
              </span>
            ) : (
              <span className='text-light mx-2 font-title' key={item.title}>
                {item.title}
              </span>
            )
          )}
        </ul>
      </nav>
      <div className='fixed inset-0 z[98] bg-black' id='js--overlay'></div>
    </>
  )
}

export default Header

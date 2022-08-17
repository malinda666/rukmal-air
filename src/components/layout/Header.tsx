// eslint-disable-next-line no-unused-vars
import Image from 'next/image'
import { FC, MutableRefObject, useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap/dist/gsap'

import { MenuIcon, CloseIcon } from '../shared/MenuIcons'

import { navData, socialData } from '@/data'

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

    const menuoverlay = gsap.utils.selector(document)('#js--overlay')
    const menuitems = gsap.utils.selector('#js--menu')('#js--menu-item')
    const menufooter = gsap.utils.selector('#js--overlay')('#js--menu-footer')

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
      .fromTo(
        openmenubutton,
        { yPercent: 0, opacity: 1 },
        {
          yPercent: 30,
          opacity: 0,
        },
        0
      )
      .fromTo(
        menuoverlay,
        { yPercent: 150, opacity: 1, rotate: 4, scale: 1.7 },
        {
          yPercent: 0,
          opacity: 1,
          rotate: 0,
          scale: 1,
          duration: 1.25,
          ease: 'expo.inOut',
        },
        0
      )
      .fromTo(
        menuitems,
        { yPercent: 101 },
        {
          yPercent: 0,
          duration: 1.25,
          ease: 'expo.inOut',
        },
        0.3
      )
      .fromTo(
        menufooter,
        { yPercent: 101, opacity: 0 },
        {
          yPercent: 0,
          duration: 1.25,
          opacity: 1,
          ease: 'expo.out',
        },
        0.45
      )
      .fromTo(
        closemenubutton,
        { yPercent: -30, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
        },
        0.3
      )
      .set(document.body, { overflow: 'hidden' }, 0.2)
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
        className='fixed top-0 left-0 w-full px-16 py-6 z-[99] flex items-center justify-between mix-blend-exclusion'
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
                    className='text-third mx-2 font-title text-base navbar-item'
                    key={item.title}
                  >
                    {item.title} Us
                  </span>
                ) : (
                  <span
                    className='text-light mx-2 font-title text-base navbar-item'
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
      <div
        className='fixed inset-0 h-full w-full z-[98] bg-black flex items-center justify-center'
        id='js--overlay'
      >
        <nav id='js--menu' className='absolute w-full'>
          <ul className='flex flex-col w-full items-center justify-center'>
            {navData.map((item) => (
              <div
                className='relative leading-[1.1] mb-4 overflow-hidden'
                key={item.title}
              >
                <span
                  className='text-light mx-2 font-title text-[5vw] navbar-item'
                  id='js--menu-item'
                >
                  {item.title}
                </span>
              </div>
            ))}
          </ul>
        </nav>
        <div
          className='absolute bottom-0 left-0 py-16 w-full flex items-center justify-center'
          id='js--menu-footer'
        >
          {socialData.map((item) => (
            <a href='#' key={item.title} className='m-2'>
              <span className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
                &#10035; {item.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default Header

import { FC, useState, useEffect, useRef, MutableRefObject } from 'react'
import gsap from 'gsap'

import { navData } from '@/data'

import Button from '../shared/Button'
import NavItem from './NavItem'
import Image from 'next/image'

import Logo from '/public/assets/logo.png'

const NavBar: FC = () => {
  const menuWrapper = useRef() as MutableRefObject<HTMLDivElement>
  const menuFooter = useRef() as MutableRefObject<HTMLDivElement>

  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    if (menuOpen) {
      console.log('open')
      gsap
        .timeline()
        .to(
          menuWrapper.current,
          {
            opacity: 1,
            duration: 0.5,
            pointerEvents: 'all',
            ease: 'expo.out',
            zIndex: 98,
          },
          0
        )
        .fromTo(
          menuFooter.current,
          { y: '10%', opacity: 0 },
          {
            y: '0%',
            opacity: 1,
            duration: 1.5,
            ease: 'power3.out',
          },
          1
        )
    } else {
      console.log('close')
      gsap
        .timeline()
        .to(menuWrapper.current, {
          opacity: 0,
          duration: 0.75,
          pointerEvents: 'none',
          ease: 'expo.out',
          delay: 0.3,
          onComplete: () => {
            gsap.to(menuWrapper.current, {
              duration: 0.5,
              zIndex: -1,
            })
          },
        })
        .to(
          menuFooter.current,
          {
            opacity: 0,
            duration: 0.5,
            ease: 'expo.out',
          },
          0.2
        )
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={[
          'fixed flex items-center justify-between w-full px-16 py-6 mirror  z-[99]',
          menuOpen ? 'bg-black' : 'bg-dark',
        ].join(' ')}
      >
        <div className='flex items-center space-x-4'>
          <span className='relative flex items-center mb-4 w-8 lg:w-12 h-8 lg:h-12 sm:mb-0 bg-accent'>
            <Image
              src={Logo}
              width={150}
              height={150}
              alt='Logo'
              className='object-center object-cover'
            />
          </span>
          <span className='relative text-light font-semibold font-title text-lg'>
            Rukmal Air Tours.
          </span>
        </div>
        <div className='flex'>
          <Button variant={menuOpen ? 'primary' : 'third'}>
            <a href='tel:0770473278'>call now</a>
          </Button>
          <div className='relative w-[24px] lg:w-[4vw] transition-transform origin-left tr hover:scale-x-150 scale-100 mx-auto flex items-center justify-end ml-4'>
            <div
              className='relative flex flex-col items-center justify-center w-full lg:p-2 cursor-pointer'
              aria-hidden
              onClick={() => toggleMenu()}
            >
              <span
                className={[
                  'w-full h-[1px] bg-white transition-transform tr',
                  menuOpen ? 'translate-y-[2.5px]' : '',
                ].join(' ')}
              />
              <span
                className={[
                  'w-full h-[1px] bg-white transition-transform tr mt-1',
                  menuOpen ? '-translate-y-[2.5px]' : '',
                ].join(' ')}
              />
            </div>
          </div>
        </div>
      </header>
      <nav
        className={[
          'fixed top-0 left-0 h-screen bg-black tr transition-opacity flex flex-col items-center justify-center',
          // menuOpen
          //   ? 'opacity-100 pointer-events-auto z-[9998]'
          //   : 'opacity-0 pointer-events-none z-[-1]',
        ].join(' ')}
        ref={menuWrapper}
      >
        <div className='relative w-5/6 p-4'>
          <ul className='relative'>
            {navData.map((navItem, i) => (
              <NavItem
                key={navItem.title}
                navItem={navItem}
                delay={i * 0.125}
                isOpen={menuOpen}
              />
            ))}
          </ul>
        </div>

        <div
          ref={menuFooter}
          className='absolute bottom-0 p-4 w-full rounded-lg shadow md:px-6 md:py-8'
        >
          <div className='sm:flex sm:items-center sm:justify-between'>
            <a
              href=''
              className='flex items-center mb-4 w-8 lg:w-16 h-8 lg:h-16 sm:mb-0 bg-third'
            >
              <Image src={Logo} width={150} height={150} alt='Flowbite Logo' />
            </a>
            <ul className='flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400'>
              <li>
                <a href='#' className='mr-4 hover:underline md:mr-6 '>
                  About
                </a>
              </li>
              <li>
                <a href='#' className='mr-4 hover:underline md:mr-6'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='#' className='mr-4 hover:underline md:mr-6 '>
                  Licensing
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
          <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
            © 2022{' '}
            <a href='' className='hover:underline'>
              Rukmal Air Tours™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </nav>
    </>
  )
}

export default NavBar

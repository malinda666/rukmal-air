import { FC, MutableRefObject, ReactNode, useRef, useEffect } from 'react'
import Head from 'next/head'
import gsap from 'gsap'

import useWindowSize from '@/hooks/useWindowSize'
import { lerp } from '@/utils'

import Header from './Header'

interface LayoutProps {
  children: ReactNode
}
const PageLayout: FC<LayoutProps> = ({ children }) => {
  const windowSize = useWindowSize()
  const scrollingContainerRef = useRef() as MutableRefObject<HTMLDivElement>

  // 3.
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  }

  // 4.
  useEffect(() => {
    setBodyHeight()
  }, [windowSize?.height])

  const setBodyHeight = () => {
    gsap.set(document.body, {
      height: scrollingContainerRef.current.getBoundingClientRect().height,
    })
  }

  // 5.
  useEffect(() => {
    requestAnimationFrame(() => smoothScrollingHandler())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const smoothScrollingHandler = () => {
    data.current = window.scrollY
    data.previous = lerp(data.current, data.previous, data.ease)
    data.rounded = Math.round(data.previous * 100) / 100

    if (scrollingContainerRef.current) {
      gsap.to(scrollingContainerRef.current, {
        y: data.previous * -1,
        ease: 'none',
      })
    }

    // Recursive call
    requestAnimationFrame(() => smoothScrollingHandler())
  }

  return (
    <>
      <Head>
        <title>Rukmal Air Tours - Redesign</title>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        <link rel='manifest' href='/site.webmanifest'></link>
      </Head>
      <Header />
      <div
        className='w-full min-h-screen overflow-x-hidden bg-dark text-white'
        id='js--scroll-parent'
      >
        <main className='w-full mx-auto' ref={scrollingContainerRef}>
          {children}
        </main>
      </div>
    </>
  )
}

export default PageLayout

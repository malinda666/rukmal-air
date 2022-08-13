import { FC, ReactNode, Ref } from 'react'
import Head from 'next/head'

import Header from './Header'

interface LayoutProps {
  children: ReactNode
  layoutRef: Ref<HTMLDivElement>
}
const PageLayout: FC<LayoutProps> = ({ children, layoutRef }) => {
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
      <div className='w-full min-h-screen overflow-x-hidden bg-dark text-white'>
        <main className='w-full mx-auto' data-scroll-container ref={layoutRef}>
          {children}
        </main>
      </div>
    </>
  )
}

export default PageLayout

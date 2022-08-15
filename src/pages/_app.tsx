import type { AppProps } from 'next/app'
import { gsap } from 'gsap/dist/gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

import { Layout } from '@/components/layout'

import 'locomotive-scroll/dist/locomotive-scroll.css'
import '@/styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  gsap.registerPlugin(ScrollTrigger)
  // const { asPath } = useRouter()
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

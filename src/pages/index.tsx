import type { NextPage } from 'next'

import {
  HeroSection,
  AboutSection,
  ServicesSection,
  GallerySection,
} from '@/containers'

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
    </>
  )
}

export default Home

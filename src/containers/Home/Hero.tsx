import { FC } from 'react'
import Image from 'next/image'

import { Title } from '@/components'

const Hero: FC = () => {
  return (
    <section
      className='relative h-[100vh] flex items-center justify-center'
      data-scroll-section
    >
      <div className='absolute inset-0 hero-grid'>
        <div
          className='relative hero-left  w-full h-full'
          data-scroll
          data-scroll-speed='-2'
          // data-scroll-direction='horizontal'
        >
          <Image
            src='/assets/gallery-5.jpg'
            layout='fill'
            alt='hero-left'
            className='relative object-cover object-center'
          />
        </div>
        <div className='relative hero-video'>
          <video
            playsInline
            loop
            muted
            disablePictureInPicture
            autoPlay
            className='video'
          >
            <source
              src='/assets/bg-video.mp4'
              type='video/mp4'
              data-v-2a4a3697=''
            />
          </video>
        </div>
        <div
          className='relative hero-right w-full h-full'
          data-scroll
          data-scroll-speed='3'
        >
          <Image
            src='/assets/cockpit.jpg'
            layout='fill'
            alt='hero-left'
            className='relative object-cover object-center'
          />
        </div>
      </div>
      <div className='relative' data-scroll data-scroll-speed='-5'>
        <Title content='Rukmal' size='lg' />
        <Title content='Air Tours' size='lg' />
      </div>
    </section>
  )
}

export default Hero

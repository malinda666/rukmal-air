import { FC } from 'react'
import Image from 'next/image'

import { Title } from '@/components'

const Hero: FC = () => {
  return (
    <section className='relative h-[100vh] flex items-center justify-center'>
      <div className='absolute inset-0 hero-grid'>
        <div className='relative hero-left  w-full h-full'>
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
        <div className='relative hero-right w-full h-full'>
          <Image
            src='/assets/cockpit.jpg'
            layout='fill'
            alt='hero-left'
            className='relative object-cover object-center'
          />
        </div>
        <p className='text-base text-gray-400 px-4 max-w-md h-full hero-intro pt-24'>
          Feel the wind in your hair and the sun on your face as you experience
          the thrill of flying in a helicopter. <br /> A once-in-a-lifetime
          opportunity to experience the breathtaking beauty of Sri Lanka.
        </p>
      </div>
      <div className='relative'>
        <Title content='Rukmal' size='lg' />
        <Title content='Air Tours' size='lg' />
      </div>
    </section>
  )
}

export default Hero

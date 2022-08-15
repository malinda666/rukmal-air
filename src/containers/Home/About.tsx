import { FC } from 'react'
import Image from 'next/image'

import { Button, Title } from '@/components'

const About: FC = () => {
  return (
    <section className='relative bg-light h-[150vh] mt-64'>
      <div className='relative w-full flex flex-col items-center justify-center'>
        <div className='relative grid grid-rows-4 gap-2'>
          <Title
            content={`Let's get you`}
            cls='text-dark leading-tight'
            size='md'
          />
          <div className='relative row-span-2'>
            <Image
              src='/assets/cockpit.jpg'
              layout='fill'
              alt='hero-left'
              className='relative object-cover object-center'
            />
          </div>
          <Title
            content={`In the air`}
            cls='text-dark italic leading-tight'
            size='md'
          />
        </div>
        <div className='flex items-center justify-between w-full px-16'></div>
        <p className='mr-5 w-2/3 text-base text-gray-700 sm:text-lg text-center'>
          Feel the wind in your hair and the sun on your face as you experience
          the thrill of flying in a helicopter. <br /> A once-in-a-lifetime
          opportunity to experience the breathtaking beauty of Sri Lanka.
        </p>
        <div className='justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 pt-8'>
          <Button variant='third' size='lg'>
            VIP Booking
          </Button>
          <Button variant='outlined' size='lg'>
            <a href='tel:0770473278'>Medical Booking</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default About

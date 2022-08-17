import { FC } from 'react'
import Image from 'next/image'

import { Button, Title, Section, Paragraph } from '@/components'

const About: FC = () => {
  return (
    <Section isLight size='xl' cls='mt-64'>
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
        <Paragraph cls='mt-8'>
          Feel the wind in your hair and the sun on your face as you experience
          the thrill of flying in a helicopter. <br /> A once-in-a-lifetime
          opportunity to experience the breathtaking beauty of Sri Lanka.
        </Paragraph>
        <div className='justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 pt-8'>
          <Button variant='primary' size='md'>
            VIP Booking
          </Button>
          <Button variant='secondary' size='md'>
            <a href='tel:0770473278'>Medical Booking</a>
          </Button>
        </div>
      </div>
    </Section>
  )
}

export default About

import { FC, useRef, useEffect, MutableRefObject } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

import { Title, Button, Section, Paragraph } from '@/components'

const Hero: FC = () => {
  const titleContainerRef = useRef() as MutableRefObject<HTMLDivElement>
  const imageLeftRef = useRef() as MutableRefObject<HTMLDivElement>
  const imageRightRef = useRef() as MutableRefObject<HTMLDivElement>
  const videoRef = useRef() as MutableRefObject<HTMLDivElement>
  const introRef = useRef() as MutableRefObject<HTMLDivElement>

  const tl = useRef() as any

  useEffect(() => {
    tl.current = gsap.timeline({
      // ease: 'none',
      scrollTrigger: {
        trigger: titleContainerRef.current,
        start: 'center center',
        // end: '+=500px',
        // toggleActions: 'play none none reverse',
        scrub: 1,
        pin: false,
        // markers: true,
      },
    })

    tl.current
      .to(imageLeftRef.current, { yPercent: -40, duration: 0.7 }, 0)
      .to(imageRightRef.current, { yPercent: -80, duration: 0.7 }, 0)
      .to(titleContainerRef.current, { yPercent: 5, duration: 1 }, 0)
      .to(videoRef.current, { yPercent: -10, duration: 1 }, 0)
      .to(introRef.current, { yPercent: 15, duration: 1 }, 0)
  }, [])

  return (
    <Section>
      <div className='absolute inset-0 hero-grid'>
        <div className='absolute hero-left  w-full h-full' ref={imageLeftRef}>
          <Image
            src='/assets/gallery-5.jpg'
            layout='fill'
            alt='hero-left'
            className='relative object-cover object-center'
          />
        </div>
        <div className='absolute hero-video' ref={videoRef}>
          <video
            playsInline
            loop
            muted
            disablePictureInPicture
            autoPlay
            className='video'
          >
            <source src='/assets/bg-video.mp4' type='video/mp4' />
          </video>
        </div>
        <div className='absolute hero-right w-full h-full' ref={imageRightRef}>
          <Image
            src='/assets/cockpit.jpg'
            layout='fill'
            alt='hero-left'
            className='relative object-cover object-center'
          />
        </div>
        <div
          className='absolute hero-intro h-full flex flex-col items-center justify-end'
          ref={introRef}
        >
          <Paragraph cls='mb-8'>
            Feel the wind in your hair and the sun on your face as you
            experience the thrill of flying in a helicopter. <br /> A
            once-in-a-lifetime opportunity to experience the breathtaking beauty
            of Sri Lanka.
          </Paragraph>
          <Button variant='cta'>
            <a href='tel:0770473278' target='_self'>
              <span className=''>Call Now</span>
            </a>
          </Button>
        </div>
      </div>
      <div
        className='relative  mix-blend-exclusion hero-title'
        ref={titleContainerRef}
      >
        <Title content='Rukmal' size='lg' type='header' />
        <Title content='Air Tours' size='lg' type='header' cls='italic pr-8' />
      </div>
    </Section>
  )
}

export default Hero

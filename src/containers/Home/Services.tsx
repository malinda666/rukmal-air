import { FC, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { Section } from '@/components'

gsap.registerPlugin(ScrollTrigger)
const Services: FC = () => {
  useEffect(() => {
    const pinel = gsap.utils.selector(document)('#js--pin-ref')
    gsap.to(pinel, {
      duration: 0.5,
      ease: 'power1.out',
      delay: 1,
      x: -100,
      scrollTrigger: {
        trigger: pinel,
        start: 'top 85%',
        pin: false,
        scrub: 1,
      },
    })
  }, [])

  return (
    <Section>
      <div className='absolute  h-[10vh] pb-[0vh] bg-white' id='js--pin-ref'>
        services section
      </div>
    </Section>
  )
}

export default Services

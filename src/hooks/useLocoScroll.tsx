import { MutableRefObject, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const useLocoScrol = (
  start: boolean,
  ref: MutableRefObject<HTMLDivElement>
) => {
  useEffect(() => {
    if (!start) return
    let locoScroll: any = null

    const scrollEl = ref.current

    // locoScroll = new LocomotiveScroll({
    //   el: scrollEl,
    //   smooth: true,
    //   multiplier: 1,
    //   //when the element gets into the viewport:
    //   class: 'is-reveal',
    // })
    // @ts-ignore
    import('locomotive-scroll').then((locomotiveModule) => {
      locoScroll = new locomotiveModule.default({
        el: scrollEl,
        smooth: true,
        smoothMobile: false,
        resetNativeScroll: true,
      })
    })
    locoScroll?.on('scroll', () => {
      ScrollTrigger.update()
    })

    console.log(locoScroll)

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        if (locoScroll) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y
        }
        return null
      },
      scrollLeft(value) {
        if (locoScroll) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.x
        }
        return null
      },
    })

    const lsUpdate = () => {
      if (locoScroll) {
        locoScroll.update()
      }
    }

    ScrollTrigger.addEventListener('refresh', lsUpdate)
    ScrollTrigger.refresh()

    return () => {
      if (locoScroll) {
        ScrollTrigger.removeEventListener('refresh', lsUpdate)
        locoScroll.destroy()
        locoScroll = null
      }
    }
  }, [ref, start])
}

export default useLocoScrol

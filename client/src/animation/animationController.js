import {gsap} from 'gsap'

export function createTimeline() {
   return gsap.timeline({
      // delay: 0.2,
      paused: false, // default is false
      repeat: 1, // number of repeats (-1 for infinite)
      // repeatDelay: 1, // seconds between repeats
      // repeatRefresh: true, // invalidates on each repeat
      yoyo: false, // if true > A-B-B-A, if false > A-B-A-B
      defaults: {
         // children inherit these defaults
         //  duration: 0.6
      },
      smoothChildTiming: true,
      autoRemoveChildren: true,
      onComplete: () => {
         this.kill()
      }
      // other callbacks:
      // onStart, onUpdate, onRepeat, onReverseComplete
      // Each callback has a params property as well
      // i.e. onUpdateParams (Array)
   })
}

/* @params tl and elements - Take timeline object and array of element selectors in the order you want to animate them. 
Please note: this is basically boilerplate to reuse in future applications and keep it modular inside React. You have to tailor it to your specific use case and add any necessary gsap code here.*/
export function editIntro(tl, elements) {
   tl.from(elements[0], {ease: 'bounce.out', opacity: 0, y: '-100%', delay: 0.6, duration: 0.4})
      .from(elements[1], {
         ease: 'bounce.out',
         rotate: '420deg',
         y: '-100%',
         opacity: 0,
         delay: 0.4,
         duration: 0.8
      })
      .from(elements[2], {
         ease: 'elastic.inOut',
         opacity: 0,
         x: '-500%',
         delay: 0.3,
         duration: 1
      })
      .from(elements[3], {opacity: 0, delay: 0.5, duration: 0.5, y: '1000%'})
      .from(elements[2], {filter: 'hue-rotate(300deg)', duration: 2.5, repeat: -1, yoyo: true})
}

export function editCustomizePage(element) {
   gsap.from(element, {ease: 'elastic.out', opacity: 0, x: '-50%', duration: 1.2})
}
export function editSubmitArrow(element) {
   gsap.from(element, {
      ease: 'elastic.out',
      // x: '-50%',
      // rotateX: '720deg',
      rotateX: '520deg',
      // rotateZ: '720deg',
      duration: 1.5
   })
}
export function editGoButton(element) {
   gsap.from(element, {
      ease: 'power2.in',
      backgroundColor: 'white',
      repeat: -1,
      // rotateX: '520deg',
      // rotateY: '520deg',
      // rotateZ: '720deg',
      duration: 2
   })
}
export function editMiniViewOpen(element) {
   gsap.from(element, {
      ease: 'power2.out',
      duration: 1,
      scaleY: 1.5,
      skewX: 50
   })
}
export function newFlash(element) {
   gsap.from(element, {color: 'red', opacity: 1, duration: 2, repeat: 5, yoyo: true})
}

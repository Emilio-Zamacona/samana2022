/* global gsap */
export default {
  methods: {
    appearBottom (isVisible, entry, className, time) {
      if (isVisible) {
        gsap.fromTo(className, {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: time
        })
      }
    },
    appearTop (isVisible, entry, className, time) {
      if (isVisible) {
        gsap.fromTo(className, {
          opacity: 0,
          y: -50,
          scale: 1.1
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: time
        })
      }
    },
    appearLeft (isVisible, entry, className, time) {
      if (isVisible) {
        gsap.fromTo(className, {
          opacity: 0,
          x: -200
        },
        {
          opacity: 1,
          x: 0,
          duration: time
        })
      }
    },
    appearRight (isVisible, entry, className, time) {
      if (isVisible) {
        gsap.fromTo(className, {
          opacity: 0,
          x: 200
        },
        {
          opacity: 1,
          x: 0,
          duration: time
        })
      }
    }
  }

}

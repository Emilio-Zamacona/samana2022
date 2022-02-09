
<template>
  <div class="info --flex-col">
    <div class="info__divisor --line1"></div>

    <div
      v-observe-visibility="{
        callback: animateTitle,
        once:true,
        intersection: {
          rootMargin:'0px 0px -320px 0px',
          threshold: 0.1
        },
      }"
      class="info__title --title"
    >
      Cósmetica&#160;
      <div id="natural" ref="natural" class="info__title__word">
        Natural,&#160;
        <div id="naturalCircle" class="circle"></div>
      </div><div id="vegana" ref="vegana" class="info__title__word">
        Vegana&#160;
        <div id="veganaCircle" class="circle"></div>
      </div>
      <div> y&#160; </div>
      <div id="ecologica" ref="ecologica" class="info__title__word">
        Ecológica&#160;
        <div id="ecologicaCircle" class="circle"></div>
      </div>
    </div>
    <div class="info__divisor --line2"></div>
    <div class="info__cards">
      <CardInfo v-for="card in cards" :key="card.name" :info="card" />
    </div>
  </div>
</template>

<script>

/* global gsap */
export default {
  data () {
    return {
      cards: [
        {
          name: 'Natural',
          img: [require('../assets/img/sulfato.png'), require('../assets/img/paraben.png'), require('../assets/img/petro.png')],
          description: 'Utilizamos ingredientes naturales, evitando derivados del petroleras como parabenos, petrolatos, detergentes, siliconas; tensioactivos sintéticos, fragancias, y otros químicos tóxicos para tu organismo y el medio ambiente. Nuestra cosmética es alimento para la piel y el cabello. '
        },
        {
          name: 'Vegana',
          img: [require('../assets/img/leaf.png'), require('../assets/img/cruelty.png')],
          description: 'Esto quiere decir que no utilizamos ingredientes de origen animal (o de insectos como cera de abejas o carmín, etc.) ni derivados. No testeamos en animales. Utilizamos ingredientes que no dañen la fauna una vez que llegan a la tierra o el agua. '
        },

        {
          name: 'Ecológica',
          img: [require('../assets/img/plastic.png'), require('../assets/img/recycle.png')],
          description: 'No utilizamos ingredientes sintéticos que contaminan los suelos y el agua, trayendo consecuencias sumamente negativas para la biodiversidad. Evitamos el uso de envases plásticos, los cosméticos sólidos cuentan con packaging biodegradable. Los cosméticos no sólidos tienen envases de vidrio recargables, reutilizables o reciclables.'
        }
      ]
    }
  },
  mounted () {
    document.addEventListener('scroll', function () {
      const circles = document.getElementsByClassName('info__title')
      const lines = document.getElementsByClassName('info__divisor')
      const arr = [...circles].concat([...lines])
      const para = 0.15
      arr.forEach((item) => {
        const offsetY = item.getBoundingClientRect().top
        console.log(offsetY)
        console.log('scroll: ' + window.scrollY)

        if (item.classList.contains('info__title')) {
          item.style.top = -(offsetY * para) + 'px'
        } else {
          item.style.top = -(offsetY * para * 1.5) + 'px'
        }
      })
    })
  },

  methods: {
    animateTitle (isVisible) {
      if (isVisible) {
        const words = gsap.timeline()
        const circles = gsap.timeline()
        words.from('.info__title__word', {
          duration: 1,
          scale: 1.2,
          color: '#eee',
          stagger: 0.75
        })
        words.to('.--line1', {
          duration: 0.75,
          width: window.innerWidth * 0.85
        })
        words.to('.--line2', {
          duration: 0.75,
          width: window.innerWidth * 0.75
        })
        circles.fromTo('.circle', {
          width: 0,
          height: 0,
          background: '#fbfbf7',
          yoyo: true
        },
        {
          duration: 1,
          width: 80,
          height: 80,
          opacity: 0.4,
          background: '#808F57',
          ease: 'back',
          stagger: 0.75
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.circle{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 0px;
  height: 0px;
  border-radius: 50%;
  z-index: -1;
}
.test{
  position: relative;
  top: 0;
}
.--line1{
  width: 0;

  &::before{
    content: "";
    position: absolute;
    top: -10px;
    left: -40px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: $color3;
  }
}
.--line2{width: 0;}
.info{
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  &__title{
    display: flex;
    position: relative;
    &__word{
      position: relative;
    }
  }
  &__divisor{
    background: $color3;
    height: 2px;
    margin: 1rem;
    position: relative;
  }
  &__cards{
    display: flex;
    @include respond(tablet){
      flex-direction: column;
    }
  }
}
</style>

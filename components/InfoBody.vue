
<template>
  <div class="info main-container">
    <div class="--flex" style="width: 100%;">
      <div class="circle-1"></div>
      <div class="divider"></div>
    </div>

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
      <div class="--flex">
        <div>
          Cosmética&#160;
        </div>
        <div id="natural" ref="natural" class="info__title__word">
          natural,&#160;
          <div id="naturalCircle" class="circle"></div>
        </div>
      </div>
      <div class="--flex">
        <div id="vegana" ref="vegana" class="info__title__word --flex">
          vegana&#160;y&#160;
          <div id="veganaCircle" class="circle"></div>
        </div>
        <div id="ecologica" ref="ecologica" class="info__title__word">
          ecológica
          <div id="ecologicaCircle" class="circle"></div>
        </div>
      </div>
    </div>
    <div class="--flex" style="width: 90%;">
      <div class="divider"></div>
      <div class="circle-1"></div>
    </div>

    <div class="info__cards">
      <img class="leaf-left" src="../assets/img/leaves6.png" alt="">
      <img class="leaf-right" src="../assets/img/leaves4.png" alt="">
      <CardInfo v-for="card in cards" :key="card.name" :info="card" />
    </div>
  </div>
</template>

<script>

/* global gsap */
export default {
  data () {
    return {
      shown: false,
      cards: [
        {
          name: 'Natural',
          img: [require('../assets/img/paraben.png'), require('../assets/img/sulfato.png')],
          description: 'Utilizamos ingredientes naturales, evitando derivados del petróleo como parabenos, petrolatos, detergentes, siliconas; tensioactivos sintéticos, fragancias, y otros químicos tóxicos para tu organismo y el medio ambiente. Nuestra cosmética es alimento para la piel y el cabello. '
        },
        {
          name: 'Vegana',
          img: [require('../assets/img/vegan.png'), require('../assets/img/cruelty.png')],
          description: 'No utilizamos ingredientes de origen animal (o de insectos como cera de abejas o carmín, etc.) ni derivados. No testeamos en animales. Utilizamos ingredientes que no dañen la fauna una vez que llegan a la tierra o el agua. '
        },

        {
          name: 'Ecológica',
          img: [require('../assets/img/plastic.png'), require('../assets/img/recycle.png')],
          description: 'Cosmética libre de ingredientes sintéticos que contaminan los suelos y el agua, trayendo consecuencias sumamente negativas para la biodiversidad. Evitamos el uso de envases plásticos. Utilizamos envases de vidrio recargables, reutilizables o reciclables.'
        }
      ]
    }
  },
  methods: {
    animateTitle (isVisible) {
      if (isVisible) {
        this.shown = true
        const words = gsap.timeline()
        const circles = gsap.timeline()
        words.from('.info__title__word', {
          duration: 1,
          scale: 1.2,
          color: '#eee',
          stagger: 0.75
        })
        circles.fromTo('.circle', {

          background: '#fbfbf7',
          yoyo: true
        },
        {
          duration: 1,

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
.leaf-left{
  position: absolute;
  left: -115px;
  top: 50%;
  width: 425px;
  transform: rotate(-20.29deg) translateY(-50%);
  opacity: 0.3;
  z-index: 3;
}
.leaf-right{
  position: absolute;
  right: -190px;
  bottom: -220px;
  width: 450px;
  transform: rotate(29.28deg);
  z-index: 3;
  opacity: 0.8;
}
.circle{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  z-index: -1;
  @include respond(md){
    width: 3.5rem;
    height: 3.5rem;
  }
    @include respond(xs){
    width: 3rem;
    height: 3rem;
  }
}
.test{
  position: relative;
  top: 0;
}

.info{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 100%;
  min-height: 100vh;
  &__title{
    display: flex;
    position: relative;
    color: $color5 !important;
    @include respond(sm){
      flex-direction: column;

    }

    &__word{
      position: relative;
      color: inherit !important;

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
    position: relative;
    @include respond(sm){
      flex-direction: column;
    }
  }
}
</style>

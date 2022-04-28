<template>
  <section class="body main-container">
    <p
      v-observe-visibility="{
        callback: (isVisible,entry) => appearTop(isVisible,entry,'.body__title',0.5),
        once: true,
        intersection: {
          rootMargin:'0px 0px -320px 0px',
          threshold: 1
        },
      }"
      class="body__title --title color-5"
      style="opacity: 0;"
    >
      Nosotras
    </p>
    <div
      ref="aboutUsSubline"
      v-observe-visibility="{
        callback: subline,
        once: true,
        intersection: {
          rootMargin:'0px 0px -320px 0px',
          threshold: 1
        },
      }"
      class="--flex"
      style="width: 100%;margin-bottom: 3rem;"
    >
      <div id="aboutUsCircle1" class="circle-1" style="opacity: 0;"></div>
      <div class="divider" style="transform: scaleX(0);"></div>
      <div id="aboutUsCircle2" class="circle-1" style="opacity: 0;"></div>
    </div>
    <div class="body__intro">
      <div
        v-observe-visibility="{
          callback: (isVisible,entry) => appearLeft(isVisible,entry,'.body__intro__text',0.7),
          once: true,
          intersection: {
            rootMargin:'0px 0px -100px 0px',
            threshold: 1
          },
        }"
        class="body__intro__text"
        style="opacity: 0;"
      >
        <p>
          Samana Cosmética Natural surge de un <span class="weight-800">profundo amor por nuestra Madre Naturaleza</span> y la intrínseca relación con el cuidado de nuestra esencia.
        </p>
        <p> Somos Flor y Lilen, dos amigas dedicadas a la Aromaterapia y la Cosmética Natural, como medio para el <span class="weight-800">cuidado integral del cuerpo, mente, emoción y espíritu.</span> </p>
        <p>
          Desde Samana te invitamos a <span class="weight-800">conectar</span> con las <span class="weight-800">bondades</span> que tiene la <span class="weight-800">naturaleza</span> para ofrecerte.
          Elaboramos todos nuestros productos de forma <span class="weight-800">artesanal,</span> con <span class="weight-800">ingredientes seleccionados</span> para tu bienestar en armonía con la Tierra, nuestro hogar, y todos sus habitantes.
          Potenciamos a cada uno con mantras y <span class="weight-800">reiki,</span> para expandir sus beneficios físicos a los niveles más sutiles del <span class="weight-800">Ser.</span>
        </p>
      </div>
      <div
        v-observe-visibility="{
          callback: (isVisible,entry) => appearRight(isVisible,entry,'.body__intro__img-container',0.7),
          once: true,
          throttle: 700,
          intersection: {
            rootMargin:'0px 0px -100px 0px',
            threshold: 1
          },
        }"
        class="body__intro__img-container"
        style="position: relative;opacity:0"
      >
        <img class="body__intro__img" src="../assets/img/bruma armonizante.jpg" alt="intro">
        <img class="body__intro__img__background" src="../assets/img/leaves1.png" alt="hojas">
      </div>
    </div>
    <div
      v-observe-visibility="{
        callback: (isVisible,entry) => appearBottom(isVisible,entry,'.bottom',0.7),
        once: true,
        intersection: {
          rootMargin:'0px 0px 0px 0px',
          threshold: 1
        },
      }"

      class="bottom"
      style="width: 100%;"
    >
      <p class="bottom__text color-4 --title" style="line-height: 2.25rem;">
        Alquimia actual,<br> en conexión con la<br> sabiduría ancestral
      </p>
      <img class="bottom__img" src="../assets/img/manos hojas.png" alt="manos hojas">
    </div>
  </section>
</template>

<script>

import animation from '../mixins/animation.js'
/* global gsap */
export default {
  mixins: [animation],
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    subline (isVisible) {
      if (isVisible) {
        const tl = gsap.timeline()
        const tl2 = gsap.timeline()
        tl.to('#aboutUsCircle1', {
          duration: 0.2,
          x: this.$refs.aboutUsSubline.clientWidth / 2
        })
        tl.to('#aboutUsCircle2', {
          duration: 0.2,
          x: -this.$refs.aboutUsSubline.clientWidth / 2
        })
        tl.to('.circle-1', {
          opacity: 1,
          duration: 1
        })
        tl.to('.circle-1', {
          duration: 0.6,
          x: 0
        })

        tl2.to('.divider', {
          delay: 1.4,
          scaleX: 1,
          duration: 1
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.body{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: $color1;
  color: $color5;
  z-index: 2;
  margin: 0;
  &__title{
    margin-bottom: 0rem;
  }
  &__intro{
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    margin-bottom: 0rem;
    position: relative;
    @include respond(md){
      gap: 2rem;
    }
    @include respond(sm){
      flex-direction: column;
    }
    &__text{
      font-size: 1.25rem;
      position:relative;
      width: 50%;
      min-width: 350px;
      line-height: 1.5rem;
      @include respond(md){
        font-size: 1rem;
      }
      @include respond(xs){
        min-width: 300px;
      }
      p{
        margin-block: 2rem;
      }
      &__background{
        position: absolute;
        top: 0;
        left: -50px;
        height: 100%;

      }
    }
    &__img{
        height: 40vh;
        min-height: 350px;
        box-shadow: 2px 2px 5px #00000099;
        border-radius: 3px;
        z-index: 1;
        position: relative;
        &__background{
          position: absolute;
          bottom: -3.25rem;
          right: -13rem;
          width: 400px;
          filter: opacity(0.4);
          transform: rotate(14.07deg);
          z-index: 0;

        }
    }

  }
}
.bottom{
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @include respond(sm){
    margin-top: 2rem;
    flex-direction: column;
  }
  &__text{
    margin-left: 4rem;
    font-family: 'Hilden','serif';
    font-size: 3.5rem;
    @include respond(sm){
      margin-left: 0rem;
    }
  }
  &__img{
    width: auto;
    height: auto;
    max-width: 320px;
    max-height: 240px;
     margin-top: -4rem;
    @include respond(sm){
      margin-top: 0rem;
    }

  }
}
@keyframes appearTitle {
  0%{opacity: 0;transform: scale(2) translateY(15px);}
}
@keyframes leaves{
  0%{transform: rotate(0deg);opacity: 0;}
  100%{transform: rotate(14.07deg);opacity: 1;}
}

</style>

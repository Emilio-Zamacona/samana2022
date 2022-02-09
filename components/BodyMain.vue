<template>
  <section class="body --flex-col">
    <p
      v-observe-visibility="{
        callback: showTitle,
        once: true,
        intersection: {
          rootMargin:'0px 0px -320px 0px',
          threshold: 1
        },
      }"
      class="body__title --title"
      :class="{'--subline':isTitleShown}"
    >
      Nosotras
    </p>
    <div
      v-observe-visibility="{
        callback: showElements,
        once: true,
        intersection: {
          rootMargin:'0px 0px -320px 0px',
          threshold: 1
        },
      }"
      class="body__intro"
    >
      <div v-show="isBioShown" class="body__intro__text">
        <img class="body__intro__text__background" src="../assets/img/leaves2.png" alt="">
        <p>
          Samana Cosmética Natural surge de un profundo amor por nuestra Madre Naturaleza y la intrínseca relación con el cuidado de nuestra esencia.
        </p>
        <p> Somos Flor y Lilen, dos amigas dedicadas a la Aromaterapia y la Cosmética Natural, como medio para el cuidado integral del cuerpo, mente, emoción y espíritu. </p>
        <p>
          Desde Samana te invitamos a conectar con las bondades que tiene la naturaleza para ofrecerte.
          Elaboramos todos nuestros productos de forma artesanal, con ingredientes seleccionados para tu bienestar en armonía con la Tierra, nuestro hogar, y todos sus habitantes.
          Potenciamos a cada uno con mantras y reiki, para expandir sus beneficios físicos a los niveles más sutiles del Ser.
        </p>
        <img v-show="isLeafShown" class="body__intro__text__deco" src="../assets/img/leaves1.png" alt="">
      </div>

      <div class="body__intro__img">
        <img v-show="isPhotoShown" src="../assets/img/intro.jpg" alt="intro">
      </div>
    </div>
    <InfoBody />
  </section>
</template>

<script>

export default {
  data () {
    return {
      isTitleShown: false,
      isBioShown: false,
      isLeafShown: false,
      isPhotoShown: false
    }
  },
  mounted () {
  },

  methods: {
    showTitle (isVisible, entry) {
      if (isVisible) {
        this.isTitleShown = true
      }
    },
    showElements (isVisible, entry) {
      if (isVisible) {
        setTimeout(() => {
          this.isBioShown = true
        }, 700)
        setTimeout(() => {
          this.isPhotoShown = true
        }, 1400)
        setTimeout(() => {
          this.isLeafShown = true
        }, 2100)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.--subline{
  position: relative;
  &::after{
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    background: $color4;
    width: 140%;
    height: 1px;
    margin-left: -20%;
    animation: appearTitle 1s ;
  }
}
.body{
  width: 100vw;
  padding: 4rem;
  background: $color1;
  color: $color4;
  z-index: 2;
  margin: 0;
  @include respond(mobile){
    padding: 2rem;
  }
  &__title{
    margin-bottom: 2rem;

  }
  &__intro{
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    margin-bottom: 3rem;
    position: relative;
    @include respond(laptop){
      gap: 2rem;
    }
    @include respond(tablet){
      flex-direction: column;
    }
    &__text{
      font-size: 1.25rem;
      position:relative;
      width: 50%;
      min-width: 350px;
      animation: appearBottom 1s, fade 1s;
      @include respond(laptop){
        font-size: 1rem;
      }
      @include respond(mobile){
        min-width: 300px;
      }
      &__deco{
        height: 200px;
        position: absolute;
        bottom: 0;
        right: -35%;
        animation: grow 1s;
        @include respond(laptop){
          bottom: -25%;
        }
      }
      p{
        margin-block: 2rem;
      }
      &__background{
        position: absolute;
        top: 0;
        left: -50px;
        height: 100%;
        filter: opacity(0.2);
        transform: rotate(15deg);
      }
    }
    &__img{
        height: 50vh;
        min-height: 350px;

        img{
            height: 100%;
            border-radius: 5px;
            box-shadow: 3px 3px 8px lighten($color2, 0%);
              animation: appearRight 1s;
        }
    }

  }

}
@keyframes appearTitle {
  0%{opacity: 0;transform: scale(2) translateY(15px);}
}

</style>

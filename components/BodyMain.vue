<template>
  <section class="body --flex-col">
    <h1
      v-observe-visibility="{
        callback: showTitle,
        intersection: {
          rootMargin:'0px 0px -320px 0px',
          threshold: 1
        },
      }"
      class="body__title"
      :class="{'--subline':isTitleShown}"
    >
      Nosotras
    </h1>
    <div class="body__intro">
      <div class="body__intro__text">
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
        <img class="body__intro__text__deco" src="../assets/img/leaves1.png" alt="">
      </div>

      <div class="body__intro__img">
        <img src="../assets/img/intro.jpg" alt="intro">
      </div>
    </div>
    <InfoBody />
  </section>
</template>

<script>

export default {
  data () {
    return {
      isTitleShown: false
    }
  },
  mounted () {
  },

  methods: {
    showTitle (isVisible, entry) {
      if (isVisible) {
        this.isTitleShown = true
      }
      console.log(entry)
    },
    animateInfo (isVisible, entry) {
      if (isVisible) {
        this.$refs.vegana.classList.add('--subline')
        setTimeout(() => {
          this.$refs.natural.classList.add('--subline')
        }, 600)
        setTimeout(() => {
          this.$refs.ecologica.classList.add('--subline')
        }, 1200)
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
    height: 4px;
    margin-left: -20%;
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    animation: appearBottom 1s,fade 1s;
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
    font-size: 2rem;
    transition: 1s;
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
      @include respond(laptop){
        font-size: 1rem;
      }
      &__deco{
        height: 200px;
        position: absolute;
        bottom: 0;
        right: -35%;
        @include respond(laptop){
bottom: -25%;
        }
        @include respond(tablet){

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
        }
    }

  }

}

</style>

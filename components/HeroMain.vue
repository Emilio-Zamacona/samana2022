<template>
  <section>
    <div class="hero">
      <div ref="dark" class="hero__background"></div>
      <div class="hero__title">
        <h1 class="hero__title__top">
          Samana
        </h1>
        <h2 class="hero__title__sub weight-400">
          cosmética natural
        </h2>
      </div>

      <transition name="fade">
        <div v-if="isDark" class="hero__container">
          <p class="hero__container__phrase">
            La naturaleza te habla, <br>escuchala con<br> Samana
          </p>
          <div class="hero__container__divider"></div>
          <div class="hero__container__circle circle-1"></div>
          <div class="hero__container__circle circle-2"></div>
          <div class="hero__container__circle circle-3"></div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      isDark: false
    }
  },

  mounted () {
    document.addEventListener('scroll', this.darkenHero)
  },
  destroyed () {
    document.removeEventListener('scroll', this.darkenHero)
  },
  methods: {
    darkenHero () {
      if (window.pageYOffset > 150) {
        this.$refs.dark.classList.add('--dark')
        this.isDark = true
      } else {
        this.$refs.dark.classList.remove('--dark')
        this.isDark = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.circle-1{
  width: 1.5rem;

}
.circle-2{
  width: 1.25rem;

}
.circle-3{
  width: 1rem;

}
.--dark{
 filter: brightness(0.35) hue-rotate(15deg) saturate(1.3);

}
.hero{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100vw;
  height: 130vh;
  position: relative;
  background: rgba(0, 0, 0, 0);

  &__background{
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    min-height: 150vh;
    background-image: url(../assets/img/fondo.jpg);
    background-attachment: fixed;
    background-position: center;
    background-repeat:no-repeat;
    background-size: cover;

    transition: filter 1s;
    z-index: -1;
  }
  &__title{
    margin: 0;
    color: $color1;
    background: $color3;
    text-align: center;
    width: 100vw;
    @include respond(xs){
      /* font-size: 1.25rem; */
    }
    &__top{
      margin: 0;
      margin-bottom: -20px;
    }
  }
  &__container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 5rem;
    &__divider{
      background-color: #ffffff77;
      height: 2px;
      width: 70%;
      margin-top: 5rem;
    }
    &__circle{
      border-radius: 50%;
      background-color: $color1;
      margin: 1.25rem;
      aspect-ratio: 1/1;
    }
    &__phrase{
        font-size: 8rem;
        color: $color1;
        width: 100vw;
        text-align: center;
        line-height: 62%;
        font-family: 'Hilden','serif';
        @include respond(md){
          width: 80vw;
          font-size: min(10vw,6rem);
        }
        @include respond(xs){
          width: 90vw;
          font-size: 4rem;
        }
    }
  }
}
</style>

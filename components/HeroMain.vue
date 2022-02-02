<template>
  <section>
    <div class="hero --flex">
      <div ref="dark" class="hero__background"></div>
      <h1 class="hero__title">
        Samana cosmética natural
      </h1>
      <transition name="fade">
        <div v-if="isDark" class="hero__container">
          <p class="hero__container__phrase">
            La naturaleza nos habla a través de sus aromas, encendé tus sentidos con Samana
          </p>
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
.--dark{
 filter: brightness(0.4);

}
.hero{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 150vh;
  position: relative;
  background: rgba(0, 0, 0, 0);
  &__background{
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 150vh;
    background-image: url(../assets/img/fondo.jpg);
    background-attachment: fixed;
    background-repeat:no-repeat;
    background-size: cover;
    aspect-ratio: 4/3;
    transition: filter 1s;
    z-index: -1;
  }
  &__title{
    font-family:"Allura","cursive";
    margin: 0;
    font-size: 3rem;
    color: $color1;
    background: $color3;
    text-align: center;
    padding: 1rem;
    width: 100vw;
  }
  &__container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    &__phrase{
        padding-block: 40vh;
        font-size: 4rem;
        font-family: 'Allura','cursive';
        color: $color1;
        width: 50vw;
        text-align: center;
    }
  }
}
</style>

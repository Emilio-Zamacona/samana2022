<template>
  <section class="--fixed">
    <transition name="appear">
      <FaIcon v-if="!navOpen" class="open-close open-close--open" :icon="['fas', 'bars']" @click="navOpen=!navOpen"></FaIcon>
    </transition>

    <transition name="slide-left">
      <div v-if="navOpen" class="nav-bar">
        <div class="nav-bar__items">
          <FaIcon :icon="['fas', 'times']" class="open-close open-close--close" @click="navOpen=!navOpen"></FaIcon>
          <a v-for="item in navItems" :key="item.name" class="nav-bar__items__item" :href="item.href">{{ item.name }}</a>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  data () {
    return {
      navOpen: false,
      navItems: [
        {
          name: 'Inicio',
          href: ''
        },
        {
          name: 'Acerca de',
          href: ''
        },
        {
          name: 'Galería',
          href: ''
        },
        {
          name: 'Contacto',
          href: ''
        }

      ]
    }
  }

}
</script>

<style lang="scss" scoped>
.--fixed{
  position: fixed;
  top: 0;
  left: 0;
  width: 180px;
}
.open-close{
  position: absolute;
  top: 20px;
  color: $color3;
  font-size: 2rem;
  left: 20px;
  cursor: pointer;
  &--open{
    color: $color3;
  }
  &--close{
    color: $color1;
  }
}
.nav-bar{
  background: $color1;
  width: 180px;
  &__items{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    background: $color4;
    height: 100vh;
    &__close{
      width: 100px;
    }
    &__item{
      text-decoration: none;
      color: $color1;
      margin: 0 0 0 1rem;
      cursor: pointer;
      &:active{
        color: $color3;
      }
    }
  }
}
.slide-left-enter-active{
  animation: slide-left .5s ease;
}
.slide-left-leave-active{
  animation: slide-left .5s ease reverse;
}
.appear-enter-active{
  animation: appear .5s ease;
}
.appear-leave-active{
  animation: appear .5s ease reverse;
}

@keyframes slide-left {
  0%{
    transform:translateX(-200px);
  }
  100%{
    transform:translateX(0px);
  }
}
@keyframes appear{
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
</style>

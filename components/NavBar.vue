<template>
  <section class="navbar">
    <img class="navbar__logo" src="../assets/img/logo.png" alt="logo">
    <ul class="navbar__options">
      <NuxtLink class="navbar__options__navitem" to="/">
        Inicio
      </NuxtLink>

      <NuxtLink class="navbar__options__navitem" to="/shop">
        Tienda
      </NuxtLink>

      <NuxtLink class="navbar__options__navitem" to="/contact">
        Contacto
      </NuxtLink>

      <li>
        <FaIcon icon="shopping-cart" />
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data () {
    return {

    }
  }

}
</script>

<style lang="scss" scoped>
.navbar{
  position: sticky;
  top: 0;
  background: $color1;
  width: 100vw;
  padding: 1rem;
  padding-inline:2rem;
  color: $color4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
  border-bottom: 1px rgb(230, 230, 230) solid;
  &__logo{
    width: 60px;
    cursor: pointer;
    margin: -16px;
  }
  &__options{
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
    margin: 0;
    padding: 0;

    &__navitem{
      color: inherit;
    }
  }

}

</style>

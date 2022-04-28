<template>
  <div>
    <NavBar />
    <Nuxt />
    <FooterMain />
  </div>
</template>

<script>
export default {
  async fetch () {
    try {
      const response = await this.$http.$get(this.$strapi.options.url + '/products?populate=image')
      this.$store.commit('setProducts', response.data)
      console.log(response.data)
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

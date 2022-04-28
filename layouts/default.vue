<template>
  <div>
    <div v-if="getInConstruction">
      <Nuxt />
    </div>
    <div v-else>
      <NavBar />
      <Nuxt />
      <FooterMain />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      inConstruction: true
    }
  },

  async fetch () {
    try {
      const response = await this.$http.$get(this.$strapi.options.url + '/products?populate=image')
      this.$store.commit('setProducts', response.data)
      console.log(response.data)
    } catch (e) {
      console.log(e)
    }
  },
  computed: {
    ...mapGetters(['getInConstruction'])
  }
}
</script>

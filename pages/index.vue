<template>
  <section class="main">
    <HeroMain />
    <BodyMain />
    <FrequentlyAsked />
    <ContactMain />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'IndexPage',
  data () {
    return {
      storeLoad: ''
    }
  },
  computed: {
    ...mapGetters(['allProducts'])
  },
  async mounted () {
    try {
      const response = await this.$strapi.$products.find()
      this.$store.commit('setProducts', response.data)
    } catch (e) {
      console.log(e)
    }
  }

}
</script>
<style lang="scss">
.main{
  width: 100vw;
}

</style>

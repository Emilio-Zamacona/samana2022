<template>
  <section class="shop main-container">
    <ShopProductCard v-for="product in allProducts" :key="product.attributes.name" :product-data="product">
    </ShopProductCard>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['allProducts'])
  }
}
</script>

<style lang="scss" scoped>
.shop{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding:1rem;
  width: 100%;
  gap: 1rem;
  background: $color1;
  min-height: 100vh;

}
</style>

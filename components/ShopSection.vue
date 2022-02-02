<template>
  <section class="shop">
    <ProductCard v-for="product in allProducts" :key="product.attributes.name" :product-data="product">
    </Productcard>
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
  flex-wrap: wrap;
  padding:1rem;
  width: 100%;
  gap: 1rem;
  background: $color2;
}
</style>

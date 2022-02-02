<template>
  <div class="product">
    <p class="product__title">
      {{ productData.attributes.name }}
    </p>
    <p class="product__description">
      {{ '$ '+productData.attributes.price }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    productData: {
      type: Object,
      default: null
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.product{
  width: 300px;
  background: $color1;
  font-family: 'Manjari','sans-serif';
  padding: 2rem;

  border-radius: 15px;
  box-shadow: 5px 5px 5px $color2;
  &__title{
    font-size: 1.5rem;
    color: $color4;
  }
  &__description{
    color: lighten($color4,15%);

  }
}
</style>

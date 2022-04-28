<template>
  <div class="product">
    <img class="product__img" :src="cardImgUrl" :alt="productData.attributes.name" />
    <p class="product__title">
      {{ productData.attributes.name }}
    </p>
    <div class="product__divider"></div>
    <p class="product__price">
      {{ '$ '+productData.attributes.price }}
    </p>
    <button class="shop-button">
      Ver producto
    </button>
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
  },
  computed: {
    cardImgUrl () {
      return this.$strapi.options.baseUrl + this.productData.attributes.image.data.attributes.formats.small.url
    }
  },
  methods: {
    showData () {
      console.log(this.cardImgUrl)
    }
  }

}
</script>

<style lang="scss" scoped>
.product{
  width: 300px;
  height: 470px;
  background-color: $color5;
  color: $color1;
  font-family: 'Manjari','sans-serif';
  padding: 1rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__divider{
    height: 2px;
    background-color: $color3;
    width: 90%;
    margin-bottom: 1rem;
  }
  &__img{
    width: 100%;
    height: 250px;
    object-fit: cover;
    margin-bottom: 1rem;
  }
  &__title{
    font-size: 1.5rem;
    height: 4rem;
  }
  &__price{
    margin-bottom: 1rem;

  }
}
</style>

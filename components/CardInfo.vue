<template>
  <div class="card --flex-col">
    <div class="card__text">
      <p class="card__text__title">
        {{ info.name }}
      </p>
      <p class="card__text__description">
        {{ info.description }}
      </p>
    </div>

    <div>
      <img v-for="img in info.img" :key="img.id" class="card__img" :src="img" :alt="img.id">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: null
    }
  }

}
</script>

<style lang="scss" scoped>
.card{
    width: 320px;
    margin: 1rem;
  &__text{
      background: $color4;
      color: $color1;
      padding: 1rem;
      margin: 1rem;
      height: 300px;
      border-radius: 15px;

    &__title{
      text-align: center;
    }
    &__description{}
  }

  &__img{
    width: 80px;
  }

}

</style>

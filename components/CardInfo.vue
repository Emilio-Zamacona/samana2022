<template>
  <div class="card --flex-col">
    <div class="card__text">
      <div class="img-container">
        <img v-for="img in info.img" :key="img.id" class="card__img" :src="img" :alt="img.id">
      </div>

      <p class="card__text__title">
        {{ info.name }}
      </p>
      <div class="card-divider"></div>
      <p class="card__text__description">
        {{ info.description }}
      </p>
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
.img-container{
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 1rem;
  img{
    height: 60px;
    width: 60px;
  }
}
.card-divider{
  height: 1px;
  background-color: $color3;
  width: 100%;
  padding-inline: 1rem;
  margin-block: 1rem;
}
.card{
  width: 348px;
  height: 510px;
  margin: 2rem;
  line-height: 30px;
  font-size: 1.5rem;
  z-index: 10;
  @include respond(md){
    font-size: 1.25rem;
    width: 300px;
    margin: .5rem;
  }
  @include respond(sm){
    font-size: 1rem;
    height: 400px;
    margin: 1rem;
  }
  &__text{
      background: $color5;
      color: $color1;
      padding: 1rem;
      height: 510px;

    &__title{
      font-family: 'Hilden','serif';
      font-size: 3.5rem;
      font-weight: 100;
    }
    &__description{
    }
  }

  &__img{
    width: 80px;
    filter: brightness(10);
    @include respond(md){
      width: 60px;
    }
  }

}

</style>

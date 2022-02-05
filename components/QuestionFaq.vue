<template>
  <div class="question">
    <p class="question__ask" @click="isOpen = !isOpen">
      {{ question.ask+ '  &#9658;' }}
    </p>
    <transition name="fade">
      <p v-if="isOpen" class="question__answer">
        {{ question.answer }}
      </p>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      isOpen: false
    }
  }

}
</script>

<style lang="scss" scoped>
.question{
  margin: 1rem;
  z-index: 3;

  &__ask{
    color: $color3;
    cursor: pointer;

  }
  &__answer{
    background: $color3;
    color: $color1;
    border: $color2 1px solid;
    padding: 1rem;
    margin-left: 1rem;
    border-radius: 5px;
  }
}

</style>

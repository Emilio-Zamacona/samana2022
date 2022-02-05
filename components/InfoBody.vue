<template>
  <div class="info --flex-col">
    <div class="info__divisor --line1"></div>

    <p
      v-observe-visibility="{
        callback: animateInfo,
        intersection: {
          rootMargin:'0px 0px -320px 0px',
          threshold: 0.1
        },
      }"
      class="info__title --title"
    >
      Cósmetica <span ref="natural">Natural, </span><span ref="vegana">Vegana </span><span ref="ecologica">y Ecológica
      </span>
    </p>
    <div class="info__divisor --line2"></div>
    <div class="info__cards">
      <CardInfo v-for="card in cards" :key="card.name" :info="card" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cards: [
        {
          name: 'Natural',
          img: [require('../assets/img/sulfato.png'), require('../assets/img/paraben.png'), require('../assets/img/petro.png')],
          description: 'Utilizamos ingredientes naturales, evitando derivados del petroleras como parabenos, petrolatos, detergentes, siliconas; tensioactivos sintéticos, fragancias, y otros químicos tóxicos para tu organismo y el medio ambiente. Nuestra cosmética es alimento para la piel y el cabello. '
        },
        {
          name: 'Vegana',
          img: [require('../assets/img/leaf.png'), require('../assets/img/cruelty.png')],
          description: 'Esto quiere decir que no utilizamos ingredientes de origen animal (o de insectos como cera de abejas o carmín, etc.) ni derivados. No testeamos en animales. Utilizamos ingredientes que no dañen la fauna una vez que llegan a la tierra o el agua. '
        },

        {
          name: 'Ecológica',
          img: [require('../assets/img/plastic.png'), require('../assets/img/recycle.png')],
          description: 'No utilizamos ingredientes sintéticos que contaminan los suelos y el agua, trayendo consecuencias sumamente negativas para la biodiversidad. Evitamos el uso de envases plásticos, los cosméticos sólidos cuentan con packaging biodegradable. Los cosméticos no sólidos tienen envases de vidrio recargables, reutilizables o reciclables.'
        }
      ]
    }
  },
  methods: {
    animateInfo () {

    }
  }

}
</script>
<style lang="scss" scoped>
.--line1{
  width: 85%;
  position: relative;
  &::before{
    content: "";
    position: absolute;
    top: -10px;
    left: -40px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: $color3;
  }
}
.--line2{width: 75%;}
.info{
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  &__divisor{
    background: $color3;
    height: 2px;
    margin: 1rem;
  }
  &__title{
    font-size: 2rem;
    @include respond(tablet){
      font-size: 1.75rem;
    }
    @include respond(mobile){
      font-size: 1.5rem;
    }

  }
  &__cards{
    display: flex;
    @include respond(tablet){
      flex-direction: column;
    }
  }
}
</style>

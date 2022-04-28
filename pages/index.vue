<template>
  <section class="main">
    <div v-if="getInConstruction" class="construction">
      <h1 style="margin: 0;">
        Este sitio se encuentra bajo construcción, por favor vuelva mas tarde
      </h1>
      <div>
        <h2>visitanos en:</h2>
        <a href="https://instagram.com/samanacosmeticanatural">
          <img src="../assets/img/ig.png" alt="instagram logo">
        </a>
      </div>
    </div>
    <div v-else>
      <HeroMain />
      <BodyMain />
      <InfoBody />
      <LowerBody />
      <!-- <div class="divisor1"></div> -->
      <FrequentlyAsked />
      <ContactMain />
    </div>
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
    ...mapGetters(['allProducts', 'getInConstruction'])
  }

}
</script>
<style lang="scss">
.construction{
  width: 100vw;
  height: 100vh;
  background-color: $color2;
  color: $color1;
  display: grid;
  place-items: center;
  div{
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  img{
    width: 200px;
  }
}
/* .divisor1{
  height: 5vw;
  width: 100vw;
  position: relative;
  background: $color2;
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
  margin-bottom: -1px;
}
.divisor2{
  height: 5vw;
  width: 100vw;
  position: relative;
  background: $color2;
  clip-path: polygon(0 0, 100% 0, 0 100%);
  margin-top: -1px;
} */
.main{
  width: 100vw;
  overflow-x: hidden;
}

</style>

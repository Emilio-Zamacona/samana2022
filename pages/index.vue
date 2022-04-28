<template>
  <section class="main">
    <HeroMain />
    <BodyMain />
    <InfoBody />
    <LowerBody />
    <!-- <div class="divisor1"></div> -->
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
  }

}
</script>
<style lang="scss">
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

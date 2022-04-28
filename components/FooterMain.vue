<template>
  <footer class="footer">
    <div class="footer__top">
      <div v-if="$store.state.winWidth>600" class="footer__top__contact">
        <p>+54 9 11 35872321</p>
        <p>@samanacosmeticanatural</p>
        <p>samana.cosmeticanatural@gmail.com</p>
      </div>
      <div class="footer__top__logo">
        <img src="../assets/img/logo.png" alt="Logo de Samana">
        <div class="--flex-col" style="margin-bottom: 2rem;">
          <p class="footer__top__logo__title">
            Samana
          </p>
          <p class="footer__top__logo__subtitle">
            cosmética natural
          </p>
        </div>
      </div>
    </div>
    <div class="footer__trademark">
      <p>© 2022 - Samana cosmética natural. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<script>

</script>

<style lang="scss" scoped>
.footer{
  background-color: $color3;
  color: $color1;

  &__top{
    line-height: 35px;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    @include respond(sm){
      font-size: 1rem;
      line-height: 25px;
    }
    @include respond(xs){
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    }
    &__contact{

    }
    &__logo{
      display: flex;
      align-items: flex-end;
      justify-content: center;
      gap: 1rem;
      @include respond(sm){
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
      }
      &__title{
        font-family: 'Allura', "cursive";
        font-size: 4rem;
      }
      &__subtitle{

      }
      img{
        filter: brightness(100);
        width: 196px;
        @include respond(sm){
          width: 120px;
        }
      }
    }
  }
  &__trademark{
    width: 100%;
    display: flex;
    justify-content: center;
    padding: .5rem;
  }

}

</style>

<template>
  <section class="lower-body main-container">
    <h2 class="lower-body__title --title">
      Cosmética natural artesanal,<br>alimento para tu piel
    </h2>
    <div class="--flex" style="width: 100%; color: red !important;">
      <div class="circle-1 background-color-4"></div>
      <div class="divider background-color-4"></div>
    </div>
    <p class="lower-body__text --text-content">
      Nuestra atención es <span class="weight-800">personalizada,</span>  de este modo podemos indicar el ritual de autocuidado más apropiado <span class="weight-800">para vos.</span>
      Te enseñamos a <span class="weight-800">conocer</span> tu tipo de <span class="weight-800">piel</span> y cuero cabelludo, así podrás elegir lo mejora para tu <span class="weight-800">rostro y cabello.</span>
    </p>
    <p class="lower-body__text --text-content" style="text-align: end;">
      También podemos orientarte en <span class="weight-800">rituales</span> con diferentes elementos de <span class="weight-800">aromaterapia.</span><br> Buscamos las mejores opciones aromáticas para el <span class="weight-800">bienestar integral del Ser.</span>
    </p>
    <div class="--flex --social-wrapper">
      <h2 class="--title">
        Escribinos
      </h2>
      <div class="lower-body__social">
        <img src="../assets/img/whatsapp.png" alt="whatsapp logo">
      </div>
      <div class="lower-body__social">
        <img src="../assets/img/instagram.png" alt="instagram logo">
      </div>
    </div>
    <div class="--flex" style="width: 100%; color: red !important;">
      <div class="divider background-color-4"></div>
      <div class="circle-1 background-color-4"></div>
    </div>
    <h2 class="lower-body__title --title " style="align-self: flex-start;">
      Realizamos
    </h2>
    <div class="lower-body__services">
      <div class="--flex" style="height: 150px;">
        <img class="gift" src="../assets/img/gift.png" alt="ícono de paquete">
        <p class="--text-content">
          Ventas mayoristas y minoristas
        </p>
      </div>
      <div class="--flex" style="height: 150px;">
        <img class="shipping" src="../assets/img/shipping.png" alt="ícono de camioneta">
        <p class="--text-content">
          Envíos a todo el país
        </p>
      </div>
    </div>
    <p class="--text-content color-5 weight-600" style="z-index: 2;">
      Consultanos por lista de precios
    </p>
    <div style="align-self: flex-end; margin-top: 7rem; z-index: 2;">
      <p class="--text-content color-4" style="text-align: end;">
        +54 9 11 35872321
      </p>
      <p class="--text-content color-4" style="text-align: end;">
        @samanacosmeticanatural
      </p>
      <p class="--text-content color-4" style="text-align: end;">
        samana.cosmeticanatural@gmail.com
      </p>
    </div>
    <img class="bottom-leaf" src="../assets/img/leaves3.png" alt="">
  </section>
</template>

<script>

</script>

<style lang="scss" scoped>
.bottom-leaf{
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1) rotate(17deg);
  opacity: 0.6;
  z-index: 1;
  width: 476px;
  position: absolute;
  bottom: -120px;
  left: min(100px,10%);
  @include respond(md){
    width: 350px;
  }
  @include respond(sm){
    width: 250px;
  }
}
.--social-wrapper{
  margin-block: 3rem;
  gap: 2rem;
  @include respond(sm){
    gap: 1rem;
  }

}
.gift{
  width: 102px;
  @include respond(sm){
    width: 70px;
  }
}
.shipping{
  width: 139px;
  @include respond(sm){
    width: 89px;
  }
}
.lower-body{
  background-color: lighten($color3,20%);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  &__title{
    text-align: center;
    color: $color5;
  }
  &__text{
    color: $color2;
    margin-top: 3rem;
  }
  &__social{
    background-color: lighten($color3,4%);
    width: 82px;
    height: 82px;
    padding: 1rem;
    border-radius: 50%;
    @include respond(sm){
      width: 60px;
      height: 60px;
    }

    img{
      width: 100%;
    }
  }
  &__services{
    align-self: flex-start;
    color: $color1;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    @include respond(sm){
      flex-direction: column;
      align-items: flex-start;
    }
  }
}

</style>

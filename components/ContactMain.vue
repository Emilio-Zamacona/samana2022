<template>
  <section class="contact --flex main-container">
    <div class="contact__nature">
      <p>
        Somos naturaleza
      </p>
      <img src="../assets/img/mano flores.png" alt="mano con flores">
    </div>
    <div id="contact-form" class="contact__form-container">
      <h2 class="--title ">
        Contacto
      </h2>
      <img v-if="$store.state.winWidth<961" class="contact__form-container__img" src="../assets/img/leaves4.png" alt="hojas de una planta">
      <form action="" class="contact__form-container__form --flex-col">
        <div class="contact__form-container__form__field">
          <label for="name">Nombre</label>
          <input id="name" required="required" type="text" @focus="subLine">
        </div>
        <div class="contact__form-container__form__field">
          <label for="email">Email</label>
          <input id="email" required="required" type="email" name="email" @focus="subLine">
        </div>
        <div class="contact__form-container__form__field">
          <label for="msg">Mensaje</label>
          <textarea
            id="msg"
            minlength="10"
            name="msg"
            cols="20"
            rows="10"
            required="required"
            @focus="subLine"
          ></textarea>
        </div>
        <div class="contact__form-container__form__field contact__form-container__form__field--flex-end">
          <button type="submit" value="Check" class="--button-send">
            ENVIAR
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>

export default {

  data () {
    return {}
  },
  mounted () {
    document.addEventListener('click', this.mouseOut)
  },
  methods: {
    subLine (e) {
      this.removeLine()
      e.target.parentElement.classList.add('--focused-line')
    },
    removeLine () {
      const fields = document.getElementsByClassName('contact__form-container__form__field')

      for (let i = 0; i < fields.length; i++) {
        const element = fields[i]
        element.classList.remove('--focused-line')
      }
    },
    mouseOut (e) {
      if (!document.getElementById('contact-form').contains(e.target)) {
        this.removeLine()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
button{
  border:none;
  font-size: 1.25rem;
  background: lighten($color3,20%);
  color: $color1;
  margin-bottom: 2rem;
  height: 100px;
  width: 100px;
  letter-spacing: 2px;
  border-radius: 50%;
}

.--focused-line{
  &::after{
    content: "";
    position: absolute;
    bottom: -3px;
    left: 0;
    width:100%;
    height: 3px;
    background: $color5;
    animation: slideLeft .5s ease;

  }
}

.contact{
  color:$color2;
  background: $color1;
  position: relative;
  width: 100%;
  @include respond(sm){
    display: flex;
    flex-direction: column;
    padding-top: 0 !important;

  }
  &__nature{
    position: relative;
    height: 400px;
    width: 50%;
    display: flex;
    align-items: flex-end;
    @include respond(sm){
      margin-left: 50%;
      margin-bottom: 6rem;
    }
    img{
      -webkit-transform: scaleX(-1) rotate(-15deg);
      transform: scaleX(-1) rotate(-15deg);
      width: 300px;
      height: 100%;
      position: absolute;
      top: 20px;
      left: -180px;
      overflow: hidden;
    }
    p{
      font-family: 'Hilden','serif';
      font-size: 4rem;
      color: $color4;

    }
  }
  &__form-container{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    &__img{
      height: 400px;
      position: absolute;
      top: 2rem;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      filter: opacity(.2);
    }
    &__form{
      gap: 1rem;
      &__field{
        display: flex;
        flex-direction: column;
        position: relative;
        label{
          font-size: 1.5rem;
        }
        &--flex-end{
          align-items: center;
        }
        input{
          height: 30px;
        }
        input, textarea{
          width: 320px;
          resize: none;
          transition: .5s;
          background-color:transparent;
          border: none;
          border-bottom: 1px solid $color2;
          &:focus{
            background: lighten($color3 ,30%);
            outline: none;
            position: relative;
          }
        }
      }
    }
  }
  &__social{
    position: absolute;
    bottom: 0;
    left: 0;
    a{
      width: 60px;
      height: 60px;
      background-position: left center;
      background-repeat: no-repeat;
      background-size: auto;
    }
  }
}
@keyframes slideLeft {
  0%{
    transform: scaleX(0);
  }
  100%{
    transform: scaleX(1);
  }
}
</style>

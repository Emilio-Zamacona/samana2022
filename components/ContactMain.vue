<template>
  <section class="contact --flex --fixed-on-top">
    <div id="contact-form" class="contact__form-container --flex-col">
      <h1 class="contact__form-container__title">
        Contacto
      </h1>
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
  padding: 1rem;
  background: $color4;
  color: $color1;
  letter-spacing: 4px;
  margin-bottom: 2rem;
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
  letter-spacing: 5px;

  &__form-container{
    &__title{
      font-size: 2rem;
    }
    &__form{
      gap: 1rem;
      &__field{
        display: flex;
        flex-direction: column;
        position: relative;
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
          background:$color1;
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

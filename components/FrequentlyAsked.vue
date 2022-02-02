<template>
  <div class="faq">
    <img class="faq__background" src="../assets/img/leaves3.png" alt="">
    <p class="faq__title">
      Preguntas Frecuentes
    </p>
    <QuestionFaq v-for="question in questions" :key="question.ask" :question="question" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      questions: [
        {
          ask: '1. ¿Cómo elijo los productos adecuados para mi piel?',
          answer: 'Dentro de la línea rostro tenemos varias opciones con una descripción de sus beneficios e ingredientes. Aún así sabemos que la atención personalizada es siempre la opción más amorosa y cuidada por eso podés enviarnos un WhatsApp y te responderemos para elegir la mejor opción para tu rostro.'
        },
        {
          ask: '2. ¿Cómo elijo el shampoo o tratamiento para el cabello?',
          answer: 'La elección del shampoo va a depender de tu cuero cabelludo, para trabajar las puntas contamos con el acondicionador, crema de peinar, baño de crema o sérum. Esto se debe a que en muchas ocasiones el cuero cabelludo no tiene las mismas necesidades que las puntas (por ejemplo cuero cabelludo graso con puntas secas). En el detalle de cada producto te contamos para qué se utiliza. De todos modos si seguís con dudas consultanos como siempre por WhatsApp para atenderte de forma personalizada.'
        },
        {
          ask: '3. ¿El shampoo requiere un período de adaptación?',
          answer: 'Nuestros shampoo (y acondicionador) no están realizados por saponificación, ¡no son jabones! Por lo que no necesitan un período de adaptación porque el pH es el correcto para el uso capilar. La única diferencia con los químicos es que, al no tener detergente, puede modificarse la frecuencia de lavado.'
        },
        {
          ask: '4. ¿Qué es el SCI?',
          answer: 'El SCI (Sodium Cocoyl Isethionate) es un tensioactivo aniónico derivado del coco. Muy bien tolerado por la piel, proporciona una espuma abundante y cremosa. Deja un efecto acondicionador en el cabello. Es un recurso natural, renovable y biodegradable.'
        },
        {
          ask: '5. ¿Son productos sustentables?',
          answer: 'Dentro de las posibilidades que permite la globalización elegimos, en todo lo posible, productores locales, reutilizamos los envases y reciclamos los elementos en los que llegan nuestras materias primas. También realizamos ecoladrillos y botellas de amor (si no sabés de qué se tratan escribinos que con gusto te comentamos). Nuestros envases de vidrio son reutilizables o recargables. Lo demás es compostable.'
        },
        {
          ask: '6. ¿Cómo cuido mis cosméticos Samana?',
          answer: 'Como regla general recomendamos no exponerlos al sol ni altas temperaturas. Nuestra cosmética es fresca y se produce en pequeña escala para que las propiedades de la naturaleza alimenten tu piel,  al utilizar cremas recomendamos lavar las manos antes de tocarlas para no introducir agentes externos. En el caso de los sólidos lo mejor es una jabonera que escurra para que no se encharque y se disuelva desperdiciando producto. '
        },
        {
          ask: '7. ¿Cómo realizo una compra mayorista?',
          answer: 'Enviando un mensaje de Whatsapp al +54 9 1135872321 o a través del formulario de contacto. Nos comunicaremos a la brevedad.'
        },
        {
          ask: '8. ¿Realizan envíos?',
          answer: 'Hacemos envíos a todo el país por correo. También en bicicleta a quienes están cerca de nuestro showroom.'
        }
      ]
    }
  },
  methods: {}

}
</script>

<style lang="scss" scoped>
.faq{
  background: $color2;
  padding: 3rem;
  position: relative;
  &__background{
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    max-height: 400px;
    filter: opacity(.2);
  }
  &__title{
    font-size: 2rem;
    color: $color3;
  }
}

</style>

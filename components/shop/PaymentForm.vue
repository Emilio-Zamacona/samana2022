<template>
  <section></section>
</template>

<script src="sdk de mercadopago"></script>
<script>

export default {
  mounted () {
    /* const mercadopago = require('mercadopago')
    // Agrega credenciales
    mercadopago.configure({
      access_token: 'TEST-3370806145649829-020218-598a54c3071ad15a5b0008b06a33ac8b-142652954'
    })
    const preference = {
      items: [
        {
          title: 'Mi producto',
          unit_price: 100,
          quantity: 1
        }
      ]
    }

    mercadopago.preferences
      .create(preference)
      .then(function (response) {
        // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso
      })
      .catch(function (error) {
        console.log(error)
      })
    const mp = new MercadoPago('TEST-5a21df55-663b-4458-877b-d5854279d347', {
      locale: 'es-AR'
    })

    // Inicializa el checkout
    mp.checkout({
      preference: {
        id: 'Mi Producto'
      },
      render: {
        container: '.cho-container', // Indica el nombre de la clase donde se mostrará el botón de pago
        label: 'Pagar' // Cambia el texto del botón de pago (opcional)
      }
    }) */
  }
}
</script>

<style>

</style>

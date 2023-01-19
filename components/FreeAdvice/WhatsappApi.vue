<template>
  <!-- slider area start here -->
  <section class="mt-4">
    <article class="row">
        <div class="col-12 col-md-4 col-lg-5 mx-auto d-flex justify-content-center">
          <PictureWhatsappApi />
        </div>
        <div class="col-11 col-md-7 col-lg-6 mx-auto">
          <p class="text-justify text">
            Te presentamos <strong>WhatsApp Business API</strong>, una herramienta que
            ayuda a pequeñas, medianas y grandes empresas a
            <strong class="color-1">COMUNICARSE 24/7 CON SUS CLIENTES.</strong> Nuestra plataforma te
            permite interactuar por diversos canales de comunicación como
            WhatsApp, Facebook Messenger, Instagram y Chat-Web, <strong class="color-2">A
            TRAVÉS DE UN CHATBOT Y AGENTES OPERATIVOS
            OFRECIENDO UNA EXPERIENCIA ÚNICA DE SERVICIO AL
            CLIENTE Y VENTAS.</strong>
          </p>
          <h1 class="display-1 py-0 my-0 mt-3 title-1 font-family-MonumentExtended-Black text-center">
            VENTAJAS
          </h1>
          <img class="mb-5" style="width: 100%" src="/assets/img/FreeAdvice/wsp_point_list.png" />
        </div>
    </article>
  </section>
  <!-- slider area end here -->
</template>

<script>
import PictureWhatsappApi from "~/components/FreeAdvice/PictureWhatsappApi.vue";

export default {
  name: 'WhatsappApi',
  components: {PictureWhatsappApi},
};
</script>

<style lang="scss" scoped>
  .pre-header {
    color: #f5369e;
    line-height: 0.9;
    font-size: 2.5rem;
    padding: 0;
  }

  .title-1 {
    font-size: 2.5rem;
    color: #f5369e;
    font-weight: bold;
    padding: 0;
  }

  .text {
    color: black;
  }

  .text-2 {
    color: black;
    font-weight: 600;
  }

  .text strong {
    font-weight: bold;
  }

  .color-1 {
    color: #F5369E;
  }
  .color-2 {
    color: #7B56DB;
  }


  @media (max-width: 1200px) {
    .pre-header {
      font-size: 1.8rem;
    }

    .title-1 {
      font-size: 2rem;
    }

    .text {
      font-size: 1rem;
    }

    .text-2 {
      font-size: .8rem;
    }
  }

  @media (max-width: 890px) {
    .pre-header {
      font-size: 1.3rem;
    }

    .title-1 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 550px) {

    .pre-header {
      font-size: 1.5rem;
    }

    .title-1 {
      font-size: 1.5rem;
    }

    .text {
      font-size: 1rem;
    }
  }

  @media (max-width: 380px) {

    .pre-header {
      font-size: 1rem;
    }

    .title-1 {
      font-size: 1rem;
    }

    .text {
      font-size: .7rem;
    }
  }
</style>

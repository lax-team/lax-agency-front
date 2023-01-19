<template>
  <section class="row">
    <article class="col-12 col-md-10 mx-auto">
      <div class="text-center pt-3">
        <span class="display-2 py-0 my-0 pre-header font-family-MonumentExtended-Light">
            {{ preHeaderTitle }}
        </span>
      </div>
      <h1 class="display-1 py-0 my-0 title-1 font-family-MonumentExtended-Black text-center">
        {{ title }}
      </h1>
      <div class="row mb-4 d-flex">
        <div class="col-6 col-md-2 my-1 text-2">
          <img :src="imgBulletSMS" width="18" height="18" alt="bullet" /> SOPORTE TÉCNICO
        </div>
        <div class="col-6 col-md-2 my-1 text-2">
          <img :src="imgBulletSMS" width="18" height="18" alt="bullet" /> CHATBOTS A LA MEDIDA
        </div>
        <div class="col-6 col-md-2 my-1 text-2">
          <img :src="imgBulletSMS" width="18" height="18" alt="bullet" /> PLANTILLAS PREDEFINIDAS
        </div>
        <div class="col-6 col-md-2 my-1 text-2">
          <img :src="imgBulletSMS" width="18" height="18" alt="bullet" /> CAPTACIÓN DE LEADS
        </div>
        <div class="col-6 col-md-2 my-1 text-2">
          <img :src="imgBulletSMS" width="18" height="18" alt="bullet" /> SERVICIO AL CLIENTE
        </div>
        <div class="col-6 col-md-2 my-1 text-2">
          <img :src="imgBulletSMS" width="18" height="18" alt="bullet" /> SISTEMA OMNI-CANAL
        </div>
        <div class="col-6 col-md-2 my-1 text-2">
          <img :src="imgBulletSMS" width="18" height="18" alt="bullet" /> CHATS PERSONALIZABLES
        </div>
        <div class="col-6 col-md-2 my-1 text-2">
          <img :src="imgBulletSMS" width="18" height="18" alt="bullet" /> TABLEROS DE CONTROL
        </div>
        <div class="col-6 col-md-2 my-1 text-2">
          <img :src="imgBulletSMS" width="18" height="18" alt="bullet" /> PLATAFORMA ONLINE (APP)
        </div>
        <div class="col-6 col-md-2 my-1 text-2">
          <img :src="imgBulletSMS" width="18" height="18" alt="bullet" /> HISTORIAL DE CONVERSACIONES
        </div>
      </div>
    </article>
  </section>
</template>

<script>
// import imgBulletSMS from '@/assets/img/FreeAdvice/wsp_bullet.png'

export default {
  name: 'FunctionsComponent',
  data: () => ({
    imgBulletSMS: '@/assets/img/FreeAdvice/wsp_bullet.png',
    preHeaderTitle: 'TODAS LAS FUNCIONES',
    title: 'EN UN SOLO LUGAR',
  })
}
</script>

<style scoped>
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
    font-size: 1rem;
  }

  .text strong {
    font-weight: bold;
  }

  .color-1 {
    color: #F5369E;
  }
  .color-2 {
    color: #A153CE;
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

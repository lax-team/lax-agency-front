<template>
  <!-- slider area start here -->
  <section>
    <article class="row">
        <div class="col-12 col-md-4 col-lg-5 mx-auto d-flex justify-content-center">
          <PictureSMS />
        </div>
        <div class="col-11 col-md-7 col-lg-6 mx-auto">
          <h1 class="display-1 py-0 my-0 pt-5 title-1 font-family-MonumentExtended-Black text-center">
            {{data.title1}}
          </h1>
          <p class="text-justify text">
            El <strong class="color-1">80%</strong> de las personas esperan que las empresas interactúen con
            ellos en canales móviles.
          </p>
          <p class="text-justify text">
            El <strong class="color-2">90%</strong> de las personas que reciben un SMS <strong class="color-2">LO LEEN EN MENOS
            DE 3 MINUTOS.</strong> 
          </p>
          <p class="text-justify text">
            Gracias a una tasa de apertura del <strong class="color-3">96%</strong>, la mensajería SMS es una
            de las formas <strong class="color-3">MÁS EFECTIVAS PARA COMUNICAR MENSAJES
            DE MARCA.</strong>
          </p>

          <div class="text-center pt-3">
            <span class="display-2 py-0 my-0 pre-header font-family-MonumentExtended-Light"> 
              {{ data.preHeaderTitle2 }} 
            </span>
          </div>
          <h1 class="display-1 py-0 my-0 title-1 font-family-MonumentExtended-Black text-center">
            {{data.title2}}
          </h1>
          <div class="row mb-4">
            <div class="col-12 col-sm-6 col-md-3 my-1 text-2 container-bullet">
              <div class="">                
                <img :src="imgBulletSMS" width="15" height="15" alt="bullet" /> 
                <span class="bullet">ENVÍOS MASIVOS Y PESONALIZADOS</span>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-3 my-1 text-2 container-bullet">
              <div class="">                
                <img :src="imgBulletSMS" width="15" height="15" alt="bullet" /> 
                <span class="bullet">ESTADÍSTICAS EN TIEMPO REAL</span>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-3 my-1 text-2 container-bullet">
              <div class="">                
                <img :src="imgBulletSMS" width="15" height="15" alt="bullet" /> 
                <span class="bullet">OPCIÓN DE SMS OTP</span>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-3 my-1 text-2 container-bullet">
              <div class="">                
                <img :src="imgBulletSMS" width="15" height="15" alt="bullet" /> 
                <span class="bullet">INTEGRACIONES API</span>
              </div>
            </div>
          </div>
        </div>
    </article>
  </section>
  <!-- slider area end here -->
</template>

<script>
import PictureSMS from './PictureSMS.vue';
import imgBulletSMS from '@/assets/img/SMS/bullet_SMS.png'

export default {
  name: 'WhySMS',
  components: { PictureSMS},
  data: () => ({
    imgBulletSMS,
    data: {
      title1: '¿POR QUÉ ENVIAR SMS?',
      preHeaderTitle2: 'TODAS LAS FUNCIONES',
      title2: 'EN UN SOLO LUGAR',
    }
  })
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
    font-size: 2rem;
  }

  .text-2 {
    color: black;
    font-weight: 600;
  }

  .text strong {
    font-weight: bold;
  }

  .color-1 {
    color: #A153CE;
  }
  .color-2 {
    color: #F5369E;
  }
  .color-3 {
    color: #BC43BA;
  }

  .bullet {
    font-size: 1.2rem;
  }

  @media (max-width: 890px) {
    .pre-header {
      font-size: 1.5rem;
    }

    .title-1 {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 575px) {
    .text {
      font-size: 1.5rem;
    }

    .container-bullet {
      display: flex;
      justify-content: center;
    }

    .bullet {
      font-size: .75rem;
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
      font-size: .9rem;
    }
  }
</style>
<template>
  <!-- slider area start here -->
  <section>
    <article class="row">
      <div class="col-12 col-md-4 col-lg-5 mx-auto d-flex justify-content-center">
        <PictureHost />
      </div>
      <div class="col-11 col-md-7 col-lg-6 mx-auto">
        <p class="text-justify text">
          En este espacio conversaremos sobre <strong class="color-1">la importancia de la
          mensajería de texto SMS en las campañas de
          comunicación</strong> y te daremos algunos tips claves para
          potencializar tu estrategia de contactabilidad.
        </p><br />
        <p class="text-justify text">
          Además, nos acompañará un invitado especial que nos
          contará sobre su experiencia con estrategias de SMS.
        </p>
        <div class="row">
          <div class="col">
            <h1 class="title text-center my-3 color-2">¡TE ESPERAMOS!</h1>
          </div>
        </div>
        <div class="row">
          <div class="col mx-auto text-center text">
            <p><strong class="title my-3 color-3">FECHA:</strong></p>
            <strong>Miércoles, 27 de julio de 2022</strong>
          </div>
          <div class="col mx-auto text-center text">
            <p><strong class="title my-3 color-1">HORA:</strong></p>
            <strong>
              17:00<br/>
              (hora de Colombia)
            </strong>
          </div>
        </div>
      </div>
    </article>
    <article class="row mt-3 mb-5">
      <div class="col-10 col-md-6 col-lg-4 mx-auto">
        <a href="#form-webinar">
          <img v-if="!isHoverBtn" style="cursor: pointer;"  :src="btnRegister" @mouseover="isHoverBtn = true" />
          <img v-else style="cursor: pointer;" class="show-hover" :src="btnRegisterHover" @mouseleave="isHoverBtn = false" />
        </a>
      </div>
    </article>
  </section>
  <!-- slider area end here -->
</template>

<script>
import PictureHost from './PictureHost.vue';
import btnRegister from '@/assets/img/webinar/webinar_btn_register.png'
import btnRegisterHover from '@/assets/img/webinar/webinar_btn_register_hover.png'

export default {
  name: 'InformationWebinar',
  components: { PictureHost }, 
  data: () => ({
    btnRegister,
    btnRegisterHover,
    isHoverBtn: false,
  })
};
</script>

<style lang="scss" scoped>
  .title {
    font-size: 1.7rem;
  }

  .text {
    color: black;
    font-size: 1.3rem;
    line-height: 1.5rem;
  }

  .text strong {
    font-weight: bold;
  }

  .color-1 {
    color: #F5369E;
  }
  .color-2 {
    color: #7A54DB;
  }
  .color-3 {
    color: #BD46BB;
  }

  @media (max-width: 575px) {
    .text {
      font-size: 1.0rem;
    }
  }

  @media (max-width: 380px) {
    .text {
      font-size: .7rem;
    }
  }
</style>
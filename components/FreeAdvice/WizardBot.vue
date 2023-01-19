<template>
  <!-- slider area start here -->
  <section class="mt-4">
    <article class="row">
      <div class="col-11 col-md-7 col-lg-6 mx-auto">
        <div class="row">
          <div class="col-12 col-md-11 mx-auto">
            <h1 class="display-1 py-0 my-0 title-1 font-family-MonumentExtended-Black text-center">
              WIZARD BOT
            </h1>
            <div class="text-center">
              <span class="display-2 py-0 my-0 pre-header font-family-MonumentExtended-Light">
                CREA CHATBOTS SIN CÓDIGO
              </span>
            </div>
            <div class="mx-auto">
              <p class="text-justify text">
                Crea tus propios chatbots en minutos con nuestra función
                de automatización “WizardBot”.
              </p>
            </div>
            <PercentageWizardBot />
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4 col-lg-5 mx-auto d-flex justify-content-center">
        <PictureWizardBot />
      </div>
    </article>
    <article class="row mb-3">
      <div class="col-12 d-flex justify-content-center">
        <img style="width: 100;" :src="imgDivider" />
      </div>
    </article>
  </section>
  <!-- slider area end here -->
</template>

<script>
import PercentageWizardBot from './PercentageWizardBot.vue';
import PictureWizardBot from './PictureWizardBot.vue';
// import imgDivider from '@/assets/img/FreeAdvice/wsp_divider.png'

export default {
  name: 'WizardBot',
  components: { PictureWizardBot, PercentageWizardBot },
  data: () => ({
    imgDivider: '@/assets/img/FreeAdvice/wsp_divider.png'
  })
};
</script>

<style lang="scss" scoped>
  .pre-header {
    color: #f5369e;
    font-size: 2.5rem;
    padding: 0 !important;
    margin: 0 !important;
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
      font-size: 1.5rem;
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

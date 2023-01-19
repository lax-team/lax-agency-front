<template>
  <!-- slider area start here -->
  <section>
    <article class="container-banner">
      <img class="img-banner-1 img-fluid" :src="imgBanner" />
      <div class="center-right">
        <TextContact />
      </div>
    </article>
  </section>
  <!-- slider area end here -->
</template>

<script>
import TextContact from './TextContact.vue';
import imgBanner from '@/assets/img/freeAdvice/wsp_banner.png'

export default {
  name: 'ContactComponent',
  components: { TextContact },
  data: () => ({
    imgBanner,
  })
};
</script>

<style lang="scss" scoped>
  .container-banner {
    position: relative;
  }

  .center-right {
    position: absolute;
    top: 32.5%;
    left: 35%;
    right: 15%;
  }

  .img-banner-1 {
    margin-top: 70px;
    height: 60vh;
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 1030px) {
    .img-banner-1 {
      height: 55vh;
      object-fit: fill;
      content:url('@/assets/img/freeAdvice/wsp_banner_dark.png') !important;
    }

    .center-right {
      position: absolute;
      top: 30%;
      left: 5%;
      right: 5%;
      bottom: 0%;
    }
  }

  @media (max-width: 1030px) and (max-height: 800px) {
    .img-banner-1 {
      height: 60vh;
    }

    .center-right {
      top: 30%;
      left: 3%;
      right: 3%;
      bottom: 0%;
    }
  }

  @media (max-width: 1000px) and (max-height: 1400px) {
    .img-banner-1 {
      height: 50vh;
    }

    .center-right {
      top: 30%;
      left: 3%;
      right: 3%;
      bottom: 0%;
    }
  }

  @media (max-width: 570px) and (max-height: 1000px){
    .img-banner-1 {
      height: 40vh;
    }
  }

  @media (max-width: 570px) and (max-height: 900px){
    .img-banner-1 {
      height: 53vh;
    }

    .center-right {
      top: 25%;
      left: 3%;
      right: 3%;
      bottom: 0%;
    }
  }


  @media (max-width: 570px) and (max-height: 690px){
    .img-banner-1 {
      height: 40vh;
    }

    .center-right {
      top: 40%;
      left: 3%;
      right: 3%;
      bottom: 0%;
    }
  }

  @media (max-width: 570px) {
    .img-banner-1 {
      height: 55vh;
    }
    
    .center-right {
      top: 28%;
      left: 3%;
      right: 3%;
      bottom: 0%;
    }
  }

  @media (max-width: 570px) and (min-height: 700px) and (max-height: 790px){
    .img-banner-1 {
      height: 65vh;
    }

    .center-right {
      top: 25%;
      left: 3%;
      right: 3%;
      bottom: 0%;
    }
  }

  @media (max-width: 510px){
    .img-banner-1 {
      height: 30vh;
    }

    .center-right {
      top: 35%;
      left: 3%;
      right: 3%;
      bottom: 0%;
    }
  }

  @media (max-width: 420px){
    .img-banner-1 {
      height: 45vh;
    }

    .center-right {
      top: 40%;
      left: 3%;
      right: 3%;
      bottom: 0%;
    }
  }
</style>
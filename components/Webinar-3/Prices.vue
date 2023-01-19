<template>
  <!-- slider area start here -->
  <section>
    <article class="d-flex justify-content-center mt-5">
      <img style="width: 60%;" :src="textImg" />
    </article>
    <article class="d-flex justify-content-center my-3">
      <img v-if="!isHoverBtn" style="width: 35%; cursor: pointer;" class="show-hover" :src="btnImg" @mouseover="isHoverBtn = true" />
      <img v-else style="width: 35%; cursor: pointer;" class="show-hover" :src="btnImgHover" @mouseleave="isHoverBtn = false" />
    </article>
  </section>
  <!-- slider area end here -->
</template>

<script>
import textImg from '@/assets/img/SMS/title_prices_SMS.png'
import btnImg from '@/assets/img/SMS/prices_btn_whatsapp_SMS.png'
import btnImgHover from '@/assets/img/SMS/prices_btn_whatsapp_SMS_hover.png'
export default {
  name: 'PricesComponent',
  data: () => ({
    textImg,
    btnImg,
    btnImgHover,
    isHoverBtn: false
  })
};
</script>

<style lang="scss" scoped>
  .show-hover {
    animation-name: 'show-hover';
    animation-duration: 1.3s;
  }

  @keyframes show-hover {
    from {opacity: 0.5;}
    to {opacity: 1;}
  }
  .container-banner {
    position: relative;
  }

  .center-right {
    position: absolute;
    top: 30%;
    left: 50%;
    right: 5%;
  }

  .img-banner-1 {
    height: 70vh;
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 1300px) {
    .img-banner-1 {
      height: 55vh;
    }
  }

  @media (max-width: 1000px) {
    .img-banner-1 {
      height: 50vh;
    }
  }

  @media (max-width: 769px) {
    .img-banner-1 {
      height: 45vh;
      object-fit: cover;
      content:url('@/assets/img/SMS/banner_SMS_1_dark.png') !important;
    }

    .center-right {
      position: absolute;
      top: 30%;
      left: 20%;
      right: 20%;
      bottom: 30%;
    }
  }

  @media (max-width: 510px) {
    .center-right {
      position: absolute;
      top: 40%;
      left: 20%;
      right: 20%;
      bottom: 30%;
    }
  }
</style>
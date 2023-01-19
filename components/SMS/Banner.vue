<template>
  <!-- slider area start here -->
  <section>
    <article>
      <img style="width: 100%;" :src="imgBanner" />
    </article>
  </section>
  <!-- slider area end here -->
</template>

<script>
// import imgBanner from '@/assets/img/SMS/banner_SMS_2.png'
export default {
  name: 'BannerComponent',
  data: () => ({
    imgBanner: '@/assets/img/SMS/banner_SMS_2.png'
  })
};
</script>

<style lang="scss" scoped>
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
      height: 40vh;
      object-fit: fill;
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

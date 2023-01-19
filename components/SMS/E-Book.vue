<template>
  <!-- slider area start here -->
  <section>
    <article class="container-banner">
      <img class="img-banner-1 img-fluid" :src="imgBanner" />
      <div class="center-right">
          <FormSendEbook />
      </div>
    </article>
  </section>
  <!-- slider area end here -->
</template>

<script>
import imgBanner from '@/assets/img/SMS/banner_ebook_SMS.png'
import textBanner from '@/assets/img/SMS/ebook_banner_text_SMS.png'
import btnImg from '@/assets/img/SMS/ebook_btn_SMS.png'
import btnImgHover from '@/assets/img/SMS/ebook_btn_SMS_hover.png'
export default {
  name: 'EBookComponent',
  data: () => ({
    imgBanner,
    textBanner,
    btnImg,
    btnImgHover,
    isHoverBtn: false
  })
};
</script>

<style lang="scss" scoped>
  .container-banner {
    position: relative;
  }

  .center-right {
    position: absolute;
    top: 20%;
    left: 50%;
    right: 5%;
  }

  .img-banner-1 {
    margin-top: 70px;
    height: 73vh;
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 1650px) {
    .img-banner-1 {
      height: 78vh;
    }

    .center-right {
      top: 20%;
      left: 45%;
      right: 2%;
    }
  }

  @media (max-height: 800px) {
    .img-banner-1 {
      height: 104vh;
    }
  }

  @media (max-width: 1030px) {
    .img-banner-1 {
      object-fit: fill;
      content:url('@/assets/img/SMS/banner_ebook_SMS_dark.png') !important;
    }

    .center-right {
      position: absolute;
      top: 20%;
      left: 5%;
      right: 5%;
      bottom: 0%;
    }
  }

  @media (max-width: 1030px) and (max-height: 800px) {
    .img-banner-1 {
      height: 92vh;
    }
  }

  @media (max-width: 1030px) and (max-height: 680px) {
    .img-banner-1 {
      height: 100vh;
    }
  }

  @media (max-width: 550px) {
    .img-banner-1 {
      height: 90vh;
    }
    
    .center-right {
      position: absolute;
      top: 13%;
      left: 3%;
      right: 3%;
      bottom: 0%;
    }
  }

  @media (max-width: 550px) and (max-height: 1000px){
    .img-banner-1 {
      height: 74vh;
    }
  }

  @media (max-width: 550px) and (max-height: 900px){
    .img-banner-1 {
      height: 76vh;
    }
  }

  @media (max-width: 550px) and (max-height: 855px){
    .img-banner-1 {
      height: 83vh;
    }
  }
  

  @media (max-width: 550px) and (max-height: 790px){
    .img-banner-1 {
      height: 102vh;
    }
  }

  @media (max-width: 550px) and (max-height: 690px){
    .img-banner-1 {
      height: 105vh;
    }
  }
</style>
<template>
  <!-- slider area start here -->
  <section>
    <article class="container-banner">
      <img class="img-banner-1 img-fluid" :src="imgBackground" />
      <div class="content-left">
        <img :src="text1" class="img-fluid" />
        <img :src="image" class="img-fluid" />
      </div>
      <div class="content-right">
        <FormWebinars />
      </div>
      <div class="content-between">
        <div>
          <img :src="footer1" alt="Footer1" />
        </div>
        <div>
          <img :src="footer2" alt="Footer2" />
        </div>
      </div>
    </article>
  </section>
  <!-- slider area end here -->
</template>

<script>
import imgBackground from '@/assets/img/landing-webinar-2/pop-up-background.png'
import text1 from '@/assets/img/landing-webinar-2/WA_Recurso-11.png'
import image from '@/assets/img/landing-webinar-2/WA_Recurso-10.png'
import footer1 from '@/assets/img/landing-webinar-2/lax_logo.png'
import footer2 from '@/assets/img/landing-webinar-2/datalovers.png'
export default {
  name: 'RegisterToWebinar',
  data: () => ({
    imgBackground,
    text1,
    image,
    footer1,
    footer2,
    isHoverBtn: false,
  }),
}
</script>

<style lang="scss" scoped>
main article {
  padding: 0;
  margin: 0;
}
.container-banner {
  position: relative;
}

.content-left {
  position: absolute;
  top: 5%;
  left: 5%;
  right: 55%;
}

.content-right {
  position: absolute;
  top: 5%;
  left: 50%;
  right: 5%;
}

.content-between {
  position: absolute;
  top: 80%;
  left: 5%;
  right: 5%;
  display: flex;
  justify-content: space-between;
  align-content: center;
}

.img-banner-1 {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

@media (max-width: 1650px) {
  .img-banner-1 {
    height: 100%;
  }

  .content-right {
    top: 5%;
    left: 45%;
    right: 2%;
  }

  .content-between {
    position: absolute;
    top: 92%;
    left: 5%;
    right: 5%;
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
}

@media (max-width: 1030px) {
  .img-banner-1 {
    height: 120vh;
    object-fit: cover;
    content: url('@/assets/img/landing-webinar-2/pop-up-background.png') !important;
  }

  .content-left {
    display: none;
  }

  .content-right {
    position: absolute;
    top: 0%;
    left: 5%;
    right: 5%;
    bottom: 0%;
  }

  .content-between {
    position: absolute;
    top: 95%;
    left: 5%;
    right: 5%;
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
}

@media (max-width: 1030px) and (max-height: 680px) {
  .img-banner-1 {
    height: 120vh;
  }
}

@media (max-width: 1025px) and (max-height: 600px) {
  .img-banner-1 {
    height: 163vh;
  }
}

@media (max-width: 800px) {
  .img-banner-1 {
    height: 120vh;
  }
}

@media (max-width: 550px) {
  .img-banner-1 {
    height: 120vh;
  }
}

@media (max-width: 550px) and (max-height: 1000px) {
  .img-banner-1 {
    height: 115vh;
  }
}

@media (max-width: 550px) and (max-height: 900px) {
  .img-banner-1 {
    height: 115vh;
  }
}

@media (max-width: 550px) and (max-height: 855px) {
  .img-banner-1 {
    height: 120vh;
  }
}

@media (max-width: 550px) and (max-height: 790px) {
  .img-banner-1 {
    height: 142vh;
  }
}

@media (max-width: 550px) and (max-height: 690px) {
  .img-banner-1 {
    height: 155vh;
  }
}

@media (max-width: 320px) and (max-height: 590px) {
  .img-banner-1 {
    height: 173vh;
  }
}
</style>

<template>
  <!-- slider area start here -->
  <section>
    <article class="container-banner mt-2">
      <img class="img-banner-1 img-fluid" :src="imgBackground" />
      <div class="content-left">
        <img :src="textBanner" />
      </div>
      <div class="content-right">
        <FormWebinars />
      </div>
    </article>
  </section>
  <!-- slider area end here -->
</template>

<script>
import imgBackground from '@/assets/img/webinar/webinar_background.png'
import textBanner from '@/assets/img/webinar/webinar_labtop_background.png'
export default {
  name: 'RegisterToWebinar',
  data: () => ({
    imgBackground,
    textBanner,
    isHoverBtn: false,
  }),
}
</script>

<style lang="scss" scoped>
.container-banner {
  position: relative;
}

.content-left {
  position: absolute;
  top: 26%;
  left: 5%;
  right: 55%;
}

.content-right {
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

  .content-right {
    top: 20%;
    left: 45%;
    right: 2%;
  }
}

@media (max-width: 1030px) {
  .img-banner-1 {
    height: 113vh;
    object-fit: cover;
    content: url('@/assets/img/webinar/webinar_background_dark.png') !important;
  }

  .content-left {
    display: none;
  }

  .content-right {
    position: absolute;
    top: 10%;
    left: 5%;
    right: 5%;
    bottom: 0%;
  }
}

@media (max-height: 800px) {
  .img-banner-1 {
    height: 120vh;
  }
}

@media (max-width: 1030px) and (max-height: 800px) {
  .img-banner-1 {
    height: 138.5vh;
  }
}

@media (max-width: 1030px) and (max-height: 680px) {
  .img-banner-1 {
    height: 100vh;
  }
}

@media (max-width: 1025px) and (max-height: 600px) {
  .img-banner-1 {
    height: 163vh;
  }
}

@media (max-width: 800px) {
  .img-banner-1 {
    height: 100vh;
  }
}

@media (max-width: 550px) {
  .img-banner-1 {
    height: 100vh;
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

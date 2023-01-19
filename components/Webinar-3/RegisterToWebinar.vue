<template>
  <div class="main-background" :style="{ background: createBackgroundString }">
    <div class="container">
      <div class="row">
        <div class="col-md-6 order-md-2 mb-4">
          <FormWebinars />
        </div>
        <div class="col-md-6 images-form">
          <!-- <img :src="text1" class="img-fluid" /> -->
          <img :src="image" class="img-fluid" />
        </div>
      </div>

      <footer class="py-5 text-muted text-center text-small">
        <img :src="logo" alt="webinar-logo-aliado" />
      </footer>
    </div>
  </div>
</template>
<script>
import text1 from '@/assets/img/landing-webinar-3/W3_Recurso_last.png'
import image from '@/assets/img/landing-webinar-3/W3_Recurso_last.png'
import logo from '@/assets/img/landing-webinar-3/logo_white_2.png'
export default {
  name: 'RegisterToWebinar',
  data() {
    return {
      text1,
      image,
      logo,
    }
  },
  computed: {
    createBackgroundString() {
      return `linear-gradient(25deg, rgba(0,0,30,1) 2%, rgba(0,44,82,1) 94%)`
    },
  },
}
</script>

<style  scoped>
.container {
  max-width: 1300px;
  /* display: flex;
  justify-content: center;
  align-content: center; */
}

.main-background {
  height: auto;
}

@media (max-width: 450px) {
  .images-form {
    display: none;
  }
  .main-background {
    padding-top: 0;
  }
}
</style>

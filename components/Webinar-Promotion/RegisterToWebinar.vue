<template>
  <div class="main-background" :style="{ background: createBackgroundString }">
    <div class="container">
      <div class="row">
        <div class="col-md-6 order-md-2 mb-4">
          <FormPromotion />
        </div>
        <div class="col-md-6 images-form">
          <!-- <img :src="text1" class="img-fluid" /> -->
          <img
            src="https://storage.googleapis.com/imageslit/LAX/Lax_Agency/WEBINAR_FIN_ANO/Promocional_Recurso%2087.png"
            class="img-fluid"
          />
        </div>
      </div>

      <footer class="mt-5 py-5 text-muted text-center text-small">
        <img
          src="https://storage.googleapis.com/imageslit/LAX/Lax_Agency/Webinar_Sergio/datalovers.png"
          alt="webinar-logo-aliado"
        />
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
      return `linear-gradient(110deg, rgba(171,71,195,0.7175245098039216) 0%, rgba(133,81,213,1) 41%)`
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

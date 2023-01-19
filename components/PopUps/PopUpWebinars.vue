<template>
  <b-modal v-model="dialog" centered>
    <div class="container-banner">
      <nuxt-link to="/webinar-7-consejos-para-iniciar-bien-el-ano">
        <img
          class="img-fluid"
          src="https://storage.googleapis.com/imageslit/LAX/Lax_Agency/Webinar_Sergio/wbn_Recurso%2085.png"
          alt="imagen de fondo"
        />
      </nuxt-link>

      <!-- <a target="_blank" href="http://wa.me/573153551845">
        <img class="img-fluid" :src="imgContent" alt="imagen de fondo" />
      </a> -->
    </div>
  </b-modal>
</template>

<script>
// import imgBackground from '@/assets/img/landing-webinar-2/pop-up-background.png'

// import imgContent from '@/assets/img/home/Promocionales_LAX_Post.png'

export default {
  name: 'PopUpWebinars',
  data: () => ({
    dialog: true,
    // imgBackground,
    // imgContent,
  }),
}
</script>

<style scoped>
.container-banner {
  /* position: relative;
  padding: 0 !important;
  margin: 0 !important; */
  display: flex;
  justify-content: center;
  align-content: center;
}

.background {
  max-height: 40rem;
  width: 100%;
  object-fit: cover;
  border: 3px solid white !important;
}

.img {
  width: 80%;
}

.content {
  position: absolute;
  top: 6%;
  left: 18%;
  right: 18%;
  bottom: 6%;
}

.btn-register {
  background: #f5369e;
  height: 3rem;
  width: 39rem !important;
  font-size: 23px;
  letter-spacing: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 700px) {
  .content {
    top: 7%;
    left: 12%;
    right: 12%;
  }
}

@media (max-width: 467px) {
  .btn-register {
    font-size: 16px;
    letter-spacing: 3px;
  }
}

@media (max-width: 403px) {
  .btn-register {
    font-size: 12px;
  }
}

@media (max-width: 354px) {
  .btn-register {
    font-size: 10px;
  }
}
</style>

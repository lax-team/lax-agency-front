<template>
  <!-- about area start here -->
  <section class="about-area pt-120 pb-70 fix">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 col-md-6 col-lg-5 mx-auto">
          <div
            class="kabout-img mb-50 mr-70 container-img"
            data-aos="zoom-out-up"
            data-swiper-autoplay="10000"
          >

            <img
              :src="require('~/assets/img/about/' + image1)"
              class="img-fluid img-1 z-index"
              alt="about-img"
            />

            <div class="kabout-img-small">
              <img
                :src="require('~/assets/img/about/' + image2)"
                class="img-fluid img-2"
                alt="about-img"
              />
              <div class="kabout-img-small-icon play_btn">
                <span>
                  <i
                    ><img
                      :src="require('~/assets/img/about/logo_no_letters.png')"
                      class="img-fluid z-index"
                      alt="about-img"
                  /></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-8 col-md-6 col-lg-7 mx-auto">
          <div
            class="kabout mb-50"
            data-aos="zoom-out-down"
            data-swiper-autoplay="10000"
          >
            <div class="section-title-wrapper mb-45">
              <h5 class="section-subtitle=custom mb-20">
                {{ setionSubTitle }}
              </h5>
              <h2 class="section-title--custom-1">
                <span
                  style="color: #f5369e; font-size: 2.5rem; letter-spacing: 1px"
                  class="font-family-MonumentExtended-Black"
                  >NUESTRA</span
                >
              </h2>

              <h2 class="section-title--custom-2">
                <span
                  style="color: #f5369e; letter-spacing: 1px"
                  class="font-family-MonumentExtended-Black"
                  >FÓRMULA MÁGICA</span
                >
              </h2>
              <p>
                Nuestro servicio de gestión de clientes genera resultados
                reales en ventas gracias a una fórmula completamente adaptable a cualquier
                compañía de retail.
              </p>
            </div>
            <div class="row">
              <div
                v-for="item in aboutService"
                :key="item.title"
                class="col-sm-6 custom--text"
              >
                <div class="kabout-service mb-30">
                  <h4
                    :style="`color:#${item.color}`"
                    style="margin: 0; padding: 0"
                    class="
                      kabout-service-title
                      font-family-PangramSans-Bold
                    "
                  >
                    {{ item.title1 }}
                  </h4>
                  <h4
                    :style="`color:#${item.color}`"
                    style="letter-spacing: 0px; margin: 0; padding: 0"
                    class="
                      kabout-service-title
                      font-family-MonumentExtended-Black
                    "
                  >
                    {{ item.title2 }}
                  </h4>
                  <p>{{ item.description }}</p>
                </div>
              </div>
            </div>
            <div class="col-md-12 mb-30">
              <h2
                style="color: #7a54db; font-size: 38px"
                class="font-family-PangramSans-Thin"
              >
                UNA FÓRMULA QUE NOS HA DADO
              </h2>
              <h2
                style="color: #7a54db; font-size: 30px; letter-spacing: 1px"
                class="font-family-MonumentExtended-Black"
              >
                MUY BUENOS RESULTADOS
              </h2>
            </div>
            <div class="kabout-btn">
              <NuxtLink
                :to="buttonUrl"
                class="theme-btn border-btn"
                style="font-size: 30px"
                >{{ buttonText }}</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- about area end here -->
</template>

<script>
export default {
  name: 'AboutHome',
  data() {
    return {
      image1: 'img_1.png',
      image2: 'img_2.png',

      setionSubTitle: 'SERVICIO',
      setionDescription: ``,

      aboutService: [
        {
          title1: `+ DE 6`,
          title2: `MILLONES`,
          description: 'DE CLIENTES GESTIONADOS',
          color: 'f5359e',
        },
        {
          title1: `+ DE 40 MIL`,
          title2: `MILLONES`,
          description: 'CONVERTIDOS EN COP',
          color: 'bc43ba',
        },

        {
          title1: `50%`,
          description: 'DE INCREMENTO EN LA PLANTA DE CLIENTES CONTABLES.',
          color: '9e4ccc',
        },
        {
          title1: `4.5%`,
          description: 'DE EFECTIVIDAD EN VENTAS POR CAMPAÑAS',
          color: '7a54db',
        },
      ],

      buttonText: 'CONOCE MÁS',
      buttonUrl: '/customer-management',
    }
  },
}
</script>

<style lang="scss" scoped>
.section-subtitle--custom {
  font-size: 16px;
  position: relative;
  z-index: 1;
  text-transform: uppercase;
  display: inline-block;
  letter-spacing: 2px;
  &:before {
    position: absolute;
    content: '';
    height: 6px;
    width: 100%;
    left: 0px;
    bottom: 1px;
    z-index: -1;
  }
}

.container-img {
  display: flex;
  justify-content: center;
}

@media (max-width: 1224px) {
  .img-1 {
    width: 25rem;
  }
  .img-2 {
    margin-left: 0rem;
    width: 20rem;
  }
}

@media (max-width: 1000px) {
  .img-1 {
    width: 30rem;
  }
  .img-2 {
    margin-left: 1rem;
    width: 25rem;
  }
}

@media (max-width: 850px) {
  .custom--text {
    font-size: 4.5rem;
  }
}

@media (max-width: 670px) {
  .custom--text {
    font-size: 4rem;
  }
}

@media (max-width: 490px) {
  .custom--text {
    font-size: 3.5rem;
    letter-spacing: 4px !important;

  }
  .img-1 {
    width: 20rem !important;
  }
  .img-2 {
    margin-left: 7rem;
    width: 12rem !important;
  }
}
</style>

<template>
  <!-- slider area start here -->
  <section class="slider-area fix position-relative">
    <div class="slider-active">
      <client-only>
        <swiper ref="mySwiper" class="swiper" :options="swiperOptions">
          <!-- @ready="onSwiperRedied"
          @clickSlide="onSwiperClickSlide" -->
          <swiper-slide v-for="item in sliders" :key="item.id">
            <div
              class="single-slider slider-height swiper-slide"
              data-swiper-autoplay="10000"
            >
              <div
                class="slide-bg"
                :style="{
                  backgroundImage:
                    'url(' + require('~/assets/img/home/' + item.image) + ')',
                }"
              ></div>
              <div class="container container--slider--custom">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="kslider z-index banner--custom--width">
                      <h2
                        class="
                          kslider--title--custom
                          mb-40
                          banner--custom--text
                        "
                        data-animation="fadeInUp"
                        data-delay="0.5s"
                      >
                        <span style="font-weight: 100">Incrementamos</span>
                        <br />
                        <span style="color: #7a54db">LAS VENTAS</span> <br />
                        <span
                          style="
                            color: #bafc4f;
                            font-weight: 100;
                            text-align: center !important;
                          "
                          class="font-family-Barcelony text-center"
                          >a través de</span
                        >
                        <br />
                        <span class="font-family-PangramSans-Thin"
                          >UN VERDADERO</span
                        >
                        <br />
                        <span
                          style="color: #f5369e; letter-spacing: -3px"
                          class="font-family-MonumentExtended-Black"
                          >RETAIL CRM</span
                        >
                      </h2>

                      <!-- <h2
                        class="kslider--title mb-40"
                        data-animation="fadeInUp"
                        data-delay="0.5s"
                        v-html="item.title"
                      >
                        {{ item.title }}
                      </h2> -->

                      <div
                        class="kslider--btn"
                        data-animation="fadeInUp"
                        data-delay="0.7s"
                      >
                        <a
                          :href="item.url"
                          class="theme-btn btn--banner--custom"
                          >{{ item.button }}</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div class="slide-shape shape-1">
                <img
                  :src="
                    require('~/assets/img/slider/' + item.shape1)
                  "
                  class="img-fluid"
                  alt="shape-img"
                />
              </div>
              <div class="slide-shape shape-2">
                <img
                  :src="
                    require('~/assets/img/slider/' + item.shape2)
                  "
                  class="img-fluid"
                  alt="shape-img"
                />
              </div> -->
            </div>
          </swiper-slide>

          <!-- If we need pagination -->
          <div class="slider-paginations slide-dots"></div>
        </swiper>
      </client-only>
    </div>
  </section>
  <!-- slider area end here -->
</template>

<script>
// import 'swiper/swiper.scss';

export default {
  name: 'SwiperSlider4',
  data() {
    return {
      sliders: [
        {
          id: '1',
          image: 'web_home_banner_1.png',
          text1: 'Incrementamos',
          text2: 'LAS VENTAS',
          text3: 'a través de',
          text4: 'UN VERDADERO',
          text5: 'RETAIL CRM',
          button: 'QUIERO SABER MÁS',
          url: '#form-footer',
          shape1: 'slider-shape-1.png',
          shape2: 'slider-shape-2.png',
        },
      ],
      swiperOptions: {
        loop: true,
        effect: 'fade',
        slidesPerView: 1,
        centeredSlides: false,
        spaceBetween: 0,
        paginationClickable: false,
        autoplay: {
          delay: 10000,
        },
        pagination: {
          el: '.slider-paginations',
          clickable: false,
        },
      },
    }
  },
  methods: {
    // onSwiperRedied(swiper) {
    //   console.log('Swiper redied!', swiper)
    // },
    // onSwiperClickSlide(index, reallyIndex) {
    //   console.log('Swiper click slide!', reallyIndex)
    // },
  },
}
</script>

<style lang="scss" scoped>
.btn--banner--custom {
  margin-top: 10px;
  font-size: 25px;
}

.banner--title--custom {
  line-height: 1;
}

.banner--custom--width {
  max-width: 700px;
  text-align: left;
}

@media (max-width: 1400px) {
  .swiper {
    height: 90vh;
  }
  .slide-bg {
    height: 85vh;
  }
  .banner--custom--text {
    // margin-top: -13rem;
    font-size: 3.5rem;
  }
}


@media (max-width: 1025px) {
  .swiper {
    height: 80vh;
  }
  .slide-bg {
    height: 85vh;
  }
  .banner--custom--text {
    margin-top: -13rem;
    font-size: 3.5rem;
  }
}

@media (max-width: 767px) {
  .slide-bg {
    height: 85vh;
  }
  .banner--custom--text {
    font-size: 4rem;
    margin-top: -5rem;
  }
}

@media (max-width: 490px) {
  .banner--custom--text {
    font-size: 2rem;
    margin-top: -2rem;
    letter-spacing: 4px !important;
  }
}
</style>

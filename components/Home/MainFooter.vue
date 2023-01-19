<template>
  <!-- slider area start here -->
  <section class="slider-area fix position-relative">
    <div class="slider-active">
      <client-only>
        <swiper
          ref="mySwiper"
          class="swiper"
          :options="swiperOptions"
          @ready="onSwiperRedied"
          @clickSlide="onSwiperClickSlide"
        >
          <swiper-slide v-for="item in sliders" :key="item.id">
            <div
              class="single-slider slider-height--footer--custom swiper-slide"
              data-swiper-autoplay="10000"
            >
              <div
                class="slide-bg"
                :style="{
                  backgroundImage:
                    'url(' + require('~/assets/img/home/' + item.image) + ')',
                }"
              ></div>
              <div class="container container--slider--footer--custom">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="kslider--footer--custom z-index">
                      <h2
                        class="
                          kslider--title--custom
                          font-family-PangramSans-Thin
                          pb-30
                        "
                        data-animation="fadeInUp"
                        data-delay="0.5s"
                      >
                        ¿LISTO PARA UN
                      </h2>

                      <h2
                        style="color: #f5369e"
                        class="
                          kslider--title--custom
                          font-family-MonumentExtended-Black
                        "
                        data-animation="fadeInUp"
                        data-delay="0.5s"
                      >
                        MARKETING
                      </h2>

                      <h2
                        style="color: #f5369e"
                        class="
                          kslider--title--custom
                          font-family-MonumentExtended-Black
                        "
                        data-animation="fadeInUp"
                        data-delay="0.5s"
                      >
                        MÁS HUMANO?
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
                        <NuxtLink
                          to="#"
                          class="theme-btn mt-50 mb-30"
                          style="font-size: 30px"
                          >CONTÁCTANOS</NuxtLink
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
        // Incrementamos
        //
        //
        //
        {
          id: '1',
          image: 'banner_footer.png',
          text1: 'Incrementamos',
          text2: '¿LISTO PARA UN',
          text3: 'MARKETING',
          text4: 'MÁS HUMANO?O',
          button: 'CONTÁCTANOS',
          url: '/',
          shape1: 'slider-shape-1.png',
          shape2: 'slider-shape-2.png',
        },
        // {
        //   id: "2",
        //   image: "slider-2.jpg",
        //   subtitle: "Welcome to digital agency",
        //   title: "Marketing <br>Agency",
        //   button: "Discover more",
        //   url: "/about",
        //   shape1: "slider-shape-1.png",
        //   shape2: "slider-shape-2.png",
        // },
        // {
        //   id: "3",
        //   image: "slider-3.jpg",
        //   subtitle: "Welcome to digital agency",
        //   title: "App Design <br>Agency",
        //   button: "Discover more",
        //   url: "/about",
        //   shape1: "slider-shape-1.png",
        //   shape2: "slider-shape-2.png",
        // },
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
  // methods: {
  //   onSwiperRedied(swiper) {
  //     console.log("Swiper redied!", swiper);
  //   },
  //   onSwiperClickSlide(index, reallyIndex) {
  //     console.log("Swiper click slide!", reallyIndex);
  //   },
  // },
}
</script>

<style lang="scss" scoped></style>

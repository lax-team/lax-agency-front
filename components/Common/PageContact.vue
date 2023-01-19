<template>
  <div>
    <section 
      v-for="item in sliders" :key="item.id"
      class="d-flex justify-content-center align-items-center img-banner-header"
      :style="{backgroundImage: 'url(' + require('@/assets/img/home/' + item.image) + ')',}"
    >
        <div class="row w-100 container-img">
          <div class="col-lg-12 d-flex justify-content-end text-end">
            <div class="kslider--footer--custom z-index">
              <h3
                class="
                  font-family-MonumentExtended-Light
                  title1
                  display-2
                "
                data-animation="fadeInUp"
                data-delay="0.5s"
              >
                {{ item.title1 }}
              </h3>
              <h1
                class="
                  font-family-MonumentExtended-Black
                  title2
                  display-1
                "
                data-animation="fadeInUp"
                data-delay="0.5s"
              >
                {{ item.title2 }}
              </h1>
              <h1
                class="
                  font-family-MonumentExtended-Black
                  title2
                  display-1
                "
                data-animation="fadeInUp"
                data-delay="0.5s"
              >
                {{ item.title3 }}
              </h1>
              <div
                class="kslider--btn mt-4"
                data-animation="fadeInUp"
                data-delay="0.7s"
              >
                <NuxtLink to="#" class="theme-btn">{{
                  item.button
                }}</NuxtLink>
              </div>
            </div>
          </div>
        </div>
    </section>
  </div>
  <!-- 
  <section class="slider-area fix position-relative">
    <div class="slider-active">
      <client-only>
        <swiper ref="mySwiper" class="swiper">
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
                
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </client-only>
    </div>
  </section> -->
</template>

<script>
export default {
  name: 'SwiperSlider4',
  data() {
    return {
      sliders: [
        {
          id: '1',
          image: 'banner_footer.png',
          title1: '¿ESTÁS LISTO PARA UN',
          title2: 'MARKETING RELACIONAL',
          title3: 'MÁS HUMANO?',
          button: '¡HABLEMOS!',
          url: '/',
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
}
</script>

<style lang="scss" scoped>
.container-img {
  padding-right: 20px;
}
.title1 {
  color: white;
  font-size: 3rem;
}
.title2 {
  color: #f5369e;
  font-size: 4rem;
  line-height: 1;
}

.img-banner-header {
  height: 68vh;
  background-repeat: no-repeat;
}

@media (max-width: 1100px) {
  .img-banner-header {
    margin-left: -8rem;
  }

  .title1 {
    font-size: 2rem;
  }
  .title2 {
    font-size: 3rem;
  }
}

@media (max-width: 850px) {
  .title1 {
    font-size: 1.8rem;
  }
  .title2 {
    font-size: 2rem;
  }
}

@media (max-width: 400px) {
  .container-img {
    padding-right: 0px;
  }
}
</style>

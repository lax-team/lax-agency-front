<template>
  <div>
    <div class="text-center pt-50">
      <h2 style="font-size: 60px; line-height: 60px; color: #7a54db">
        <span class="font-family-PangramSans-Thin">MÁS DE</span>
        <span class="font-family-MonumentExtended-Black">80 MARCAS</span>
      </h2>
      <h2
        class="font-family-PangramSans-Thin"
        style="font-size: 60px; line-height: 65px; color: #7a54db"
      >
        HAN CONFIADO
      </h2>
      <h2
        class="font-family-MonumentExtended-Black"
        style="font-size: 60px; line-height: 65px; color: #7a54db"
      >
        EN NUESTRA EXPERIENCIA
      </h2>
    </div>
    <!-- brand area end here -->
    <div class="brand-area pt-100 pb-100">
      <div class="container">
        <div class="brand-active">
          <client-only>
            <swiper
              ref="mySwiper"
              class="swiper"
              :options="swiperOptions"
              @ready="onSwiperRedied"
              @clickSlide="onSwiperClickSlide"
            >
              <swiper-slide v-for="item in brands" :key="item.id">
                <div
                  class="brand-wrapper swiper-slide wow fadeInUp"
                  data-wow-delay=".3s"
                  data-swiper-autoplay="10000"
                >
                  <a :href="item.url"
                    ><img
                      :src="require('@/assets/img/brand/' + item.image)"
                      class="img-fluid"
                      alt="img"
                  /></a>
                </div>
              </swiper-slide>
            </swiper>
          </client-only>
        </div>
      </div>
    </div>
    <!-- brand area start here -->
  </div>
</template>

<script>
export default {
  name: 'SwiperSlider2',
  data() {
    return {
      brands: [
        {
          id: '1',
          image: 'brand-1.png',
          url: '#',
        },
        {
          id: '2',
          image: 'brand-2.png',
          url: '#',
        },
        {
          id: '3',
          image: 'brand-3.png',
          url: '#',
        },
        {
          id: '4',
          image: 'brand-4.png',
          url: '#',
        },
        {
          id: '5',
          image: 'brand-5.png',
          url: '#',
        },
        {
          id: '6',
          image: 'brand-6.png',
          url: '#',
        },
      ],
      swiperOptions: {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 5000,
        },
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: false,
        },
        breakpoints: {
          550: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
        },
      },
    }
  },
  methods: {
    onSwiperRedied(swiper) {
      console.log('Swiper redied!', swiper)
    },
    onSwiperClickSlide(index, reallyIndex) {
      console.log('Swiper click slide!', reallyIndex)
    },
  },
}
</script>

<style lang="scss" scoped></style>

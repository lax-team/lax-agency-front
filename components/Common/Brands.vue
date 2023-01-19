<template>
  <div class="brand-active py-3">
    <client-only>
      <swiper
        ref="mySwiper"
        class="swiper"
        :options="swiperOptions"
        @ready="onSwiperRedied"
        @clickSlide="onSwiperClickSlide"
      >
        <swiper-slide
          v-for="item in brands"
          v-show="item.showIn.includes(component)"
          :key="item.id"
        >
          <div
            class="brand-wrapper swiper-slide wow fadeInUp"
            data-wow-delay=".3s"
            data-swiper-autoplay="1000"
          >
            <a :href="item.url">
              <img
                :src="require('~/assets/img/brand/' + item.image)"
                class="img-fluid"
                alt="img"
              />
            </a>
          </div>
        </swiper-slide>
      </swiper>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'BrandsComponent',
  props: {
    component: {
      type: String,
      default: String,
    },
  },
  data() {
    return {
      brands: [
        {
          id: 1,
          image: 'brand-1.png',
          url: '#',
          showIn: ['g-clientes'],
        },
        {
          id: 2,
          image: 'brand-2.png',
          url: '#',
          showIn: ['inicio', 'mensajeria'],
        },
        {
          id: 3,
          image: 'brand-3.png',
          url: '#',
          showIn: ['inicio', 'g-clientes', 'mensajeria'],
        },
        {
          id: 4,
          image: 'brand-4.png',
          url: '#',
          showIn: ['inicio'],
        },
        {
          id: 5,
          image: 'brand-5.png',
          url: '#',
          showIn: ['inicio', 'mensajeria'],
        },
        {
          id: 6,
          image: 'brand-6.png',
          url: '#',
          showIn: ['inicio', 'g-clientes'],
        },
        {
          id: 7,
          image: 'brand-7.png',
          url: '#',
          showIn: ['inicio', 'mensajeria'],
        },
        {
          id: 8,
          image: 'brand-8.png',
          url: '#',
          showIn: ['mensajeria'],
        },
        {
          id: 9,
          image: 'brand-9.png',
          url: '#',
          showIn: ['mensajeria'],
        },
        {
          id: 10,
          image: 'brand-10.png',
          url: '#',
          showIn: ['g-clientes'],
        },
        {
          id: 11,
          image: 'brand-11.png',
          url: '#',
          showIn: ['mensajeria'],
        },
        {
          id: 12,
          image: 'brand-12.png',
          url: '#',
          showIn: ['inicio', 'g-clientes', 'mensajeria'],
        },
        {
          id: 13,
          image: 'brand-13.png',
          url: '#',
          showIn: ['g-clientes'],
        },
        {
          id: 14,
          image: 'brand-14.png',
          url: '#',
          showIn: ['g-clientes'],
        },
        {
          id: 15,
          image: 'brand-15.png',
          url: '#',
          showIn: ['mensajeria'],
        },
        {
          id: 16,
          image: 'brand-16.png',
          url: '#',
          showIn: ['g-clientes'],
        },
        {
          id: 17,
          image: 'brand-17.png',
          url: '#',
          showIn: ['inicio', 'g-clientes'],
        },
        {
          id: 18,
          image: 'brand-18.png',
          url: '#',
          showIn: ['g-clientes'],
        },
        {
          id: 19,
          image: 'brand-19.png',
          url: '#',
          showIn: ['inicio', 'mensajeria'],
        },
        {
          id: 20,
          image: 'brand-20.png',
          url: '#',
          showIn: ['inicio', 'g-clientes', 'mensajeria'],
        },
        {
          id: 21,
          image: 'brand-21.png',
          url: '#',
          showIn: ['inicio', 'g-clientes'],
        },
        {
          id: 22,
          image: 'brand-22.png',
          url: '#',
          showIn: ['inicio', 'mensajeria'],
        },
      ],
      swiperOptions: {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        infinite: true,
        autoplay: {
          delay: 2000,
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

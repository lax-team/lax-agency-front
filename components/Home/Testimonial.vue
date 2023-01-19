<template>
  <!-- testimonial area start here -->
  <section class="testimonial-area pt-50">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title-wrapper text-center mb-45">
            <h2
              style="color: #f5369c"
              class="section-title font-family-PangramSans-Thin"
            >
              ELLOS ESTÁN HACIENDO
            </h2>
            <h2
              style="color: #f5369c"
              class="section-title font-family-MonumentExtended-Black"
            >
              MARKETING RELACIONAL CON NOSOTROS
            </h2>
          </div>
        </div>
      </div>

      <div class="testimonial-active">
        <client-only>
          <swiper
            ref="mySwiper"
            class="swiper"
            :options="swiperOptions"
            @ready="onSwiperRedied"
            @clickSlide="onSwiperClickSlide"
          >
            <swiper-slide v-for="item in testimonialContent" :key="item.id">
              <div class="ktestimonial mb-30 swiper-slide">
                <div style="height: 28rem" class="ktestimonial-text">
                  <p>{{ item.description }}</p>
                </div>
                <div class="ktestimonial-author">
                  <div class="ktestimonial-author-img">
                    <img
                      :src="require('@/assets/img/testimonial/' + item.image)"
                      class="img-fluid"
                      alt="client_img"
                    />
                  </div>
                  <div class="ktestimonial-author-text">
                    <h5 class="uppercase">{{ item.clientName }}</h5>
                    <span class="uppercase">{{ item.clientStatus }}</span>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </client-only>
      </div>
    </div>
  </section>
  <!-- testimonial area end here -->
</template>

<script>
export default {
  name: 'SwiperSlider6',
  data() {
    return {
      testimonialContent: [
        {
          id: '1',
          image: 'testimonial_1.png',
          description: `Es imposible ser asertivos y efectivos
            en las estrategias comerciales sin
            conocer a profundidad a nuestros
            clientes. LAX ha sido un gran aliado,
            han guiado de manera efectiva en el
            desarrollo de las estrategias.`,
          clientName: 'TATIANA PALACIOS',
          clientStatus: 'MARKETING DIRECTOR SPIRITO',
        },
        {
          id: '2',
          image: 'testimonial_2.png',
          description: `Recomendaría a LAX por el
            compromiso que tienen con sus
            clientes, la agilidad para responder a
            cualquier solicitud de la marca, en
            resumen, realmente se siente que es
            un área más de la compañía y no un
            proveedor.`,
          clientName: 'VALENTINA GOMEZ',
          clientStatus: 'MARKETING DIRECTOR TOUCHÉ / OPTIONS / ILOT',
        },
        {
          id: '3',
          image: 'testimonial_3.png',
          description: `Con LAX logramos conocer nuestros
            clientes, rentabilizarlos y aumentar las
            ventas. Son un integrante más de
            nuestro equipo, su proactividad nos
            ha permitido mejorar nuestra
            estrategia de mercadeo relacional a
            todo nivel para nuestras marcas.`,
          clientName: 'PABLO LINCE',
          clientStatus: 'MARKETING DIRECTOR MIC / MOVIES / LITTLE MIC',
        },
      ],
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        infinite: false,
        centeredSlides: true,
        autoplay: {
          delay: 5000,
        },
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: false,
        },
        breakpoints: {
          480: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 3,
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

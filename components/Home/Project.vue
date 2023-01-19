<template>
  <!-- project area strat here -->
  <section class="project-area bg-grey pt-115 pb-400 fix">
    <div
      class="common-shape-wrapper wow slideInRight animated"
      data-wow-delay="0ms"
      data-wow-duration="1500ms"
    >
      <div class="common-shape-inner"></div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="section-title-wrapper mb-45">
            <h5 class="section-subtitle mb-20">{{ sectionSubTitle }}</h5>
            <h2 class="section-title">{{ sectionTitle }}</h2>
          </div>
        </div>
        <div class="col-md-4">
          <div class="lol text-md-end">
            <!-- If we need navigation buttons -->
            <div class="project-button-prev slide-prev">
              <font-awesome-icon :icon="['fas', 'long-arrow-alt-left']" />
            </div>
            <div class="project-button-next slide-next">
              <font-awesome-icon :icon="['fas', 'long-arrow-alt-right']" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="project-active">
      <client-only>
        <swiper
          ref="mySwiper"
          class="swiper"
          :options="swiperOptions"
          @ready="onSwiperRedied"
          @clickSlide="onSwiperClickSlide"
        >
          <swiper-slide v-for="item in projectContent" :key="item.id">
            <div class="kproject swiper-slide">
              <img
                :src="require('~/assets/img/project/' + item.image)"
                class="img-fluid"
                alt="project_img"
              />
              <div class="kproject-text">
                <div class="kproject-text-content">
                  <span>{{ item.category }}</span>
                  <h5 class="kproject-text-title">
                    <NuxtLink :to="item.titleUrl">{{ item.title }}</NuxtLink>
                  </h5>
                </div>
                <div class="kproject-text-icon">
                  <NuxtLink
                    :to="item.projectLinkUrl"
                    class="kproject-text-icon-arrow"
                  >
                    <font-awesome-icon
                      :icon="['fas', 'long-arrow-alt-right']"
                    />
                  </NuxtLink>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </client-only>
    </div>
  </section>
  <!-- project area end here -->
</template>

<script>
export default {
  name: 'SwiperSlider5',
  data() {
    return {
      sectionSubTitle: 'Our recent work',
      sectionTitle: 'Work showcase',
      projectContent: [
        {
          id: '1',
          image: 'project-img-1.jpg',
          category: 'Graphic',
          title: 'Fimlor Experience',
          titleUrl: '/projectdetails',
          projectLinkUrl: '/projectdetails',
        },
        {
          id: '2',
          image: 'project-img-2.jpg',
          category: 'Web Design',
          title: 'Using SWR React',
          titleUrl: '/projectdetails',
          projectLinkUrl: '/projectdetails',
        },
        {
          id: '3',
          image: 'project-img-3.jpg',
          category: 'Web Development',
          title: 'Incremental Static',
          titleUrl: '/projectdetails',
          projectLinkUrl: '/projectdetails',
        },
        {
          id: '4',
          image: 'project-img-4.jpg',
          category: 'Networking',
          title: 'Developer Decisions',
          titleUrl: '/projectdetails',
          projectLinkUrl: '/projectdetails',
        },
        {
          id: '5',
          image: 'project-img-1.jpg',
          category: 'Web Design',
          title: 'Process of Taking',
          titleUrl: '/projectdetails',
          projectLinkUrl: '/projectdetails',
        },
        {
          id: '6',
          image: 'project-img-2.jpg',
          category: 'Graphic',
          title: 'Interactive Learning',
          titleUrl: '/projectdetails',
          projectLinkUrl: '/projectdetails',
        },
        {
          id: '7',
          image: 'project-img-3.jpg',
          category: 'Web Devolopment',
          title: 'Refactoring CSS',
          titleUrl: '/projectdetails',
          projectLinkUrl: '/projectdetails',
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

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: false,
        },
        // Navigation arrows
        navigation: {
          nextEl: '.project-button-next',
          prevEl: '.project-button-prev',
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
            slidesPerView: 4,
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

<template>
  <!-- blog area start here -->
  <section
    class="blog-area pt-120"
    :style="{
      backgroundImage:
        'url(' + require('~/assets/img/blog/blog-bg-1.jpg') + ')',
    }"
  >
    <div class="blog-space pb-120">
      <div class="blog-text pt-60" data-aos="zoom-in">
        <div class="section-title-wrapper pr-25 mb-50">
          <h5 class="section-subtitle mb-20">{{ sectionSubTitle }}</h5>
          <h2 class="section-title mb-35">{{ sectionTitle }}</h2>
          <p class="pr-50">{{ sectionTitleDescription }}</p>
        </div>
        <!-- If we need navigation buttons -->
        <div class="kblog-arrow">
          <div class="blog-button-prev slide-prev">
            <font-awesome-icon :icon="['fas', 'long-arrow-alt-left']" />
          </div>
          <div class="blog-button-next slide-next">
            <font-awesome-icon :icon="['fas', 'long-arrow-alt-right']" />
          </div>
        </div>
      </div>
      <div class="blog-active swiper-container">
        <div class="swiper-wrapper">
          <client-only>
            <swiper
              ref="mySwiper"
              class="swiper"
              :options="swiperOptions"
              @ready="onSwiperRedied"
              @clickSlide="onSwiperClickSlide"
            >
              <swiper-slide v-for="item in blogs" :key="item.id">
                <div class="kblog swiper-slide">
                  <div class="kblog-img">
                    <NuxtLink :to="item.imageUrl"
                      ><img
                        :src="require('~/assets/img/blog/' + item.image)"
                        class="img-fluid"
                        alt="blog-img"
                    /></NuxtLink>
                    <span>{{ item.date }}</span>
                  </div>
                  <div class="kblog-text">
                    <div class="kblog-meta">
                      <NuxtLink :to="item.metaAdminUrl">
                        <font-awesome-icon :icon="['fa', 'user-hair']" />{{
                          item.metaAdmin
                        }}</NuxtLink
                      >
                      <NuxtLink :to="item.metaCommentUrl">
                        <font-awesome-icon :icon="['fa', 'comments']" />{{
                          item.metaComment
                        }}</NuxtLink
                      >
                    </div>
                    <h3 class="kblog-text-title mb-20">
                      <NuxtLink :to="item.titleUrl"> {{ item.title }}</NuxtLink>
                    </h3>
                    <div class="kblog-text-link">
                      <NuxtLink :to="item.blogLinkUrl"
                        >{{ item.blogLink }}
                        <font-awesome-icon :icon="['fas', 'chevron-right']" />
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </client-only>
        </div>
      </div>
    </div>
  </section>
  <!-- blog area end here -->
</template>

<script>
export default {
  name: 'SwiperSlider3',
  data() {
    return {
      sectionSubTitle: 'recent blog posts',
      sectionTitle: 'Latest News & Articles',
      sectionTitleDescription:
        'Lorem ipsum onts persp unde omnis iste natus errluptatem acc usantium demque laudantium totam.',
      blogs: [
        {
          id: '1',
          image: 'blog-img-1.jpg',
          imageUrl: '/',
          date: '20 May',
          metaAdmin: 'by Admin',
          metaAdminUrl: '/',
          metaComment: '2 Comments',
          metaCommentUrl: '/',
          title: 'Our Strategy Create Business Growth',
          titleUrl: '/',
          blogLink: 'Read more',
          blogLinkUrl: '/',
        },
        {
          id: '2',
          image: 'blog-img-2.jpg',
          imageUrl: '/',
          date: '21 May',
          metaAdmin: 'by Admin',
          metaAdminUrl: '/',
          metaComment: '2 Comments',
          metaCommentUrl: '/',
          title: 'We work with change oriented executives',
          titleUrl: '/',
          blogLink: 'Read more',
          blogLinkUrl: '/',
        },
        {
          id: '3',
          image: 'blog-img-3.jpg',
          imageUrl: '/',
          date: '22 May',
          metaAdmin: 'by Admin',
          metaAdminUrl: '/',
          metaComment: '2 Comments',
          metaCommentUrl: '/',
          title: 'From banking and insurance to wealth',
          titleUrl: '/',
          blogLink: 'Read more',
          blogLinkUrl: '/',
        },
        {
          id: '4',
          image: 'blog-img-4.jpg',
          imageUrl: '/',
          date: '23 May',
          metaAdmin: 'by Admin',
          metaAdminUrl: '/',
          metaComment: '2 Comments',
          metaCommentUrl: '/',
          title: 'Our Strategy Create Business Growth',
          titleUrl: '/',
          blogLink: 'Read more',
          blogLinkUrl: '/',
        },
        {
          id: '5',
          image: 'blog-img-5.jpg',
          imageUrl: '/',
          date: '24 May',
          metaAdmin: 'by Admin',
          metaAdminUrl: '/',
          metaComment: '2 Comments',
          metaCommentUrl: '/',
          title: 'We work with change oriented executives',
          titleUrl: '/',
          blogLink: 'Read more',
          blogLinkUrl: '/',
        },
      ],
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: false,
        infinite: false,
        autoplay: {
          delay: 5000,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: false,
        },
        navigation: {
          nextEl: '.blog-button-next',
          prevEl: '.blog-button-prev',
        },
        breakpoints: {
          480: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 2,
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

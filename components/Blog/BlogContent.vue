<template>
  <!-- blog area start  -->
  <section class="blog-2 pt-120 pb-115">
    <div class="container">
      <div class="row">
        <div
          class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 mb-30"
          v-for="item in blog"
          :key="item.image"
        >
          <div class="kblog">
            <div class="kblog-img">
              <NuxtLink :to="item.imageUrl"
                ><img
                  :src="require('@/assets//img/blog/' + item.image)"
                  class="img-fluid"
                  alt="blog-img"
              /></NuxtLink>
              <span>{{ item.date }}</span>
            </div>
            <div class="kblog-text">
              <div class="kblog-meta">
                <NuxtLink :to="item.metaAdminUrl"
                  ><font-awesome-icon :icon="['fa', 'circle-user']" />
                  {{ item.metaAdmin }}</NuxtLink
                >
                <NuxtLink :to="item.metaCommentUrl"
                  ><font-awesome-icon :icon="['far', 'comments']" />
                  {{ item.metaComment }}</NuxtLink
                >
              </div>
              <h3 class="kblog-text-title mb-20">
                <NuxtLink :to="item.titleUrl"> {{ item.title }}</NuxtLink>
              </h3>
              <div class="kblog-text-link">
                <NuxtLink :to="item.blogLinkUrl"
                  >{{ item.blogLink }}
                  <font-awesome-icon :icon="['fa', 'chevron-right']"
                /></NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div
            class="basic-pagination mt-20 wow fadeInUp"
            data-wow-delay=".5s"
            style="
              visibility: visible;
              animation-delay: 0.5s;
              animation-name: fadeInUp;
            "
          >
            <ul>
              <li>
                <span aria-current="page" class="page-numbers current">1</span>
              </li>
              <li><a class="page-numbers" href="#">2</a></li>
              <li><a class="page-numbers" href="#">3</a></li>
              <li>
                <a class="next page-numbers" href="#">
                  <i>
                    <font-awesome-icon :icon="['fa', 'arrow-right-long']" />
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- blog area end  -->
</template>

<script>
export default {
  data() {
    return {
      blog: [
        {
          image: 'blog-img-9.jpg',
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
          image: 'blog-img-10.jpg',
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
          image: 'blog-img-11.jpg',
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
          image: 'blog-img-6.jpg',
          imageUrl: '/',
          date: '23 May',
          metaAdmin: 'by Admin',
          metaAdminUrl: '/',
          metaComment: '2 Comments',
          metaCommentUrl: '/',
          title: 'Representation on Digital platforms.',
          titleUrl: '/',
          blogLink: 'Read more',
          blogLinkUrl: '/',
        },
        {
          image: 'blog-img-7.jpg',
          imageUrl: '/',
          date: '24 May',
          metaAdmin: 'by Admin',
          metaAdminUrl: '/',
          metaComment: '2 Comments',
          metaCommentUrl: '/',
          title: 'Everything to keep in mind when designing',
          titleUrl: '/',
          blogLink: 'Read more',
          blogLinkUrl: '/',
        },
        {
          image: 'blog-img-8.jpg',
          imageUrl: '/',
          date: '24 May',
          metaAdmin: 'by Admin',
          metaAdminUrl: '/',
          metaComment: '2 Comments',
          metaCommentUrl: '/',
          title: 'A step-by-step adding authentication',
          titleUrl: '/',
          blogLink: 'Read more',
          blogLinkUrl: '/',
        },
      ],
    }
  },
}
</script>

<style scoped>
</style>

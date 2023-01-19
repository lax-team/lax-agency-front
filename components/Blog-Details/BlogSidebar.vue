<template>
  <div class="sidebar-wrap">
    <div class="sidebar-search-from mb-30">
      <form action="#">
        <input type="text" placeholder="Search here" />
        <button type="submit">
          <i><font-awesome-icon :icon="['fas', 'search']" /></i>
        </button>
      </form>
    </div>

    <div
      class="widget_-latest-posts mb-30"
      v-for="item in postTitle"
      :key="item.title"
    >
      <h4 class="bs-widget-title mb-25">{{ item.title }}</h4>
      <div class="sidebar__widget-content">
        <div
          class="rc-post d-flex mb-15"
          v-for="item in rcPost"
          :key="item.image"
        >
          <div class="rc-thumb">
            <NuxtLink :to="item.imageUrl"
              ><img
                :src="require('@/assets/img/blog/' + item.image)"
                class="img-fluid"
                alt="blog-img"
            /></NuxtLink>
          </div>
          <div class="rc-text">
            <div class="kblog-meta">
              <NuxtLink :to="item.bdMetaUrl"
                ><font-awesome-icon :icon="['fa', 'circle-user']" />
                {{ item.bdMetaAuthor }}</NuxtLink
              >
            </div>
            <h5>
              <NuxtLink :to="item.bdMetaUrl">{{ item.bdMetaTitle }}</NuxtLink>
            </h5>
          </div>
        </div>
      </div>
    </div>

    <div
      class="widget_categories grey-bg mb-30"
      v-for="item in catTitle"
      :key="item.title"
    >
      <h4 class="bs-widget-title pl-15">{{ item.title }}</h4>
      <ul v-for="item in rcCategories" :key="item.catLink">
        <li>
          <NuxtLink :to="item.catLinkUrl"
            >{{ item.catLink }}
            <font-awesome-icon :icon="['fa', 'circle-user']"
          /></NuxtLink>
        </li>
      </ul>
    </div>

    <div class="widget_tag_cloud" v-for="item in tagTitle" :key="item.title">
      <h4 class="bs-widget-title mb-25">{{ item.title }}</h4>
      <div class="tagcloud">
        <NuxtLink
          :to="item.tagLinkUrl"
          class="tag-cloud-link"
          v-for="item in rcTags"
          :key="item.tagLink"
          >{{ item.tagLink }}</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postTitle: [
        {
          title: 'Latest Posts',
        },
      ],
      catTitle: [
        {
          title: 'Categories',
        },
      ],
      tagTitle: [
        {
          title: 'Tags',
        },
      ],
      rcPost: [
        {
          image: 'sidebar-post-img1.jpg',
          imageUrl: '/',
          bdMetaAuthor: 'by Admin',
          bdMetaUrl: '/',
          bdMetaTitle: 'experiences that connect us',
        },
        {
          image: 'sidebar-post-img2.jpg',
          imageUrl: '/',
          bdMetaAuthor: 'by Admin',
          bdMetaUrl: '/',
          bdMetaTitle: 'From banking and insurance to',
        },
        {
          image: 'sidebar-post-img3.jpg',
          imageUrl: '/',
          bdMetaAuthor: 'by Admin',
          bdMetaUrl: '/',
          bdMetaTitle: 'We work with you to business',
        },
      ],

      rcCategories: [
        {
          catLink: 'Web Developement',
          catLinkUrl: '/',
        },
        {
          catLink: 'Graphic Design',
          catLinkUrl: '/',
        },
        {
          catLink: 'SEO &amp; Content Writting',
          catLinkUrl: '/',
        },
        {
          catLink: 'Digital Marketing',
          catLinkUrl: '/',
        },
        {
          catLink: 'App Development',
          catLinkUrl: '/',
        },
      ],

      rcTags: [
        {
          tagLink: 'Graphics',
          tagLinkUrl: '/',
        },
        {
          tagLink: 'Design',
          tagLinkUrl: '/',
        },
        {
          tagLink: 'Business',
          tagLinkUrl: '/',
        },
        {
          tagLink: 'Development',
          tagLinkUrl: '/',
        },
        {
          tagLink: 'Technology',
          tagLinkUrl: '/',
        },
        {
          tagLink: 'Content',
          tagLinkUrl: '/',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
</style>

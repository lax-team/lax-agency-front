<script>
import Header from '../Common/Header'
import PageFooter from '../Common/PageFooter'
import Brands from '../Common/Brands.vue'
import PageContact from '../Common/PageContact.vue'
import FloatingActionButton from '../Common/FloatingActionButton.vue'
// import PopUpWebinars from '../PopUps/PopUpWebinars.vue'
import MainSlider from './MainSlider'
import Services from './Services'
// import CommonCta from '../Common/CommonCta'
import About from './About.vue'
// import Project from './Project.vue'
import Video from './Video.vue'
import Testimonial from './Testimonial'
// import Trust from '../Common/Trust'
// import Blog from './Blog'
// import Quality from './Quality'

export default {
  name: 'App',
  components: {
    Header,
    PageFooter,
    MainSlider,
    Services,
    // CommonCta,
    About,
    // Project,
    Video,
    Testimonial,
    // Trust,
    // Blog,
    // Quality,
    PageContact,
    Brands,
    FloatingActionButton,
    // PopUpWebinars,
  },
}
</script>

<template>
  <main>
    <!-- header-area-start -->
    <Header />
    <!-- header-area-end -->
    <FloatingActionButton />

    <!-- slider area start here -->
    <MainSlider />
    <!-- slider area start end -->

    <!-- about area start here -->
    <About />
    <!-- about area end here -->

    <!-- service area start here -->
    <Services />
    <!-- service area end here -->

    <!-- cta area start here -->
    <!-- <CommonCta /> -->
    <!-- cta area end here -->

    <!-- project area strat here -->
    <!-- <Project /> -->
    <!-- project area end here -->

    <!-- video area start here -->
    <Video />
    <!-- video area end here -->

    <!-- testimonial area start here -->
    <Testimonial />
    <!-- testimonial area end here -->

    <!-- brand area end here -->
    <div class="container-fluid">
      <div class="row bg-brands mb-5">
        <div class="col-12 col-md-7 mx-auto">
          <Brands component="inicio" />
        </div>
      </div>
    </div>
    <!-- brand area start here -->

    <!-- slider area start here -->
    <PageContact />
    <!-- slider area start end -->

    <!-- PageFooter area start here -->
    <PageFooter />
    <!-- PageFooter area end here -->

    <!-- Modals -->
<!--    <PopUpWebinars />-->
  </main>
</template>

<style>
.bg-brands {
  background-color: #f7f7f7 !important;
}

.show-hover {
  animation-name: 'show-hover';
  animation-duration: 1.3s;
}

@keyframes show-hover {
  from {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
}
</style>

<template>
  <main>
    <Header />
    <RegisterToWebinar />
    <Banner />
    <FloatingActionButton />
    <div class="container-fluid">
      <Information />
    </div>
    <FooterWebinar />
  </main>
</template>

<script>
import FloatingActionButton from '../Common/FloatingActionButton.vue';
import Header from '../Common/Header.vue';
import Banner from './Banner.vue';
import FooterWebinar from './FooterWebinar.vue';
import RegisterToWebinar from './RegisterToWebinar.vue';
import Information from './Information.vue';

export default {
  name: "WebinarComponent",
  components: {Header, Information, Banner, FooterWebinar, FloatingActionButton, RegisterToWebinar},

};
</script>
<style>
</style>
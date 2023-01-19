<template>
  <main>
    <Header />
    <EBook />
    <Banner />
    <FloatingActionButton />
    <div class="container-fluid">
      <WhySMS />
    </div>
    <FooterSMS />
  </main>
</template>

<script>
import FloatingActionButton from '../Common/FloatingActionButton.vue';
import Header from '../Common/Header.vue';
import Banner from './Banner.vue';
import EBook from './E-Book.vue';
import FooterSMS from './FooterSMS.vue';
import WhySMS from './WhySMS.vue';

export default {
  name: "SMSComponent",
  components: {Header, WhySMS, EBook, Banner, FooterSMS, FloatingActionButton},

};
</script>
<style>
</style>
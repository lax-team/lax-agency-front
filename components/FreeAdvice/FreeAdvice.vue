<template>
  <main>
    <Header />
    <Contact />
    <div class="container-fluid">
      <WhatsappApi />
      <WizardBot />
      <Functions />
    </div>
    <Footer />
  </main>
</template>

<script>
import Header from '../Common/Header.vue'
import Contact from './Contact.vue'
import Footer from './Footer.vue'
import Functions from './Functions.vue'
import WhatsappApi from './WhatsappApi.vue'
import WizardBot from './WizardBot.vue'

export default {
  name: 'FreeAdvice',
  components: {Header, Contact, WhatsappApi, Functions, WizardBot, Footer},

  data() {
    return {
      pageType: 'freeAdvice',
    }
  },
}
</script>

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

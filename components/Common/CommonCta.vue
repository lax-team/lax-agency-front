<template>
  <!-- cta area start here -->
  <section class="cta-area mt--60 z-index" data-aos="fade-up">
    <div class="container">
      <div class="cta-bg bg-theme">
        <div class="cta-number">
          <div class="cta-number-text fix">
            <h3>
              <span class="uppercase">{{ title }}</span>
            </h3>
          </div>
        </div>
        <div class="cta-description">
          <p>{{ description }}</p>
        </div>
        <div class="cta-btn">
          <NuxtLink :to="ctaLinkUrl" class="theme-btn black-btn">{{
            ctaLinkText
          }}</NuxtLink>
        </div>
      </div>
    </div>
  </section>
  <!-- cta area end here -->
</template>

<script>
export default {
  name: 'Cta',
  data() {
    return {
      title: '¿QUIERES ATENCIÓN PESONALIZADA POR UNO DE NUESTROS ACESORES?',
      ctaLinkText: 'CLICK AQUÍ',
      ctaLinkUrl: '/',
    }
  },
}
</script>

<style lang="scss" scoped>
.light-btn {
  background: white;
  color: black;
}
</style>

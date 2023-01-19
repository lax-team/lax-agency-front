<template>
  <!-- slider area start here -->
  <section>
    <article>
      <img style="width: 100%;" :src="imgFooter" />
    </article>
  </section>
  <!-- slider area end here -->
</template>

<script>
// import imgFooter from '@/assets/img/FreeAdvice/wsp_footer.png'
export default {
  name: 'FooterComponent',
  data: () => ({
    imgFooter: '@/assets/img/FreeAdvice/wsp_footer.png'
  })
};
</script>

<style lang="scss" scoped>
</style>

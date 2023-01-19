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
import imgFooter from '@/assets/img/SMS/footer_lax_SMS.png'
export default {
  name: 'FooterSMS',
  data: () => ({
    imgFooter
  })
};
</script>

<style lang="scss" scoped>
</style>
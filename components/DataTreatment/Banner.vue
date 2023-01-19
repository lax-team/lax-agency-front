<template>
  <!-- slider area start here -->
  <section>
    <img class="img-banner" :src="imgBanner" />
  </section>
  <!-- slider area end here -->
</template>

<script>
import imgBanner from '@/assets/img/dataTreatment/banner_data_tratment.png'
export default {
  name: 'BannerComponent',
  data: () => ({
    imgBanner
  })
};
</script>

<style lang="scss" scoped>
    .img-banner {
        width: 100%;
    }
</style>
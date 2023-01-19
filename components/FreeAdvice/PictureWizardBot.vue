<template>
  <div class="d-flex align-content-center my-auto">
    <img class="img mt-2" :src="picture" />
  </div>
</template>

<script>
// import picture from '@/assets/img/FreeAdvice/wsp_devices.png'

export default {
  name: 'PictureWizardBot',
  data: () => ({
    picture: '@/assets/img/FreeAdvice/wsp_devices.png'
  })
};
</script>

<style lang="scss" scoped>
  .img {
    width: 35rem;
    height: 25rem;
  }

  @media (max-width: 1200px) {
    .img {
      height: 20rem;
      width: 25rem;
    }
  }

  @media (max-width: 1100px) {
    .img {
      height: 18rem;
      width: 23rem;
    }
  }

  @media (max-width: 995px) {
    .img {
      height: 13rem;
      width: 23rem;
    }
  }

  @media (max-width: 768px) {
    .img {
      width: 24rem;
      height: 15rem;
    }
  }

  @media (max-width: 680px) {
    .img {
      width: 24rem;
    }
  }

  @media (max-width: 550px) {
    .img {
      width: 15rem;
      height: 10rem;
    }
  }
</style>

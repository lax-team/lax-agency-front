<template>
  <div class="my-auto">
    <img class="img" :src="picture" alt="WhatsApp"/>
  </div>
</template>

<script>
// import picture from '@/assets/img/FreeAdvice/wsp_pic.png'

export default {
  name: 'PictureWhatsappApi',
  data: () => ({
    picture: '@/assets/img/FreeAdvice/wsp_pic.png'
  })
};
</script>

<style lang="scss" scoped>
  .img {
    width: 25rem;
  }

  @media (max-width: 1100px) {
    .img {
      height: 25rem;
      width: 20rem;
    }
  }

  @media (max-width: 990px) {
    .img {
      height: 30rem;
      width: 25rem;
    }
  }

  @media (max-width: 920px) {
    .img {
      height: 24rem;
    }
  }

  @media (max-width: 768px) {
    .img {
      width: 24rem;
      height: 20rem;
    }
  }

  @media (max-width: 680px) {
    .img {
      width: 24rem;
      height: 30rem;
    }
  }

  @media (max-width: 550px) {
    .img {
      width: 12rem;
      height: 15rem;
    }
  }
</style>

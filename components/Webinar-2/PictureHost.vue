<template>
  <img class="img my-auto" :src="pictureHost" />
</template>

<script>
import pictureHost from '@/assets/img/webinar/webinar_picture_host.png'

export default {
  name: 'BannersComponent',
  data: () => ({
    pictureHost
  })
};
</script>

<style lang="scss" scoped>
  .img {
    width: 28rem;
    height: 30rem;
  }

  @media (max-width: 1100px) {
    .img {
      height: 28rem;
    }
  }

  @media (max-width: 990px) {
    .img {
      height: 23rem;
    }
  }

  @media (max-width: 830px) {
    .img {
      height: 20rem;
    }
  }

  @media (max-width: 768px) {
    .img {
      width: 20rem;
    }

    .img {
      height: 20rem;
    }
  }

  @media (max-width: 550px) {
    .img {
      width: 15rem;
      height: 18rem;
    }
  }
</style>
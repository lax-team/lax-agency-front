<template>
  <img class="img my-auto" :src="picture" />
</template>

<script>
import picture from '@/assets/img/SMS/picture_SMS.png'

export default {
  name: 'BannersComponent',
  data: () => ({
    picture
  })
};
</script>

<style lang="scss" scoped>
  .img {
    width: 28rem;
    height: 42rem;
  }

  @media (max-width: 1100px) {
    .img {
      height: 32rem;
    }
  }

  @media (max-width: 990px) {
    .img {
      height: 30rem;
    }
  }

  @media (max-width: 920px) {
    .img {
      height: 25rem;
    }
  }

  @media (max-width: 767px) {
    .img {
      width: 20rem;
    }
  }

  @media (max-width: 550px) {
    .img {
      width: 12rem;
      height: 15rem;
    }
  }
</style>
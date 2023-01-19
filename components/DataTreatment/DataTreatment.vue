<template>
  <main>
    <Header />
    <Banner style="margin-top: 8rem;" />
    <div class="container-fluid">
      <PointList />
    </div>
  </main>
</template>

<script>
import Header from '../Common/Header.vue';
import Banner from './Banner.vue';
import PointList from './PointList.vue';

export default {
  name: "DataTratment",
  components: {Banner, PointList, Header},
};
</script>

<style scoped>
</style>
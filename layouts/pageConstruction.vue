<template>
  <section class="error--page">
    <div class="container text-center">
      <div class="row">
        <div class="col-12">
          <img
            src="@/assets/img/pageConstruction/img_content.png"
            class="img-fluid"
            alt="img"
          />
          <h1 class="fs-1 mt-20" style="color: #F5369E">SITIO WEB EN CONSTRUCCIÓN</h1>
          <p class="fs-3 mt-20 text-white">
            Este sitio se encuentra en proceso de desarrollo
            Visítanos más tarde
          </p>

          <NuxtLink to="/" style="background:#F5369E" class="theme-btn black-btn mt-2"
            >VOLVER AL INICIO</NuxtLink
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ErrorPage',
  props: ['error'],
  layout: 'error', // you can set a custom layout for the error page
}
</script>

<style lang="css" scoped>
.error--page {
  height: 100vh;
  background-image: url("@/assets/img/pageConstruction/background.png");
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
}
</style>
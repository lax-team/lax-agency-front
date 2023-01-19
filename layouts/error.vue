<template>
  <section class="error--page">
    <div class="container text-center">
      <div class="row">
        <div class="col-12">
          <img
            src="@/assets/img/error_404/404.png"
            class="img-fluid"
            alt="img"
          />
          <h1 class="fs-1 mt-20 text-white">PÁGINA NO ENCONTRADA</h1>
          <p class="fs-3 mt-20 text-white">
            No pudimos encontrar la página que estás buscando
          </p>

          <NuxtLink to="/" class="btn btn-dark btn-lg"
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
  color: white !important;
  height: 100vh;
  background: rgb(245, 54, 158);
  background: linear-gradient(
    25deg,
    rgba(245, 54, 158, 1) 1%,
    rgba(122, 84, 219, 1) 39%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}
</style>
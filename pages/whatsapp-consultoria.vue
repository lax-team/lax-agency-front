<template>
  <FreeAdvice />
</template>

<script>
import FreeAdvice from '../components/FreeAdvice/FreeAdvice.vue'
export default {

  name: 'FreeAdvicePage',
  components: {
    FreeAdvice,
  },
  head() {
    return {
      title: 'Lax - Consultoría gratis',
    }
  },
}
</script>

<style scoped></style>

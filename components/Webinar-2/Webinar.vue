<template>
  <main>
    <RegisterToWebinar />

    <FloatingActionButton />
  </main>
</template>

<script>
import FloatingActionButton from '../Common/FloatingActionButton.vue'
import RegisterToWebinar from './RegisterToWebinar.vue'

export default {
  name: 'WebinarComponent',
  components: {
    FloatingActionButton,
    RegisterToWebinar,
  },
}
</script>
<style>
</style>

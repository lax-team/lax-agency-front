<template>
  <button 
    class="btn btn-whatsapp floating-action-button rounded-circle"
    @click="goToWhatsapp"
  >
    <font-awesome-icon class="icon" :icon="['fab', 'whatsapp']" />
  </button>
</template>

<script>
export default {
  name: 'FloatingActionButton',
  methods: {
    goToWhatsapp() {
      window.open('https://api.whatsapp.com/send?phone=+573153551845&text=%C2%A1Quiero%20conocer%20m%C3%A1s%20sobre%20LAX!%20%F0%9F%98%8E%E2%9C%8C%F0%9F%8F%BB%F0%9F%92%9C')
    }
  }
}
</script>

<style scoped>
  .floating-action-button {
    z-index: 6;
    position: fixed;
    bottom: 2%;
    right: 2%;
    width: 85px;
    height: 85px;
    border: 2px solid white;
  }

  .icon {
    font-size: 45px;
    color: white;
  }

  .btn-whatsapp {
    background-color: #00BB2D !important;
  }

  @media (max-width: 500px) {
    .floating-action-button {
      width: 65px;
      height: 65px;
    }

    .icon {
      font-size: 40px;
    }
  }
</style>
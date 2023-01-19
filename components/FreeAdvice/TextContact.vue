<template>
  <section>
    <div class="section-title-wrapper">
      <div class="d-flex justify-content-center">
        <span class="mt-1 title">
            Escríbenos y solicita 
            <strong class="text-white">COMPLETAMENTE GRATIS</strong>
        </span>
      </div>
      <h2 class="text-center title-2 font-family-MonumentExtended-Black">
        UNA CONSULTORÍA <br />
        CON NUESTROS EXPERTOS
      </h2>
      <div class="d-flex justify-content-center">
        <img v-if="!isHoverBtn" class="show-hover btn-click" :src="btnImg" @click="goToWhatsapp" @mouseover="isHoverBtn = true" />
        <img v-else class="show-hover btn-click" :src="btnImgHover" @click="goToWhatsapp" @mouseleave="isHoverBtn = false" />
      </div>
    </div>
  </section>
</template>

<script>
import btnImg from '@/assets/img/freeAdvice/wsp_button.png'
import btnImgHover from '@/assets/img/freeAdvice/wsp_button_hover.png'

export default {
  name: 'TextContact',
  data() {
    return {    
      btnImg,
      btnImgHover,
      isHoverBtn: false
    }
  },
  methods: {
    goToWhatsapp() {
      window.open('https://api.whatsapp.com/send?phone=+573153551845&text=Hola%20%F0%9F%91%8B%F0%9F%8F%BB%20estoy%20interesado%20en%20la%20consultor%C3%ADa%20gratuita%20de%20WhatsApp%20Bussines%20%F0%9F%98%8E%F0%9F%92%9C')
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 2rem;
  line-height: 2.2rem;
  text-align: center !important;
  color: #B8B8C0;
}

.title-2 {
  margin-top: 15px !important;
  line-height: 2.5rem !important;
  font-size: 2.5rem;
  color: #7A54DB !important;
}

.btn-click {
  width: 30%; 
  cursor: pointer;
}

@media (max-width: 1100px) {
  .btn-click {
    width: 20% !important; 
  }
}

@media (max-width: 510px) {
  .title {
    font-size: 0.9rem;
    line-height: 1rem;
  }

  .title-2 {
    margin-top: 15px !important;
    line-height: 1rem !important;
    font-size: 1.2rem;
  }
}
</style>

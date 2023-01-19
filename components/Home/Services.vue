<template>
  <!-- service area start here -->
  <section class="service-area pt-50 pb-50">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-xl-5 col-lg-6">
          <div
            class="kservice-text mb-50"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h5 class="kservice-text-subtitle--custom mb-15">{{ subtitle }}</h5>
            <h2
              style="letter-spacing: 2px"
              class="kservice-text-title--custom font-family-PangramSans-Thin"
            >
              MENSAJERÍA
            </h2>
            <h2
              style="color: #f5369e; letter-spacing: 2px"
              class="
                kservice-text-title--custom
                font-family-MonumentExtended-Black
              "
            >
              MASIVA
            </h2>

            <p style="color: white; letter-spacing: 2px" class="mb-45">
              {{ description }}
            </p>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6">
          <div
            class="row custom-mar-20"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <div
              v-for="item in serviceBox"
              :key="item.title"
              class="col-sm-6 custom-pad-20"
            >
              <NuxtLink 
                :to="item.url" 
              >
                <div class="kservice text-center mb-20">
                  <div class="kservice-icon">
                    <i><font-awesome-icon :icon="item.f_icon" /></i>
                  </div>
                  <div class="kservice-content">
                    <h5 class="kservice-content-title">
                        {{ item.serviceBoxTitle }}
                    </h5>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- service area end here -->
</template>

<script>
export default {
  name: 'ServicesHome',
  data() {
    return {
      subtitle: 'CÓMO LO HACEMOS',

      description:
        `Nuestra plataforma de mensajería masiva te permite
        comunicarte con tus clientes de una manera segura, rápida y a bajo costo. Tú
        escoges cómo quieres comunicarte con tus clientes para mantenerlos cada vez más
        cerca.`,
      authorImg: 'service-author.png',
      authorName: 'Jessica Brown',
      serviceBox: [
        {
          serviceBoxTitle: 'SMS',
          url: '/descarga-ebook-sms',
          f_icon: ['fa', 'message'],
        },
        {
          serviceBoxTitle: 'E-MAIL',
          url: '/',
          f_icon: ['fa', 'envelope'],
        },
        {
          serviceBoxTitle: 'WHATSAPP',
          url: '/whatsapp-consultoria',
          f_icon: ['fab', 'whatsapp'],
        },
        {
          serviceBoxTitle: 'VOZ',
          url: '/',
          f_icon: ['far', 'handshake'],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>

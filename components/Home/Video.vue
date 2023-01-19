<template>
  <!-- video area start here -->
  <section class="video-area z-index">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title-wrapper text-center">
            <h2
              style="color: #7a54db"
              class="section-title font-family-PangramSans-Thin"
            >
              CAMBIAMOS LA FORMA
            </h2>
            <h2
              style="color: #7a54db"
              class="section-title font-family-MonumentExtended-Black"
            >
              DE HACER CRM
            </h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div
            class="kvideo-wrapper"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div
              class="kvideo"
              :style="{
                backgroundImage:
                  'url(' + require('@/assets/img/home/video_home.png') + ')',
              }"
            >
              <div class="kvideo-sign text-center">
                <b-button v-b-modal.modal-center>
                  <font-awesome-icon :icon="['fas', 'play']" />
                </b-button>
                <h2>{{ watchTitle }}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <!-- vue bootstrap modal -->
      <div class="video-modal-wrapper">
        <b-modal id="modal-center" centered title="BootstrapVue">
          <p>
            <video-embed
              src="https://www.youtube.com/watch?v=FyGA8aIWPSo&t=29s&ab_channel=LAX%23DataLovers"
            ></video-embed>
          </p>
        </b-modal>
      </div>
      <!-- vue bootstrap modal -->
    </div>
  </section>
  <!-- video area end here -->
</template>

<script>
export default {
  name: 'VideoHome',
  data() {
    return {
      sectionSubTitle: 'UN MINUTO DE INSPIRACIÓN',
      watchTitle: 'Ver video',
    }
  },
}
</script>

<style lang="scss" scoped></style>

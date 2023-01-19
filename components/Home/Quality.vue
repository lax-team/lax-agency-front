<template>
  <!-- quality area start here -->
  <section class="quality-area pt-120 pb-90 fix">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-8">
          <div class="kquality mb-30" data-aos="zoom-in-right">
            <div class="kquality-icon">
              <i
                ><img
                  :src="require('@/assets/img/icon/service-icon-4a.png')"
                  class="img-fluid z-index"
                  alt="about-img"
              /></i>
            </div>
            <div class="kquality-text fix">
              <h3 class="mb-20 kquality-text-title">{{ title }}</h3>
              <p>{{ description }}</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="text-lg-end mb-30" data-aos="zoom-in-left">
            <div class="kquality-img">
              <img
                :src="require('@/assets/img/trust/' + image)"
                class="img-fluid"
                alt="cta-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- quality area end here -->
</template>

<script>
export default {
  name: 'Offer',
  data() {
    return {
      title: 'We Deliver the Best Quality',
      description:
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered in some form, by injected humour words.',
      image: 'cta-img.jpg',
    }
  },
}
</script>

<style lang="scss" scoped></style>

<template>
  <footer class="footer-bg-color pt-95 position-relative">
    <div class="footer-area text-footer-color pb-60">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-12 mx-auto">
            <div class="widget mb-30">
              <div class="footer-logo mb-25">
                <NuxtLink to="/"
                  ><img
                    src="~/assets/img/logo/web_logo_white.png"
                    class="img-fluid"
                    alt="footer-logo"
                /></NuxtLink>
              </div>

              <div class="text-white text-footer">
                Incrementamos la ventas a través<br />
                de un verdadero <strong>RETAIL CRM</strong>
              </div>
              <h6 class="text-white my-4 text-footer">CONTÁCTANOS</h6>
              <div class="widget widget-contact mb-30">
                <ul>
                  <li>
                    <a target="_blank" href="mailto:hablemos@lax.agency">
                      <font-awesome-icon
                        class="text-black icons"
                        :icon="['far', 'envelope']"
                      />
                    </a>
                    <a target="_blank" href="mailto:hablemos@lax.agency"
                      >hablemos@lax.agency</a
                    >
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://api.whatsapp.com/send?phone=+573153551845&text=%C2%A1Quiero%20conocer%20m%C3%A1s%20sobre%20LAX!%20%F0%9F%98%8E%E2%9C%8C%F0%9F%8F%BB%F0%9F%92%9C"
                    >
                      <font-awesome-icon
                        class="text-black icons"
                        :icon="['fab', 'whatsapp']"
                      />
                    </a>
                    <a target="_blank" href="tel:+573153551845"
                      >+57 3153551845</a
                    >
                  </li>
                  <li>
                    <a
                      class="icons"
                      target="_blank"
                      href="https://www.instagram.com/laxdatalovers/"
                    >
                      <font-awesome-icon
                        class="text-black"
                        :icon="['fab', 'instagram']"
                      />
                    </a>
                    <a
                      class="icons"
                      target="_blank"
                      href="https://www.linkedin.com/company/laxdatalovers/"
                    >
                      <font-awesome-icon
                        class="text-black"
                        :icon="['fab', 'linkedin']"
                      />
                    </a>
                    <a
                      class="icons"
                      target="_blank"
                      href="https://twitter.com/laxdatalovers"
                    >
                      <font-awesome-icon
                        class="text-black"
                        :icon="['fab', 'twitter']"
                      />
                    </a>
                    <a
                      class="icons"
                      target="_blank"
                      href="https://www.youtube.com/channel/UCUSBKqZ2RnCXWnDSAZdNcrg"
                    >
                      <font-awesome-icon
                        class="text-black"
                        :icon="['fab', 'youtube']"
                      />
                    </a>
                    /lax.datalovers
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            class="
              col-lg-6 col-md-6 col-12
              d-flex
              justify-content-center
              mx-auto
            "
          >
            <FormFooter />
          </div>
        </div>
      </div>
    </div>
    <div class="copyright-area">
      <div class="container">
        <div class="copyright-bg">
          <div class="row">
            <div class="col-md-12">
              <div class="copyright">
                <span
                  >COPYRIGHT {{ new Date().getFullYear() }} LAX TECH
                  S.A.S.</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'PageFooter',
}
</script>

<style lang="scss" scoped>
@media (max-width: 767px) {
  .footer-logo {
    display: flex;
    justify-content: center !important;
  }

  .widget-contact {
    display: flex;
    justify-content: center !important;
  }

  .text-footer {
    text-align: center;
  }
}

.icons {
  font-size: 18px;
  margin-right: 0.25rem !important;
}
</style>

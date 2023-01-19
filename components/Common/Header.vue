<template>
  <header>
    <fixed-header :threshold="150">
      <div
        class="transparent-header navbar"
        :class="[bgSolid ? 'bg-solid' : '']"
      >
        <div class="container-fluid">
          <div class="header-space py-3">
            <div class="row align-items-center">
              <div class="col-xl-2 col-lg-3 col-md-3 col-8 order-1 order-xl-1">
                <div class="header-logo">
                  <NuxtLink to="/"
                    ><img
                      :src="require('~/assets/img/logo/web_logo.png')"
                      class="img-fluid"
                      alt="logo-img"
                  /></NuxtLink>
                </div>
              </div>
              <div class="col-xl-6 col-lg-1 col-md-2 col-4 order-3 order-xl-2">
                <div class="main-menu d-none d-xl-block">
                  <nav id="mobile-menu">
                    <ul>
                      <li>
                        <nuxt-link to="/">Inicio</nuxt-link>
                      </li>
                      <li class="menu-item-has-children">
                        <NuxtLink :to="$route.path">Servicios</NuxtLink>
                        <ul class="sub-menu">
                          <li>
                              <NuxtLink to="/gestion-clientes">Gestión de clientes</NuxtLink>
                          </li>
                          <li>
                              <NuxtLink to="/mensajeria-masiva">Mensajería masiva</NuxtLink>
                          </li>
                          <li>
                              <NuxtLink to="/pagina-construccion">Habeas Data</NuxtLink>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <nuxt-link to="/pagina-construccion">#LaxAcademy</nuxt-link>
                      </li>
                      <!-- <li>
                        <nuxt-link to="/">Quiénes somos</nuxt-link>
                      </li> -->
                    </ul>
                  </nav>
                </div>
                <div class="d-block d-xl-none text-end">
                  <div class="menu-bar">
                    <button
                      class="bars"
                      @click="menuOption.menuShow = !menuOption.menuShow"
                    >
                      <font-awesome-icon :icon="['fas', 'bars']" />
                    </button>
                  </div>
                </div>
              </div>
              <div
                class="
                  col-xl-4 col-lg-8 col-md-7
                  d-none d-md-block
                  order-2 order-xl-3
                "
              >
                <div class="header-right text-end">
                  <div class="header-social" style="width: 14rem;">
                    <a href="https://www.linkedin.com/company/laxdatalovers/" target="_blank">
                      <font-awesome-icon :icon="['fab', 'linkedin']"
                    /></a>
                    <a href="https://www.instagram.com/laxdatalovers/" target="_blank">
                      <font-awesome-icon :icon="['fab', 'instagram']"
                    /></a>
                    <a href="https://twitter.com/laxdatalovers" target="_blank">
                      <font-awesome-icon :icon="['fab', 'twitter']"
                    /></a>
                    <a href="https://www.youtube.com/channel/UCUSBKqZ2RnCXWnDSAZdNcrg" target="_blank">
                      <font-awesome-icon :icon="['fab', 'youtube']"
                    /></a>
                  </div>
                  <div class="header-btn">
                    <a 
                      class="theme-btn theme-btn-small"
                      href="https://api.whatsapp.com/send?phone=+573153551845&text=%C2%A1Quiero%20conocer%20m%C3%A1s%20sobre%20LAX!%20%F0%9F%98%8E%E2%9C%8C%F0%9F%8F%BB%F0%9F%92%9C"
                      target="_blank"
                    >
                      Contáctanos
                    </a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </fixed-header>

    <!-- Mobile Menu Start -->
    <div class="fix">
      <div
        class="side-mobile-menu"
        :class="[menuOption.menuShow === true ? 'active' : '']"
      >
        <button
          class="close-mobile-menu"
          @click="menuOption.menuShow = !menuOption.menuShow"
        >
          <font-awesome-icon :icon="['fa', 'circle-xmark']" />
        </button>
        <div class="side-info-content sidebar-menu mm-menu">
          <ul>
            <li>
              <nuxt-link to="/">Inicio</nuxt-link>
            </li>
            <li class="menu-item-has-children has-droupdown" :class="[menuOption.serviceDropdown === true ?  'active' : '' ]">
              <a @click="menuOption.serviceDropdown=!menuOption.serviceDropdown">Servicios</a>
              <ul class="sub-menu" :class="[menuOption.serviceDropdown === true ?  'active' : '' ]">
                <li>
                    <NuxtLink to="/gestion-clientes">Gestión de clientes</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/mensajeria-masiva">Mensajería masiva</NuxtLink>
                </li>
              </ul>
            </li>
            <!-- <li>
              <nuxt-link to="/blog">Blog</nuxt-link>
            </li> -->
            <!-- <li>
              <nuxt-link to="/">Quiénes somos</nuxt-link>
            </li> -->
          </ul>
        </div>

        <div class="contact-infos mb-30">
          <div class="contact-list mb-30">
            <ul>
              <li>
                <font-awesome-icon :icon="['fa', 'envelope']" />
                <a href="mailto:hablemos@lax.agency">hablemos@lax.agency</a>
              </li>
              <li>
                <font-awesome-icon :icon="['fab', 'whatsapp']" />
                <a href="https://api.whatsapp.com/send?phone=+573153551845&text=%C2%A1Quiero%20conocer%20m%C3%A1s%20sobre%20LAX!%20%F0%9F%98%8E%E2%9C%8C%F0%9F%8F%BB%F0%9F%92%9C">+57 3153551845</a>
              </li>
            </ul>
            <div class="sidebar__menu--social">
              <a href="https://www.instagram.com/laxdatalovers/" target="_blank">
                <font-awesome-icon :icon="['fab', 'instagram']"
              /></a>
              <a href="https://www.linkedin.com/company/laxdatalovers/" target="_blank">
                <font-awesome-icon :icon="['fab', 'linkedin']"
              /></a>     
              <a href="https://www.instagram.com/laxdatalovers/" target="_blank">
                <font-awesome-icon :icon="['fab', 'twitter']"
              /></a>
              <a href="https://www.linkedin.com/company/laxdatalovers/" target="_blank">
                <font-awesome-icon :icon="['fab', 'youtube']"
              /></a>         
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="body-overlay"
      :class="[menuOption.menuShow === true ? 'active' : '']"
    ></div>
    <!-- Mobile Menu End -->

    <!-- Menu Search start -->
    <div
      class="search-wrap"
      :class="[menuOption.menuSearch === true ? 'active' : '']"
    >
      <div class="search-inner">
        <i
          id="search-close"
          class="search-close"
          @click="menuOption.menuSearch = !menuOption.menuSearch"
        >
          <font-awesome-icon :icon="['fa', 'circle-xmark']" />
        </i>
        <div class="search-cell">
          <form method="get">
            <div class="search-field-holder">
              <input
                type="search"
                class="main-search-input"
                placeholder="Buscar ..."
              />
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- Menu Search End -->
  </header>
</template>

<script>
import FixedHeader from 'vue-fixed-header'

export default {
  name: 'FrontHeader',
  components: {
    FixedHeader,
  },
  props: {
    bgSolid: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      menuOption: {
        menuShow: false,
        menuSearch: false,
        homeDropdown: false,
        serviceDropdown: false,
        projectDropdown: false,
        blogDropdown: false,
        aboutDropdown: false,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  display: inherit;
  padding: 0px;
}
.transparent-header {
  background-color: #00001ef1;
}
.navbar.vue-fixed-header--isFixed {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: #00001e;
}
</style>

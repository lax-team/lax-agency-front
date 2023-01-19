<template>
  <section id="form-footer" style="">
    <div class="container">
      <div class="row mt-4">
        <div v-if="isEmailSend" class="col-12 mt-5">
          <div>
            <div class="d-flex justify-content-center">
              <img :src="imgEmailSend" />            
            </div>
            <div class="text-center text-white">
              * Si no logras encontrarlo, revisa tu bandeja de spam.
            </div>
            <div class="d-flex justify-content-center mt-3">
              <button                      
                  class="theme-btn theme-btn-small"
                  @click.prevent="resetData"
              >
                Enviar nuevo email
              </button>
            </div>
          </div>
        </div>

        <div v-else class="col-12 mx-auto">
          <div
            class="kabout mb-50"
            data-aos="zoom-out-down"
            data-swiper-autoplay="10000"
          >
            <div class="row">
              <div v-if="isAlert" class="col-12">
                <div
                  class="alert d-flex justify-content-between align-content-center"
                  :class="
                    alertMessage.type === 'error'
                      ? 'alert-danger'
                      : 'alert-success'
                  "
                  role="alert"
                >

                  <div>
                    <font-awesome-icon
                      class="bi flex-shrink-0 me-2"
                      :icon="['fas', 'triangle-exclamation']"
                    />
                    {{ alertMessage.message }}                    
                  </div>
                  <div class="ml-auto">
                    <font-awesome-icon
                      style="cursor: pointer;"
                      class="bi flex-shrink-0 me-2"
                      :icon="['fa', 'circle-xmark']"
                      @click="isAlert = false"
                    />
                  </div>
                </div>
              </div>

              <div class="col-12 mt-2">
                <form>
                  <div class="mb-3">
                    <div class="row">
                      <div class="col input-group input-group-lg">
                        <input
                          v-model="dataContact.name"
                          type="text"
                          class="
                            form-control
                            custom--input--form
                            font-family-MonumentExtended-Light
                          "
                          placeholder="*NOMBRE"
                        />
                      </div>
                      <div class="col input-group input-group-lg">
                        <input
                          v-model="dataContact.lastName"
                          type="text"
                          class="
                            form-control
                            custom--input--form
                            font-family-MonumentExtended-Light
                          "
                          placeholder="*APELLIDO"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="mb-3 input-group input-group-lg">
                    <input                      
                      v-model="dataContact.phoneNumber"
                      type="tel"
                      class="
                        form-control
                        custom--input--form
                        font-family-MonumentExtended-Light
                      "
                      maxlength="10"
                      minlength="10"
                      placeholder="*CELULAR"
                    />
                  </div>

                  <div class="mb-3 input-group input-group-lg">
                    <input
                      v-model="dataContact.email"
                      type="email"
                      class="
                        form-control
                        custom--input--form
                        font-family-MonumentExtended-Light
                      "
                      placeholder="*EMAIL"
                    />
                  </div>

                  <div class="mb-3 input-group input-group-lg">
                    <input
                      v-model="dataContact.nameCompany"
                      type="text"
                      class="
                        form-control
                        custom--input--form
                        font-family-MonumentExtended-Light
                      "
                      placeholder="NOMBRE DE EMPRESA"
                    />
                  </div>

                  <div class="input-group input-group-lg">
                    <input
                      v-model="dataContact.position"
                      type="text"
                      class="
                        form-control
                        custom--input--form
                        font-family-MonumentExtended-Light
                      "
                      placeholder="CARGO"
                    />
                  </div>

                  <div class="mb-3 mt-2 form-check">
                    <p style="font-size: 15px; color: white;">*Campos obligatorios</p>

                    <input
                      id="checkbox"
                      v-model="dataContact.termsAndCondition"
                      class="form-check-input"
                      type="checkbox"
                    />
                      <label for="checkbox">
                        <span style="color: white !important; font-size: 15px;">
                          He leído y acepto
                        </span>
                        <NuxtLink class="text-black" style="font-size: 15px;" to="/tratamiento-de-datos"> los términos y condiciones de la política de datos.</NuxtLink>
                      </label
                    >
                  </div>
                  <div class="d-flex justify-content-center">
                    <button                    
                      class="theme-btn theme-btn-small"
                      @click.prevent="sendDataContact"
                    >
                      <span v-if="isLoading">Cargando...</span>
                      <span v-else> HABLEMOS </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import imgEmailSend from '@/assets/img/form/email-send.png'

export default {
  name: 'FormFooter',
  props: {
    pageType: {
      type: String,
      default: String,
    },
  },
  data() {
    return {
      imgEmailSend,
      type: this.pageType,
      isLoading: false,
      isAlert: false,
      isEmailSend: false,
      alertMessage: {
        type: '',
        icon: '',
        message: '',
      },
      dataContact: {
        name: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        nameCompany: '',
        position: '',
        pageType: '',
        ip: null,
        city: null,
        region: null,
        platform: null,
        isMobile: null,
        termsAndCondition: false,
      },
    }
  },

  methods: {
    ...mapActions({
      actionSendDataContact: 'actionSendDataContact',
    }),    

    resetData() {
      this.dataContact = {
        name: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        nameCompany: '',
        position: '',
        pageType: '',
        ip: null,
        city: null,
        region: null,
        platform: null,
        isMobile: null,
        termsAndCondition: false,
      }

      this.alertMessage = {
        type: '',
        icon: '',
        message: '',
      }

      this.isAlert = false
      this.isEmailSend = false
    },
    validateData(data) {
      // eslint-disable-next-line no-useless-escape
      const emailRegex = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i
      const textoRegex = /^[a-zA-Z ]+$/;
      const numeroRegex = /^[0-9]+$/;

      if (data.termsAndCondition !== true) {
        return {
          state: false,
          message: 'Por favor acepte los términos y condiciones.',
        }
      }

      if ( data.name.length === 0 || data.lastName.length === 0 || data.phoneNumber.length === 0 || data.email.length === 0 ) {
        return {
          state: false,
          message: 'Por favor complete los campos requeridos.',
        }
      }      

      if (!textoRegex.test(data.name.trim())) {
        return {
          state: false,
          message: 'El nombre no puede contener números ni caracteres especiales.',
        }
      }
      if (!textoRegex.test(data.lastName.trim())) {
        return {
          state: false,
          message: 'El apellido no puede contener números ni caracteres especiales.',
        }
      }
      if (!numeroRegex.test(data.phoneNumber.trim())) {
        return {
          state: false,
          message: 'Debe ingresar un celular válido, sin caracteres especiales ni letras.',
        }
      }
      if (data.phoneNumber.trim().length < 10 || parseInt(data.phoneNumber.trim().substring(0, 1)) !== 3) {
        return {
          state: false,
          message: 'Debe ingresar un celular válido, que inicie por 3 y tenga 10 números.',
        }
      }
      if(!emailRegex.test(data.email.trim())) {
        return {
          state: false,
          message: 'Debe ingresar un email valido, ejemplo: tu.email@lax.agency',
        }
      }

      return {
        state: true,
        message: '',
      }
    },

    async sendDataContact() {
      try {
        this.isLoading = true
        this.dataContact.pageType = this.pageType

        const validateData = this.validateData(this.dataContact)

        if (!validateData.state) {
          this.isLoading = false
          this.alertMessage.type = 'error'
          this.alertMessage.message = validateData.message
          this.isAlert = true
          return this.isAlert
        }

        const dataIp = await this.getDataIp();

        this.dataContact.pageType = "pagina-web-footer"
        this.dataContact.ip = dataIp.ip
        this.dataContact.city = dataIp.city
        this.dataContact.region = dataIp.region
        this.dataContact.platform = dataIp.platform
        this.dataContact.isMobile = dataIp.isMobile

        const response = await this.actionSendDataContact(this.dataContact)

        if (response.status === 500) {
          this.isLoading = false
          this.alertMessage.type = 'error'
          this.alertMessage.message = String(response.data)
          this.isAlert = true

          return this.isAlert
        }

        if (response.status !== 200) {
          this.isLoading = false
          this.alertMessage.type = 'error'
          this.alertMessage.message = String(response.data.error)
          this.isAlert = true
          return this.isAlert
        }

        this.isAlert = true
        this.alertMessage.type = 'success'
        this.alertMessage.message = String(response.data.message)

        this.isLoading = false
        this.isEmailSend = true
        
        return this.alertMessage
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
        this.isLoading = false
        this.alertMessage.type = 'error'
        this.alertMessage.message = `Estamos presentando problemas para realizar tú solicitud. (${error.message})`
        this.isAlert = true
        return this.isAlert
      }
    },
    async getIp() {
      const req = await fetch('https://api.ipify.org?format=json')
      return await req.json()
    },
    async getDataIp() {
      const dataIp = await this.getIp()
      const req = await fetch(`https://ipapi.co/${dataIp.ip.trim()}/json/`)

      const platform = navigator?.userAgentData?.platform || 'No se pudo obtener esta propiedad'
      const isMobile = navigator?.userAgentData?.mobile || 'No se pudo obtener esta propiedad'
      const { city, region, ip } = await req.json()

      return { city, region, ip, platform, isMobile }
    }
  },
}
</script>

<style lang="scss" scoped>
  .custom--input--form {
    color: white !important;
    height: 38px;
    border-radius: 0px !important;
    background-color: transparent;
    border-left: 2px solid #F990C9 !important;
    border-bottom: 2px solid #F990C9 !important;
    border-top: 0px solid #F990C9 !important;
    border-right: 0px solid #F990C9 !important;
  }

  .custom--input--form::placeholder {
    color: white !important;
  }

  .theme-btn {
    background-color: black !important;
  }
</style>

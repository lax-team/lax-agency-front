<template>
  <div class="row bg-dark">
      <div 
        v-for="item in cards"
        :key="item.image"
        class="col-12 col-sm-8 col-md-7 col-lg-3 mx-auto mb-4"
      >
        <div class="bg-card py-4">
          <center>
            <img 
              :src="require(`@/assets/img/messengerService/${item.image}`)"
            />
          </center>
          <div class="text-center mb-3">
            <h1 
              class="font-family-MonumentExtended-Black title" 
              :style="{color: item.color}"
            > {{ item.title }} </h1>
            <span class="font-family-MonumentExtended-Light sub-title">{{ item.subTitle }}</span>
          </div>
          <div class="bg-content">
            <div class="text-center py-3">
              <span
                v-for="(text, i) in item.list"
                :key="i"
                class="list-item py-2"
              >
                {{ text }}
              </span>               
            </div>

            <div class="d-flex justify-content-center pb-3">
              <a 
                :href="item.url" 
                target="_blank"
                class="theme-btn"
                :class="item.class"
              >¡Cotizar ahora!</a>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'ServicesCard',
    data: () => ({
        cards: [
          { image: 'package_sms.png', color: '#F5369E', title: 'SMS', subTitle: 'Mensaje de texto', class: 'btn-sms',
            list: [
              'SMS 1 y 2 vías',
              'Campos personalizables',
              'Envíos programables',
              'Mensajes concatenados',
              'Opción de SMS Flash',
              'Estadísticas de envíos',
              'Conexión API o uso web',
            ],
            url: 'https://api.whatsapp.com/send?phone=+573153551845&text=%C2%A1Quiero%20conocer%20m%C3%A1s%20sobre%20LAX!%20%F0%9F%98%8E%E2%9C%8C%F0%9F%8F%BB%F0%9F%92%9C',
          },
          { image: 'package_whatsapp.png',  color: '#bc43ba', title: 'CHAT', subTitle: 'Whatsapp Business API', class: 'btn-chat',
            list: [
              'Envíos masivos personalizados',
              'Envíos programables',
              'Cargas HTML',
              'Editor de plantillas',
              'Manejo Anti Spam',
              'Monitoreo de campaña',
              'Conexión API o uso Web',
            ],
            url: 'https://api.whatsapp.com/send?phone=+573153551845&text=%C2%A1Quiero%20conocer%20m%C3%A1s%20sobre%20LAX!%20%F0%9F%98%8E%E2%9C%8C%F0%9F%8F%BB%F0%9F%92%9C',
          },
          { image: 'package_mailing.png', color: '#9e4ccc', title: 'EMAIL', subTitle: 'Correo transaccional', class: 'btn-email',
            list: [
              'Certificada por Facebook',
              'Plataforma multi agente',
              'Chat BOT personalizado',
              'Gestión de conversación',
              'Envío de archivos',
              'Reportes y tableros de control',
              'Conexión API o uso Web',
            ],
            url: 'https://api.whatsapp.com/send?phone=+573153551845&text=%C2%A1Quiero%20conocer%20m%C3%A1s%20sobre%20LAX!%20%F0%9F%98%8E%E2%9C%8C%F0%9F%8F%BB%F0%9F%92%9C',
          },
          { image: 'package_voz.png', color: '#7a54db',  title: 'VOZ', subTitle: 'Envíos masivos de audio', class: 'btn-voz',
            list: [
              'Envíos masivos personalizados',
              'Carga de bases de datos',
              'Programación de envíos',
              'Fácil carga de archivos de audio',
              'Estadísticas en tiempo real',
              'Monitoreo de campañas',
              'Cobros por minuto',
            ],
            url: 'https://api.whatsapp.com/send?phone=+573153551845&text=%C2%A1Quiero%20conocer%20m%C3%A1s%20sobre%20LAX!%20%F0%9F%98%8E%E2%9C%8C%F0%9F%8F%BB%F0%9F%92%9C',
          },
        ]
    }),
}
</script>

<style scoped>
  .bg-dark {
		background-color: #00001e !important;
	}
  .bg-card {
    background-color: #FFFFFF;
  }

  .bg-content {
    background-color: #E9E9E9;
  }

  .title {
    margin-top: 1.5rem;
    line-height: 0.1;
  }

  .sub-title {
    color: #00001e;
  }
  
  .list-item {
    display: block !important;    
    color: #00001e;
  }

  .btn-chat {
    background: #bc43ba !important;
  }

  .btn-chat:hover {
    color: #bc43ba !important;
  }

  .btn-email {
    background: #9e4ccc !important;
  }

  .btn-email:hover {
    color: #9e4ccc !important;
  }

  .btn-voz {
    background: #7a54db !important;
  }

  .btn-voz:hover {
    color: #7a54db !important;
  }

  @media (min-width: 992px) and (max-width: 1079px) {
    .sub-title {
      font-size: .7rem;
    }
    
    .btn-sms {
      font-size: .7rem;
    }

    .btn-chat {
      font-size: .7rem;
    }

    .btn-email {
      font-size: .7rem;
    }

    .btn-voz {
      font-size: .7rem;
    }
  }
</style>
<template>
    <div class="row bg-dark">
        <div class="col-12 py-5">
            <div class="row">
                <div class="col text-center">
                    <span class="pre-header font-family-PangramSans-Regular"> {{ data.preHeader }} </span>
                    <h2 class="display-2 py-0 my-0 title-2 font-family-MonumentExtended-Light">{{ data.title2 }}</h2>
                    <h1 class="display-1 py-0 my-0 title-1 font-family-MonumentExtended-Black">{{ data.title1 }}</h1>
                    <div class="divider mx-auto my-4"></div>
                    <span class="text font-family-PangramSans-Regular">{{ data.text }}</span>
                </div>
            </div>
            <div class="row pt-4">
                <div 
                    v-for="item in images"
                    :key="item.image"
                    class="col-12 col-md-8 col-lg-3 mb-4 mx-auto"
                >
                    <div class="w-100 d-flex justify-content-center">
                        <img 
                            v-if="!item.isHover"
                            style="cursor: pointer;"
                            :src="require(`@/assets/img/customerManagement/${item.image}`)"
                            @mouseover="item.isHover = true"
                        />
                        <img 
                            v-else
                            style="cursor: pointer;"
                            class="show-hover"
                            :src="require(`@/assets/img/customerManagement/${item.imageHover}`)"
                            @mouseleave="item.isHover = false"
                        />
                    </div>

                    <div class="w-100 d-flex justify-content-center">
                        <div
                            v-show="item.isHover"                  
                            :key="item.image"                          
                            :style="{backgroundColor: item.isHover ? item.color : ''}"  
                            :class="item.isHover ? 'show-hover' : ''"
                            class="container-text-hover-movil mt-4"
                        >
                            <p                     
                                style="color: white; font-size: 20px;"
                                class="py-3 px-4"
                            >
                                {{ item.textHover }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                v-for="item in images"
                v-show="item.isHover"                  
                :key="item.image"                          
                :style="{backgroundColor: item.isHover ? item.color : ''}"  
                :class="item.isHover ? 'show-hover' : ''"
                class="container-text-hover"
            >
                <p                     
                    style="color: white; font-size: 20px;"
                    class="py-3 px-4"
                >
                    {{ item.textHover }}
                </p>
            </div>            
        </div>
    </div>
</template>

<script>
export default {
    name: 'ServicesDetail',
    data: () => ({
        data: {
            preHeader: 'UN PROCESO EFECTIVO',
            title1: 'DEL SERVICIO',
            title2: 'COMPONENTES',
            text: 'Cada paso permite construir una experiencia para tus clientes y tenerlos cada vez más cerca.'
        },
        images: [
            { 
                image: 'quality.png', 
                imageHover: 'quality_hover.png', 
                color: '#F4369D',  
                isHover: false, 
                textHover: 'Capacitamos al equipo responsable de la captura de datos, diseñamos planes que reforzarán la conciencia del dato y establecemos indicadores de gestión.',
            },
            { 
                image: 'reporting.png', 
                imageHover: 'reporting_hover.png', 
                color: '#7A54DA',  
                isHover: false, 
                textHover: 'Integramos las fuentes de información de clientes a nuestro Business Intelligence para tener una vista integral del Cliente y controlar la estrategia CRM.',
            },
            { 
                image: 'strategy.png', 
                imageHover: 'strategy_hover.png', 
                color: '#9D4CCB',  
                isHover: false, 
                textHover: '¡Definimos el plan estratégico, los indicadores claves de gestión, el modelo de trabajo para lograr un plan de CRM focalizado!',
            },
            { 
                image: 'campaign.png', 
                imageHover: 'campaign_hover.png', 
                color: '#BB43B9',  
                isHover: false, 
                textHover: 'En esta etapa activamos y gestionamos nuestra estrategia de Retail CRM, desarrollamos el plan mensual de parrillas promocionales, brindamos acompañamiento estratégico y logramos un seguimiento integral de la gestión de clientes.',
            },
        ]
    })
}
</script>

<style scped>
    .bg-dark {
        background-color: #00001e !important;
    }

    .pre-header {
        font-size: 1.5rem;
        color: white;
        letter-spacing: 1.5px;
    }

    .title-1 {
        font-size: 4.3rem;
        color: #f5369e;
        font-weight: bold;        
        line-height: 1;
        padding: 0;
    }

    .title-2 {
        color: #f5369e;
        line-height: 0.9;
        font-size: 3.9rem;
        padding: 0;
        margin-top: 3.5rem !important;
    }

    .divider {
        width: 15rem; 
        border: 1px solid #bafc4f;
    }

    .text {
        font-size: 1.5rem;
        line-height: 1.8;
        color: white;
        font-weight: 100 !important;
    }

    .container-text-hover {
        margin-left: 2rem;
        width: 46%;
    }

    .container-text-hover-movil {
        display: none;
    }

    @media (max-width: 1680px) {    
        .container-text-hover {
            margin-left: 0rem;
            width: 49%;
        }
    }

    @media (max-width: 1265px) {    

        .pre-header {
            font-size: 1rem;
        }

        .title-1 {
            font-size: 2.5rem;
        }

        .title-2 {
            font-size: 2.2rem;
        }

        .text {
            font-size: 1rem;
        }
    }

    @media (max-width: 991px) {    
        .container-text-hover {
            display: none;
        }

        .container-text-hover-movil {
            display: flex;
            width: 24.3rem;
        }
    }

    @media (max-width: 800px) {

        .pre-header {
            font-size: .8rem;
            margin-bottom: 2rem !important;
        }

        .title-1 {
            font-size: 1.5rem;
        }

        .title-2 {
            font-size: 1.4rem;
            margin-top: 2.5rem !important;
        }

        .text {
            font-size: .8rem;
        }
    }

    .v-enter-active,
    .v-leave-active {
        transition: opacity 0.5s ease;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }
</style>
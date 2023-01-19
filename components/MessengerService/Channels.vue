<template>
    <div class="row container-content mb-4">
        <div class="col">
            <div class="row">
                <div class="col-12 content my-auto">
                    <div class="row mt-4">
                        <div class="col-12 text-center">
                            <h2 class="display-2 py-0 my-0 title-2 font-family-MonumentExtended-Light" v-html="data.title1"></h2>
                            <h1 class="display-1 py-0 my-0 title-1 font-family-MonumentExtended-Black">{{data.title2}}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <ChannelItem />
        </div>
    </div>
</template>

<script>
import ChannelItem from "./ChannelItem.vue"

export default {
    name: 'ResultsComponent',
    components: { ChannelItem, },
    data: () => ({
        data: {
            title1: '¡TODOS LOS CANALES<br/> EN UNA SOLA',
            title2: 'PLATAFORMA!',
        }
    })
}
</script>

<style scoped>
    .container-content {
        min-height: 15rem;
    }

    .title-1 {
        font-size: 4.6rem;
        line-height: 0.9;
        color: #bc43ba;
        font-weight: bold;        
        line-height: 1;
    }

    .title-2 {
        color: #bc43ba;
        line-height: 0.9;
        font-size: 3.72rem;
        padding-bottom: 5px !important;
    }

    @media (max-width: 910px) {    
        .title-1 {
            font-size: 3.6rem;
        }

        .title-2 {
            font-size: 2.72rem;
        }
    }

    @media (max-width: 600px) {    
        .title-1 {
            font-size: 1.8rem;
        }

        .title-2 {
            font-size: 1.6rem;
        }
    }

    @media (max-width: 290px) {
        
        .title-1 {
            font-size: 1.5rem;
        }

        .title-2 {
            font-size: 1rem;
        }
    }
</style>
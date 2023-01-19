<template>
    <div class="row container-content">
        <div class="col-12 content my-auto">
            <div class="row mt-4">
                <div class="col-12 text-center">
                    <h2 class="display-2 py-0 my-0 title-2 font-family-MonumentExtended-Light">{{data.title1}}</h2>
                    <h1 class="display-1 py-0 my-0 title-1 font-family-MonumentExtended-Black">{{data.title2}}</h1>
                </div>
            </div>
            <Statistics />
        </div>
    </div>
</template>

<script>
import Statistics from './Statistics.vue'
export default {
    name: 'ResultsComponent',
    components: {Statistics,},
    data: () => ({
        data: {
            title1: '¡NUESTRO SERVICIO GENERA',
            title2: 'RESULTADOS REALES!',
        }
    })
}
</script>

<style scoped>
    .container-content {
        min-height: 30rem;
    }

    .title-1 {
        font-size: 4.6rem;
        line-height: 0.9;
        color: #9e4ccc;
        font-weight: bold;        
        line-height: 1;
    }

    .title-2 {
        color: #9e4ccc;
        line-height: 0.9;
        font-size: 3.72rem;
        padding-bottom: 5px !important;
    }

    @media (max-width: 910px) {    
        .title-1 {
            font-size: 2rem;
        }

        .title-2 {
            font-size: 1.8rem;
        }
    }

    @media (max-width: 290px) {
        
        .title-1 {
            font-size: 1.5rem;
        }

        .title-2 {
            font-size: 1.4rem;
        }
    }
</style>
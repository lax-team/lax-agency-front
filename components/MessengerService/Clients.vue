<template>
    <div class="row mb-4">
        <div class="col">
            <div class="row">
                <div class="col-12 text-center mb-5">
                    <h2 class="display-2 py-0 my-0 title-2 font-family-MonumentExtended-Light" v-html="data.title1"></h2>
                    <h1 class="display-1 py-0 my-0 title-1 font-family-MonumentExtended-Black">{{data.title2}}</h1>
                </div>
            </div>
            <div class="row bg-brands mb-5">
                <div class="col-12 col-md-7 mx-auto">
                    <Brands component="mensajeria" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Brands from '../Common/Brands.vue'
export default {
    name: 'ClientsComponent',
    components: {Brands, },
    data: () => ({
        data: {
            title1: `
                ELLOS YA SE COMUNICAN DE <br />
                MANERA RÁPIDA Y EFECTIVA
            `,
            title2: 'CON SUS CLIENTES',
        }
    })
}
</script>

<style scoped>
    .bg-brands {
        background-color: #F7F7F7 !important;
    }

    .title-1 {
        font-size: 3rem;
        line-height: 0.9;
        color: #f5369e;
        font-weight: bold;        
        line-height: 1;
    }

    .title-2 {
        color: #f5369e;
        line-height: 1;
        font-size: 2.1rem;
        padding-bottom: 5px !important;
    }

    @media (max-width: 1250px) {    
        .title-1 {
            font-size: 3rem;
        }

        .title-2 {
            font-size: 2rem;
        }
    }

    @media (max-width: 910px) {    
        .title-1 {
            font-size: 2rem;
        }

        .title-2 {
            font-size: 1.93rem;
        }
    }

    @media (max-width: 480px) {    
        .title-1 {
            font-size: 1rem;
        }

        .title-2 {
            font-size: .97rem;
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
<template>
    <div class="row bg-dark mb-4">
        <div class="col-12 col-md-6 col-lg-5 p-0">
            <img :src="imgFormula" />
        </div>
        <div 
            class="col-12 col-md-6 col-lg-7 bg-dark d-flex align-items-center my-auto px-5 container-content"
            style="height: 30rem;"
        >
            <div class="content px-5">
                <span class="pre-header font-family-PangramSans-Regular">{{data.preHeader}}</span> <br /><br/>
                <h1 class="display-1 py-0 my-0 pt-5 title-1 font-family-MonumentExtended-Black">{{data.title1}}</h1>
                <h2 class="display-2 py-0 my-0 title-2 font-family-MonumentExtended-Light">{{data.title2}}</h2>
                <div class="divider" />
                <span class="text font-family-PangramSans-Regular"> {{data.text}} </span>
            </div>
        </div>
    </div>
</template>

<script>
import imgFormula from '@/assets/img/customerManagement/formula.png'
export default {
    name: 'FormulaComponent',
    data: () => ({
        imgFormula,
        data: {
            preHeader: 'NUESTRO SECRETO',
            title1: 'UNA FÓRMULA',
            title2: 'QUE DA BUENOS RESULTADOS',
            text: `Nuestro servicio de gestión de clientes genera resultados
                   reales en ventas gracias a una fórmula completamente
                   adaptable a cualquier compañía de retail.`
        }
    })
}
</script>

<style scoped>
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
    }

    .title-2 {
        color: white;
        line-height: 0.9;
        font-size: 4.1rem;
        padding-bottom: 2rem !important;
    }

    .divider {
        width: 15rem; 
        border: 1px solid #bafc4f;
    }

    .text {
        font-size: 2rem;
        line-height: 1.8;
        color: white;
        font-weight: 100 !important;
    }

    @media (max-width: 1584px) {
        .title-1 {
            font-size: 4rem;
        }

        .title-2 {
            font-size: 3.8rem;
        }
    }

    @media (max-width: 1440px) {
        .pre-header {
            font-size: 1rem;
        }

        .title-1 {
            font-size: 3.2rem;
        }

        .title-2 {
            font-size: 3.1rem;
        }

        .text {
            font-size: 1.5rem;
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

    @media (max-width: 910px) {
        
        .content {
            padding: 0rem !important;
        }

        .pre-header {
            font-size: .8rem;
        }

        .title-1 {
            font-size: 1.5rem;
        }

        .title-2 {
            font-size: 1.4rem;
        }

        .text {
            font-size: 1rem;
        }
    }

    @media (max-width: 290px) {
        
        .container-content {
            padding: 1.5rem !important;
        }
    }
</style>
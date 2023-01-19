<template>
    <div class="row container-content mb-4">
        <div class="col-12 col-lg-8 mx-auto">
            <div class="row">
                <div class="col-12 content my-auto">
                    <div class="row mt-4">
                        <div class="col-12 text-center">
                            <h2 class="display-2 py-0 my-0 title-2 font-family-MonumentExtended-Light">{{data.title1}}</h2>
                            <h1 class="display-1 py-0 my-0 title-1 font-family-MonumentExtended-Black">{{data.title2}}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <QuestionsAndAnswers />
        </div>
    </div>
</template>

<script>
import QuestionsAndAnswers from './QuestionsAndAnswers.vue'

export default {
    name: 'FrequentQuestions',
    components: { QuestionsAndAnswers },
    data: () => ({
        data: {
            title1: 'PREGUNTAS',
            title2: 'FRECUENTES',
        },

        text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `,
    })
}
</script>

<style scoped>
    .container-content {
        min-height: 15rem;
    }

    .title-1 {
        font-size: 3.72rem;
        line-height: 0.9;
        color: #00001e;
        font-weight: bold;        
        line-height: 1;
    }

    .title-2 {
        color: #00001e;
        line-height: 0.9;
        font-size: 4.1rem;
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
            font-size: 1rem;
        }
    }
</style>
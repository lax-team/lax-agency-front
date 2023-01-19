<template>
  <div class="row mt-5">
        <div 
            v-for="(item, i) in questions"
            :key="i"
            class="col-12 col-ms-8 col-md-6 mb-2 mx-auto"
        >
            <div class="accordion" role="tablist">
                <b-card v-b-toggle="'question-' + i" no-body class="mb-1">
                    <b-card-header 
                        class="py-2 px-3 text-white d-flex justify-content-between align-items-center" 
                        role="tab"
                        :style="{backgroundColor: item.color, border: 'none'}"
                    >
                        <span>{{item.question}}</span>
                        <span class="my-auto" style="font-size: 2rem; margin-top: -10px !important;">+</span>
                    </b-card-header>
                    <b-collapse :id="'question-' + i" visible accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                            <b-card-text>{{item.answer}}</b-card-text>
                        </b-card-body>
                    </b-collapse>
                </b-card>                        
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'QuestionsAndAnswers',
    data: () => ({
        questions: [
            { question: '¿Qué precios o paquetes manejan?', answer: 'Nuestra plataforma es multicanal e integramos canales de mensajes de texto SMS, mailling, voz y chat multi-agente.', color: '#F5369E' },
            { question: '¿Cuántos caracteres manejan en Mensaje de Texto SMS?', answer: 'Nuestra plataforma permite entre 160 y 300 caracteres para lograr un mensaje concatenado.', color: '#F170A3' },
            { question: '¿Son una plataforma de Marketing Automation?', answer: 'No, somos plataforma transaccional, con un muy buen desempeño y podemos conectarnos vía API a diferentes fuentes de información.', color: '#AF43AD' },
            { question: '¿En Mailling manejan plantillas o formatos HTML?', answer: 'HTML es la mejor forma de integrar tus campañas de mailling, no manejamos plantillas', color: '#914CBF' },
            { question: '¿Qué tipo de canales de envíos manejan?', answer: 'Manejamos paquetes prepago o pospago según el volumen de mensajes, contáctanos para compartirte más información.', color: '#C63DA1' },
            { question: '¿Qué son mensajes de voz y chat?', answer: 'Los mensajes de voz son llamadas programadas con notas de audio grabadas que emiten un mensaje específico. Nuestra plataforma de chat permite integrar Whatsapp Business Api, messenger y chat de páginas web en un solo lugar con la posibilidad de manejar múltiples agentes para su atención.', color: '#7A54CE' },
        ] 
    })
}
</script>

<style>

</style>
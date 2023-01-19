<template>
  <section class="row">
    <article class="col-12 col-md-4 text-center mt-2">
      <h1 style="color: #bc43ba;" class="title font-family-MonumentExtended-Black">95%</h1>
      <span>
        De las solicitudes de un
        cliente se solucionan más
        rápido con un chatbot.
      </span>
    </article>
    <article class="col-12 col-md-4 text-center mt-2">
      <h1 style="color: #7A54DB;" class="title font-family-MonumentExtended-Black">80%</h1>
      <span>
        De las solicitudes de atención
        al cliente son consultas
        rutinarias y repetitivas.
      </span>
    </article>
    <article class="col-12 col-md-4 text-center mt-2">
      <h1 style="color: #F5369E;" class="title font-family-MonumentExtended-Black">75%</h1>
      <span>
        De reducción en el tiempo
        de espera para atender
        un cliente.
      </span>
    </article>
  </section>
</template>

<script>
export default {
  name: 'PercentageWizardBot',
  data: () => ({

  })
}
</script>
 
<style scoped>
  .title {
    margin: 0 !important;
    font-size: 4.3rem;
  }

  @media (max-width: 1300px) {  
    .title {
      font-size: 3.2rem;
    }
  }

  @media (max-width: 1050px) {  
    .title {
      font-size: 2.8rem;
    }
  }

  @media (max-width: 500px) {  
    .title {
      font-size: 2.5rem;
    }
  }
</style>
<template>
  <div class="row pb-4 bg-dark">
    <div class="col">
      <div class="row">
				<div class="col text-center mb-5">
					<h1 class="display-1 p-0 m-0 title-2 font-family-MonumentExtended-Light">{{data.title1}}</h1>
					<h2 class="display-1 p-0 m-0 title-1 font-family-MonumentExtended-Black">{{data.title2}}</h2>
				</div>
			</div>
      <ServicesCards />
    </div>
  </div>
</template>

<script>
import ServicesCards from './ServicesCards.vue'
export default {
  name: 'ServicesComponent',
  components: { ServicesCards, },
    data: () => ({
      data: {
        title1: 'CONOCE NUESTRO',
        title2: 'PAQUETES DE SERVICIO',
      },
    })
}
</script>

<style scoped>
  .bg-dark {
		background-color: #00001e !important;
	}

	.title-1 {
		font-size: 3.6rem;
		color: #bafc4f;
		font-weight: bold;        
		line-height: 1;
    	margin-bottom: 3rem !important;
	}

	.title-2 {
		color: white;
		font-size: 3.6rem;
    	margin-top: 8rem !important;
	}

	@media (max-width: 1265px) {    
		.title-1 {
				font-size: 2.5rem;
		}

		.title-2 {
				font-size: 2.2rem;
		}
	}

	@media (max-width: 800px) {
		.title-1 {
			font-size: 1.5rem;
		}

		.title-2 {
			font-size: 1.4rem;
			margin-top: 2.5rem !important;
		}
	}
</style>
<template>
  <div class="row bg-dark pb-5">
		<div class="col-12">
			<div class="row">
				<div class="col text-center mt-4 mb-5">
					<h1 class="display-1 py-0 my-0 title-2 font-family-MonumentExtended-Light">{{data.title1}}</h1>
					<h2 class="display-1 py-0 my-0 title-1 font-family-MonumentExtended-Black">{{data.title2}}</h2>
				</div>
			</div>
			<IntegrationCards />
		</div>
	</div>
</template>

<script>
import IntegrationCards from './IntegrationCards.vue'
export default {
	name: 'IntegrationsComponent',
  components: { IntegrationCards, },
	data: () => ({
		data: {
			title1: '¡TU ESCOJES',
			title2: 'CÓMO CONECTARTE!',
		},
	})
}
</script>

<style scoped>
	.bg-dark {
		background-color: #00001e !important;
	}

	.title-1 {
		font-size: 4.1rem;
		color: #7a54db;
		font-weight: bold;        
		line-height: 1;
	}

	.title-2 {
		color: white;
		line-height: 0.1;
		font-size: 4.1rem;
		padding-bottom: 2rem !important;
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
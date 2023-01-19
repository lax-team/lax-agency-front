<template>
  <div class="row no-gutters bg-dark">
		<div
			v-for="item in cards"
			:key="item.image"
			class="col-12 col-sm-8 col-md-5 p-5 mt-4 mx-auto"
			:style="{backgroundColor: item.color}"
		>
			<div class="d-flex justify-content-center">
				<img 
					class="img-card"
					style="cursor: pointer;"
					:src="require(`@/assets/img/messengerService/${item.image}`)"
				/>
			</div>
			<p class="text-white text-justify mt-4 font-family-PangramSans-Regular text-content" v-html="item.text"></p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'IntegrationCards',
	data: () => ({
		cards: [
			{ 
				image: 'integration_api.png',
				text: `<b>LA INTEGRACIÓN A NUESTRA API</b> es la opción ideal donde puedes integrar 
					rapidamente nuestros servicios a tus propios aplicatiovos 
					de forma fácil y sin costes adiciones.`,
				color: '#f5369e'
			},	
			{ 
				image: 'integration_web.png',
				text: `<b>PORTAL WEB INTUITIVO Y FÁCIL DE USAR</b> que te permite usar y cambiar diversos
					canales de comunicación para obtener un mayor contacto con tus clientes y/o usuarios
					según sus preferencias.`,
				color: '#bc43ba'
			},	
		]
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

	.text-content {
		line-height: 2;
	}

	@media (max-width: 1080px) {
		.img-card {
			height: 14rem;
		}
	}

	@media (max-width: 400px) {
		.img-card {
			height: 10rem;
		}
	}
</style>
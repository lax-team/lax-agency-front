<template>
  <section class="row my-4">
		<article 
        v-for="item in images"
        :key="item.image"
        class="col-12 col-sm-8 col-md-3 mt-4 mx-auto d-flex justify-content-center"
    >
        <NuxtLink 
            :to="item.url" 
        >
            <img 
                v-if="!item.isHover"
                style="cursor: pointer;"
                :src="require(`@/assets/img/messengerService/${item.image}`)"
                @mouseover="item.isHover = true"
            />
            <img 
                v-else
                style="cursor: pointer;"
                class="show-hover"
                :src="require(`@/assets/img/messengerService/${item.imageHover}`)"
                @mouseleave="item.isHover = false"
            />            
        </NuxtLink>
    </article>
	</section>
</template>

<script>
export default {
	name: 'ChannelItem',
	data: () => ({
		images: [
			{ image: 'channel_sms.png', imageHover: 'channel_sms_hover.png', isHover: false, url: '/descarga-ebook-sms' },
			{ image: 'channel_whatsapp.png', imageHover: 'channel_whatsapp_hover.png', isHover: false, url: '/whatsapp-consultoria' },
			{ image: 'channel_mailing.png', imageHover: 'channel_mailing_hover.png', isHover: false, url: '' },
			{ image: 'channel_voz.png', imageHover: 'channel_voz_hover.png', isHover: false, url: '' },
		],
	}),
}
</script>

<style>
</style>
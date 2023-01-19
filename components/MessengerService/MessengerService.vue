<template>
    <main>
        <Header :bg-solid="true" />
				<Banner />
        <FloatingActionButton />
        <div class="container-fluid">
          <Channels />
          <Integrations />
          <Clients />
          <Services />
          <FrequentQuestions />
        </div>
        <PageContact />
        <PageFooter />
    </main>
</template>

<script>
import Header from '../Common/Header.vue'
import PageContact from '../Common/PageContact.vue'
import PageFooter from '../Common/PageFooter.vue'
import FloatingActionButton from '../Common/FloatingActionButton.vue'
import Clients from './Clients.vue'
import Banner from './Banner.vue'
import Channels from './Channels.vue'
import Integrations from './Integrations.vue'
import Services from './Services.vue'
import FrequentQuestions from './FrequentQuestions.vue'

export default {
	name: 'MessengerService',
  components: { Header, Banner, Channels, Integrations, Clients, Services, FrequentQuestions, PageContact, PageFooter, FloatingActionButton, },

}
</script>Integrations
<style>

</style>
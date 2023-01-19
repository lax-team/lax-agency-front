<template>
    <main>
        <!-- header-area-start -->
        <Header :bg-solid="true" />
        <Banner />
        <FloatingActionButton />
        <div class="container-fluid">
            <Questions />
            <Formula />
            <Results />
            <ServicesDetail />
            <Clients />
        </div>
        <PageContact />
        <PageFooter />
    </main>
</template>

<script>
import FloatingActionButton from '../Common/FloatingActionButton.vue'
import Header from "../Common/Header.vue"
import PageContact from '../Common/PageContact.vue'
import PageFooter from '../Common/PageFooter.vue'
import Banner from './Banner.vue'
import Clients from './Clients.vue'
import Formula from './Formula.vue'
import Questions from './Questions.vue'
import Results from './Results.vue'
import ServicesDetail from './ServicesDetail.vue'

export default {
    name: 'CustomerManagement',
    components: { Header, Banner, Questions, Formula, Results, ServicesDetail, Clients, PageFooter, PageContact, FloatingActionButton, }
}
</script>

<style scoped>
    
</style>
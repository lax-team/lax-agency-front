<script>
import Header from '../Common/Header'
import PageFooter from '../Common/PageFooter'
import Breadcrumb from './Breadcrumb'
import BlogContent from './BlogContent'

export default {
  components: {
    Header,
    Breadcrumb,
    BlogContent,
    PageFooter,
  },
}
</script>

<template>
  <main>
    <!-- Header area  -->
    <Header />
    <!-- Header area end -->

    <!-- page title area  -->
    <Breadcrumb />
    <!-- page title area end -->

    <!-- page title area  -->
    <BlogContent />
    <!-- page title area end -->

    <!-- Header area  -->
    <PageFooter />
    <!-- Header area end -->
  </main>
</template>

<style scoped>
</style>

<template>
  <section class="row no-gutters mb-4">
    <article 
        v-for="item in images"
        :key="item.image"
        class="col-12 col-md-8 col-lg-4 mt-4 mx-auto d-flex justify-content-center"
    >
        <img 
            v-if="!item.isHover"
            style="cursor: pointer;"
            :src="require(`@/assets/img/customerManagement/${item.image}`)"
            @mouseover="item.isHover = true"
        />
        <img 
            v-else
            style="cursor: pointer;"
            class="show-hover"
            :src="require(`@/assets/img/customerManagement/${item.imageHover}`)"
            @mouseleave="item.isHover = false"
        />            
    </article>
  </section>
</template>

<script>
export default {
    name: 'QuestionsComponent',
    data: () => ({
        images: [
            { image: 'question_1.png', imageHover: 'answer_1.png', isHover: false },
            { image: 'question_2.png', imageHover: 'answer_2.png', isHover: false },
            { image: 'question_3.png', imageHover: 'answer_3.png', isHover: false },
        ],
    })
}
</script>

<style>    

</style>
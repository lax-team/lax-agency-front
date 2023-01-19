<template>
  <!-- slider area start here -->  
    <section 
        class="d-flex justify-content-center align-items-center img-banner-header"
        :style="{backgroundImage: 'url(' + require('@/assets/img/customerManagement/banner_header.png') + ')',}"
    >
        <img class="p-3 img-banner-header-text" src="@/assets/img/customerManagement/banner_header_text.png" />
    </section>
  <!-- slider area end here -->
</template>

<script>

export default {
  name: 'BannerComponent'
};
</script>

<style lang="scss" scoped>
    .img-banner-header {
        height: 70vh;
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }

    .img-banner-header-text {
        height: 280px;
        margin-top: 3rem;
        margin-left: 63rem !important;
        cursor: text;        
    }

    .show-header {
        animation-name: 'show-header';
        animation-duration: 2s;
    }

    .show-header-text {
        animation-name: 'show-header-text';
        animation-duration: 4s;
    }

    @media (max-width: 1490px) {
        .img-banner-header-text {
            height: 250px;
            margin-top: 7rem;
            margin-left: 48rem !important;
        }
    }

    @media (max-width: 1230px) {
        .img-banner-header-text {
            height: 250px;
            margin-top: 7rem;
            margin-left: 40rem !important;
        }
    }

    @media (max-width: 1120px) {
        .img-banner-header {
            height: 45vh;
            background-size: cover;
        }

        .img-banner-header-text {
            height: 220px;
            margin-top: 7rem;
            margin-left: 33rem !important;
        }
    }

    @media (max-width: 930px) {
        .img-banner-header {
            background-image: url('@/assets/img/customerManagement/banner_header_dark.png') !important;
            margin-left: 0 !important;
        }
        .img-banner-header-text {
            height: 220px;
            margin-top: 7rem;
            margin-left: 0rem !important;
        }        

    }

    @media (max-width: 600px) {
        .img-banner-header {
            height: 50vh;
            background-size: cover;
        }

        .img-banner-header-text {
            height: 250px;
        }
    }

    @media (max-width: 440px) {
        .img-banner-header {
            height: 50vh;
            background-size: cover;
        }

        .img-banner-header-text {
            height: 220px;
        }
    }

    @media (max-height: 900px) {
        .img-banner-header {
            height: 60vh;
            background-size: cover;
            margin-left: -10rem;
        }
        .img-banner-header-text {
            height: 190px;
        }
    }
</style>
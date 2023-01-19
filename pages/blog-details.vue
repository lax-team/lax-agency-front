<script>
// import BlogDetails from "../components/Blog-Details/BlogDetails";
import Header from '../components/Common/Header'
import PageFooter from '../components/Common/PageFooter'
import Breadcrumb from '../components/Blog-Details/Breadcrumb'
import BlogSidebar from '../components/Blog-Details/BlogSidebar'
export default {
  name: 'app',
  components: {
    Header,
    PageFooter,
    Breadcrumb,
    BlogSidebar,
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

    <!-- blog details area -->
    <section class="blog-details-area pt-120 pb-100">
      <div class="container">
        <div class="row">
          <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
            <div class="kblog">
              <div class="kblog-img">
                <NuxtLink to="/"
                  ><img
                    :src="require('@/assets/img/blog/blog-img-12.jpg')"
                    class="img-fluid"
                    alt="blog-img"
                /></NuxtLink>
                <span>21 May</span>
              </div>

              <div class="kblog-text kblog-text2">
                <div class="kblog-meta">
                  <a href="#"
                    ><font-awesome-icon :icon="['far', 'circle-user']" /> by
                    Admin</a
                  >
                  <a href="#"
                    ><font-awesome-icon :icon="['far', 'comments']" /> 2
                    Comments</a
                  >
                </div>
                <h3 class="kblog-text-title2 mb-40">
                  <a href="#">Our Strategy Create Business Growth</a>
                </h3>
                <p class="mb-35">
                  Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci
                  phaedrum. There are many variations of passages of Lorem Ipsum
                  available, but the majority have alteration in some injected
                  or words which don't look even slightly believable. If you are
                  going to use a passage of Lorem Ipsum, you need to be sure
                  there isn't anything embarrang hidden in the middle of text.
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary, making this the first true
                  generator on the Internet. It uses a dictionary of over 200
                  Latin words, combined with a handful of model sentence
                  structures, to generate Lorem Ipsum which looks reasonable.
                </p>

                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type simen book. It has survived
                  not only five centuries, but also the leap into electronic
                  typesetting. Lorem Ipsum is simply dummy text of the printing
                  and typesetting industry. orem Ipsum has been the industry's
                  standard dummy text ever since the when an unknown printer
                  took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the
                  leap into unchanged.
                </p>
              </div>
            </div>
            <div class="row pt-30 pb-20">
              <div class="col-xxl-6 col-xl-6 col-md-6 col-sm-7">
                <div class="tag_cloud">
                  <span>Tags: </span>
                  <a href="#" class="tag-cloud-link">Graphics,</a>
                  <a href="#" class="tag-cloud-link">Design,</a>
                  <a href="#" class="tag-cloud-link">Business</a>
                </div>
              </div>
              <div class="col-xxl-6 col-xl-6 col-md-6 col-sm-5">
                <div class="blog-social text-sm-end">
                  <a href="#" target="_blank"
                    ><font-awesome-icon :icon="['fab', 'twitter']"
                  /></a>
                  <a href="#" target="_blank"
                    ><font-awesome-icon :icon="['fab', 'facebook']"
                  /></a>
                  <a href="#" target="_blank"
                    ><font-awesome-icon :icon="['fab', 'pinterest-p']"
                  /></a>
                  <a href="#" target="_blank"
                    ><font-awesome-icon :icon="['fab', 'instagram']"
                  /></a>
                </div>
              </div>
            </div>

            <div class="row pr-15 pl-15">
              <div class="blog-author bg-grey">
                <div class="blog-author-img f-left">
                  <NuxtLink to="/"
                    ><img
                      :src="require('@/assets/img/blog/blog-img-author.jpg')"
                      class="img-fluid"
                      alt="blog-img"
                  /></NuxtLink>
                </div>
                <div class="blog-author-text fix">
                  <h4>Christive eve</h4>
                  <p>
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting unchanged. It was popularised in
                    the sheets containing lorem ipsum is simply free text.
                  </p>
                </div>
              </div>
            </div>

            <div class="row pr-15 pl-15">
              <div class="blog-comment-box">
                <div class="comment-title">
                  <h3 class="comment-box-title"><a href="#">2 Comments</a></h3>
                </div>
                <div class="blog-single-comment d-flex">
                  <div class="blog-comment-img">
                    <NuxtLink to="/"
                      ><img
                        :src="require('@/assets/img/blog/blog-img-author2.png')"
                        class="img-fluid"
                        alt="blog-img"
                    /></NuxtLink>
                  </div>
                  <div class="blog-comment-text">
                    <h4>Kevin Martin</h4>
                    <p>
                      A step-by-step tutorial on adding authentication and
                      authorization to your Next.js apps, with Auth0. We’ll be
                      using a Next.js SDK to connect our application.
                    </p>
                  </div>
                  <div class="reply-btn">
                    <a href="#" class="comment-btn">reply</a>
                  </div>
                </div>
                <div class="blog-single-comment no-pt d-flex">
                  <div class="blog-comment-img">
                    <NuxtLink to="/"
                      ><img
                        :src="require('@/assets/img/blog/blog-img-author3.png')"
                        class="img-fluid"
                        alt="blog-img"
                    /></NuxtLink>
                  </div>
                  <div class="blog-comment-text">
                    <h4>Jessica Brown</h4>
                    <p>
                      Everything to keep in mind when designing and building a
                      mega-dropdown, common pitfalls, hover entry/exit delays,
                      trajectory triangle technique.
                    </p>
                  </div>
                  <div class="reply-btn">
                    <NuxtLink to="/" class="comment-btn">reply</NuxtLink>
                  </div>
                </div>
              </div>
            </div>

            <div class="blog-comment-form">
              <div class="comment-title2">
                <h3 class="comment-box-title">Leave a Comment</h3>
              </div>
              <form action="#" id="contact-form" method="POST">
                <div class="row">
                  <div class="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                    <input name="name" type="text" placeholder="Your Name" />
                  </div>
                  <div class="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                    <input name="email" type="text" placeholder="Your Email" />
                  </div>
                  <div class="col-xxl-12 col-xl-12 col-lg-12 mb-20">
                    <textarea
                      name="message"
                      placeholder="Write Massage"
                    ></textarea>
                  </div>
                  <div class="col-xxl-12 col-xl-12 mb-20">
                    <button type="button" class="theme-btn border-btn">
                      Submit comment
                    </button>
                  </div>
                </div>
              </form>
              <p class="ajax-response"></p>
            </div>
          </div>
          <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mt-md-40 mt-xs-40">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </section>
    <!-- blog details area end  -->

    <!-- Footer area  -->
    <PageFooter />
    <!-- Footer area end -->
  </main>
</template>

<style scoped>
</style>

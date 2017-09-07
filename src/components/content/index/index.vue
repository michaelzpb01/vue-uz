<template>
  <div class="index_page">
    <section id="index-banner">
      <ul id="banner-box" class="swiper-wrapper">
        <li class="swiper-slide" v-for="item in bannerdata.data">
          <img class="banner-img" :src="item.carousel">
          <a class="banner-link" :href="item.address"></a>
        </li>
      </ul>
      <div class="swiper-pagination"></div>
    </section>

    <section class="index_case">
      <div class="case_title">
        <router-link :to="{ path: 'cases', query: { cityid: 3360 }}">
          <div>
            <h2 class="cont_title_name">装修案例</h2>
            <span>更多&gt;</span>
          </div>
        </router-link>
      </div>
      <ul class="active-list">
        <li v-for="item in caseData.data">
          <img class="active-img" :src="item.cover">
        </li>
      </ul>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">

  require('../../../common/js/jquery-1.8.3.min');
  require('../../../common/js/swiper');
  export default {
    data(){
      return {
        bannerdata: {},
        caseData: {}
      }
    },
    created() {
      this.$http.post('/api/index.php?m=wap&f=index&v=shuffl_photo&shuffl=3360').then(function (data) {
        this.bannerdata = data.body;
        console.log(this.bannerdata)
      });
      this.$http.post('/api/index.php?m=wap&f=index&v=tjw_picture&cityid=3360').then(function (data) {
        this.caseData = data.body;
        console.log(this.caseData)
      });
    },
    methods:{
        onBannerSwiper(){
          new Swiper('#index-banner', {
            pagination: '.swiper-pagination',
            loop: true,
            autoplay: 4000,
            paginationClickable: false,
            autoplayDisableOnInteraction: false,
            speed: 500
          });
        }
    },
    beforeCreate(){
      this.$store.state.count = '优装美家';
    },
    updated(){
      //this.onSwiper();
    },
    updated(){
      //console.log(this.caseData);
    },
    watch:{
      caseData(){
          this.$nextTick(function () {
            this.onBannerSwiper();
          });
      }
    }

  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/style/swiper.min.css";
  .index_page
    background: #f1f1f1
    padding-bottom: 1rem

  #index-banner
    width: 100%
    overflow: hidden
    position: relative
    height: 2.93rem
    overflow: hidden
    .banner-img
      width: 100%
    .banner-link
      position: absolute
      left: 0
      top: 0
      width: 100%
      height: 100%

  .index_case
    width: 6.04rem
    margin: 0 auto
    background: #fff
    padding: 0 0.1rem 0.02rem
    margin-top: 0.2rem
    .case_title
      width: 100%
      font-size: 0.28rem
      text-align: left
      line-height: 0.75rem
      h2, span
        display: inline-block
        color: #076fbf
      span
        text-indent: 4rem
        color: #999
    .active-list
      margin: 0 auto
      li
        width: 100%
        height1: 1.88rem
        margin-bottom: 0.1rem
        img.active-img
          width: 100%
          display: block
</style>

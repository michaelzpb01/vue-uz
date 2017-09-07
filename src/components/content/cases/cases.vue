<template>
  <div class="case_page">
    <ul v-for="item in caseList">
      <li class="list-li" building-id="19628">
        <div class="manager-info">
          <a class="buter_logolink" href="mobile-m_butler_details.html?id=M站-工地直播&amp;butlerid=25416">
            <img class="manager-face" src="http://www.uzhuang.com/image/pic_230/636720303c03c000ojp5sx.png">
          </a>
          <p class="manager-name">guanjia02</p>
          <p class="manager-job">管家</p>
          <p class="update-time"><i class="iconfont icon-days"></i><span>2017-03-24</span></p>
        </div>
        <div class="building-box">
          <img class="lazy-img fadeIn">
          <a style="display: block;" class="building-info" href="mobile-live_detail.html?live_id=19628">
            <div class="info-div">
              <h3>上门量房</h3>
              <span>阿萨德飞洒-完工</span>
              <p>
                <span>140㎡</span>
                <span>小户型</span>
                <span>半包</span>
              </p>
            </div>
            <div class="look-write-num">
              <p><i class="iconfont icon-eyes"></i><span>0</span></p>
              <p><i class="iconfont icon-pinglun"></i><span>0</span></p>
            </div>
          </a>


        </div>
      </li>
    </ul>

    <div>
      <input v-on:click="btnClick" type="button" value="加载">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
          caseList:[],
          caseData:{
            arr:[1,2,3]
          },
          caseListData:{},
          getDataPageData:{
              maxpage:0,
              newpage:0,
              oldpage:0
          }
      }
    },
    created() {

    },
    methods: {
        btnClick(){
          this.caseList.push(this.caseData);
          console.log(this.caseList);

        },
        getDataList(fn){
          this.$http.post('/api/index.php?m=wap&f=biz_lognew&v=listl&acquiesce=0&nodeid=0&page=0').then(function (data) {
            this.caseListData = data.body.data.arr;
            console.log(this.caseListData);
            fn&&fn();
          });
        }
    },
    beforeCreate(){
      this.$store.state.count = '精品案例';
    },
    beforeMount(){
      // this.caseList.push(this.caseData);
      this.getDataList(()=>{
        this.caseList.push(this.caseListData);
      });
      //console.log(this.caseList)
    }
  };
  // http://www.open-open.com/lib/view/open1464276744447.html 下拉加载思想
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .case_page
    padding-bottom:1rem
  .case_list
    width:90%
    height:2rem
    background: #f66503
    margin:0 auto 0.2rem
  .list-li
    width: 6rem
    margin:0 auto
    padding-bottom: 0.1rem
    background: #fff
    .manager-info
      width:100%
      height: 0.94rem
      line-height:0.94rem
      font-size:0
      text-align: left
    .buter_logolink
      width:.74rem
      height: .74rem
      display: inline-block
      vertical-align: middle
      background: #f60
      margin-right:0.1rem
    .manager-name,.manager-job,.update-time
      display: inline-block
      font-size:0.2rem
      vertical-align: middle

</style>

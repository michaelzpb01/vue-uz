<template>
  <div class="app_footer">
    <ul class="footer_list">
      <li class="footer_minu">
        <router-link to="/" exact>
          <div><i class="iconfont icon-home"></i></div>
          <p>首页</p>
        </router-link>
      </li>
      <li class="footer_minu">
        <router-link to="cases">
          <div><i class="iconfont icon-tuku"></i></div>
          <p>精品案例</p>
        </router-link>
      </li>
      <li class="footer_minu">
        <router-link to="sitelive">
          <div><i class="iconfont icon-gongdi"></i></div>
          <p>工地直播</p>
        </router-link>
      </li>
      <li class="footer_minu">
        <router-link to="userhome">
          <div><i class="iconfont icon-shejishi"></i></div>
          <p>我的</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app_footer
    height: 0.88rem
    position: fixed
    left: 0
    bottom: 0
    background: #fff
    width: 100%
    z-index:999
    border-top:1px solid #eee
    .footer_list
      display: flex
      .footer_minu
        flex: 1
        text-align: center
        & > a
          display: block
          .iconfont
            font-size 0.4rem
            line-height: 0.6rem
            color: #666
            display: inline-block
            margin-top: 0.02rem
          p
            font-size: 0.2rem
            color: #666
            line-height:0.15rem
        .active
          .iconfont
            color: #0089dc
          p
            color: #0089dc
</style>

<template>
  <div id="app">
    <!--header start-->
    <header-v :titleNames="titleName"></header-v>
    <!--header end-->

    <!--index router view start-->
    <div class="app_content">
      <router-view></router-view>
    </div>
    <!--index router view end-->

    <!--footer start-->
    <footer-down></footer-down>
    <!--footer end-->
  </div>
</template>

<script type="text/ecmascript-6">
  import header from '@/components/header/header';
  import footer from '@/components/footer/footer';

  export default {
    data() {
      return {
        titleName: {
            name: '优装美家',
            isindex:true
        }
      };
    },
    components: {
      'header-v': header,
      'footer-down': footer
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .box
    margin-top:1rem
    width: 1rem
    height: 1rem
  .app_content
    margin-top:0.88rem
    line-height: 0.7rem
    text-align: center
    font-size: .3rem
</style>

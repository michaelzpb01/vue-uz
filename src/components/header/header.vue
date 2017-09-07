<template>
  <div class="app_header">
    {{this.$store.state.count}}
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
//    props: {
//      titleNames: {
//        type: Object
//      }
//    }
//    data(){
//      return{
//        name:this.$store.state.count
//      }
//    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app_header
    height: 0.88rem
    text-align: center
    color: #333
    font-size: 0.3rem
    position: fixed
    left: 0
    top: 0
    background: #fff
    width:100%
    line-height:0.88rem
    z-index:999
    border-bottom:1px solid #f1f1f1
</style>

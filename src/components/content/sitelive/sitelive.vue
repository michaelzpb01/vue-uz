<template>
  <div class="inner">
    <p>this is gons i zhibo</p>
    <div class="lists"></div>
    <ul>
      <li v-for="item in this.listdata">{{item}}</li>
    </ul>
    <input type="button" value="dianjijiazai" @click="aaa">
  </div>
</template>

<script type="text/ecmascript-6">


  export default {
    data(){
      return {
          listnum:1,
          listdata:[]
      }
    },
    methods: {
        aaa(){
            var state = 0;
            for(var i = this.listnum;i<this.listnum+10;i++){
                console.log(i);
                //this.listnum = i;
                state = i+1;
                this.listdata.push(i);
            }
          this.listnum = state;
          console.log(this.listdata)
        }
    },
    created(){
      this.$store.state.count = '工地直播';
      console.log(this.listnum);
      this.aaa();

    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>

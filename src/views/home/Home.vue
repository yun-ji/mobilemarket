<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/Navbar";
  import {getHomeMultidata} from "network/home";

  export default {
    name: "Home",
    components:{
      NavBar
    },
    create(){
      //请求多个数据
      getHomeMultidata().then(res =>{
        console.log(res);
      })
    }
  }
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>

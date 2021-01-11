<template>
  <div >
   <main_top></main_top>

    <div class="aa">
      
     <div class="ua" >
     订单详情
     </div>
     <div class="uas" >

     </div>



     <hr />
     <div class="ua" style="width: 100%;height: 30px;">
     商品详情
     </div>
     <div class="uas" >

     </div>
     <hr />
     <div class="ua" style="width: 100%;height: 30px;">
     用户详情
     </div>
     <div class="uas" >

     </div>
    </div>
   <main_menu></main_menu>


  </div>
</template>

<script>
import main_top from "./main_top.vue"
import main_menu from "./main_menu.vue"
export default {

  components:{
     main_top,
     main_menu
  },
  
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.aa{
  width: 85%;
  float: right;
  height: 920px;
  background-color: palegoldenrod;
  display: inline-block;
 }
 .ua{
  width: 100%;
  height: 30px;
  border: 1px solid lightgrey;
  background-color: lightgrey;
  padding: 5px;
 }
 .uas{
  width: 100%;
  height: 250px;
  border: 1px solid lightgrey;
  background-color: white;
  padding: 5px;
 }
</style>

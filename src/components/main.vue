<template>
  <div>
    <main_top></main_top>

    <div class="aa">

      <div class="ua">
        订单详情
      </div>
      <div class="uas">
<br />
     <span>已付款{{}}</span>
<div class="progress">
    <div class="progress-bar progress-bar-striped progress-bar-animated" style="width:60%">已付款</div>
  </div>
  <br />
  <span>未付款{{}}</span>
  <div class="progress">
      <div class="progress-bar progress-bar-striped progress-bar-animated" style="width:40%">未付款</div>
    </div>
      </div>

      <div class="ua" style="width: 100%;height: 30px;">
        商品详情
      </div>
      <div class="uas">


      </div>

      <div class="ua" style="width: 100%;height: 30px;">
        用户详情
      </div>
      <div class="uas">
       用户数：<span>普通用户{{}}</span><span>VIP尊享用户{{}}</span>
        <div class="progress">
           <div class="progress-bar bg-success" style="width:70%">
            普通用户
           </div>
           <div class="progress-bar bg-warning" style="width:30%">
            VIP尊享用户
           </div>

         </div>
      </div>
    </div>
    <main_menu></main_menu>


  </div>
</template>

<script>
  import main_top from "./main_top.vue"
  import main_menu from "./main_menu.vue"
  export default {

    components: {
      main_top,
      main_menu
    },

    data() {
      return {
        usercount:"",
		goodscount:""

      }
    },
    methods: {
      //获取登录状态
      success: function() {
        var o=this;
        $.ajax({
          url: "http://127.0.0.1:8056/back/ajax/administratoronline",
          success: function(r) {
				if (r == "") {
					o.$router.push("/login");
				} else {

				}
          },
          xhrFields: {
            withCredentials: true //传递cookie,保持session的唯一性
          },
          crossDomain: true,
        })
      }
    },
    mounted() {
      this.success();
    }


  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="">
  h1,
  h2 {
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

  .aa {
    width: 85%;
    float: right;
    height: 920px;
    background-color: #E0FFFF;
    display: inline-block;
  }

  .ua {
    width: 100%;
    height: 30px;
    border: 1px solid lightgrey;
    background-color: lightgrey;
    padding: 5px;
  }

  .uas {
    width: 100%;
    height: 180px;
    border: 1px solid lightgrey;
    background-color:#F0FFFF;
    padding: 5px;
  }
</style>

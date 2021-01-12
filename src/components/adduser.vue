<template>
  <div>
    <main_top></main_top>
    <div class="aa">
      <p >添加账户</p>
      <hr />
    <div class="adduser">
    


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
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      //获取登录状态
      success: function() {
        var o=this;
        $.ajax({
          url: "http://127.0.0.1:8080/java06/ajax/useronline",
          success: function(r) {
            						if (r == "") {
            							o.$router.push("/login");
            						}
          },
          xhrFields: {
            withCredentials: true //传递cookie,保持session的唯一性
          },
          crossDomain: true,
        })
      },

      //添加user
      selectuser: function() {
        var o=this;
        $.ajax({
          url: "http://127.0.0.1:8080/java06/ajax/selectuser",
          success: function(r) {
                 o.user=r.user;
          },

        })
      },



    },
    mounted() {
      this.success();
    }




  }
</script>

<style scoped="">
  .aa {
    width: 85%;
    float: right;
    height: 920px;
    background-color: palegoldenrod;
    display: inline-block;
  }
  .adduser{
    width: 80%;
    height: 600px;
    background-color: #007BFF;
    margin: auto;
    margin-top: 100px;
  }
  p{
margin-top: 12px;
font-size: 20px;
margin-left: 30px;
  }

</style>

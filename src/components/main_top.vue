<template>
  <div class="top " style="background-color: lightcyan; border-bottom: 1px solid black;">


      <nav class="navbar navbar-expand-sm k" style="width: 100%;float: left;height: 83px; background-color: lightcyan;border-bottom: 1px solid black; ">
        <h1>{{s}}</h1>
        <div style="display: inline-block; position: absolute;margin-left: 90%;"  >
          <div class="dropdown" >
            <button type="button" class="btn btn-link dropdown-toggle" data-toggle="dropdown" style="font-size: 20px; line-height: 60px;margin-right: 20px;">
              <img :src="'../../static/tx/'+administrator.headportrait" style="height: 65px;width: 65px; border-radius: 80px;border: 1px solid black;" />
              <span>{{administrator.aname}}</span>
            </button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="http://127.0.0.1:8056/back/app/logout">退出</a>
              <a class="dropdown-item" href="#">修改密码</a>
            </div>
          </div>
        </div>
      </nav>



  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        administrator: "",
        s:"首页"
      }
    },
    methods: {
      //获取登录状态
      success: function() {
        var o = this;
        $.ajax({
          url: "http://127.0.0.1:8056/back/ajax/administratoronline",
          success: function(r) {
            o.administrator = r;
          },
          xhrFields: {
            withCredentials: true //传递cookie,保持session的唯一性
          },
          crossDomain: true,
        })
      },
    },
    mounted() {
      this.success();

    }
  }
</script>

<style scoped="">
  .top {
    width: 85%;
    border-bottom: 1px solid #888888;

    height: 83px;
    float: right;
  }
</style>

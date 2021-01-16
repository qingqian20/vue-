<template>
  <div>
    <main_top></main_top>
    <div class="aa">
      <div class="biaoti">
        <p style="margin: auto;">用户管理</p>
      </div>

      <div class="inp">
        用户名<input v-model="uname" />
        姓名<input v-model="ufname" />
        <button @click="usernameselect(v.uid)">搜索</button>
      </div>
      <br />
      <div>
        <div class="tt">
          <span class="chaxun">查询</span>
          <span class="tianjia btn btn-link">添加</span>
        </div>
        <table class="table" style="text-align: center;">
          <tr>
            <td>用户名</td>
            <td>昵称</td>
            <td>性别</td>
            <td>手机号</td>
            <td>邮箱</td>
            <td>操作</td>
          </tr>
          <tr v-for="v in user">
            <td>
              
                <input type="text" v-model="v.uname" />{{}}
            </td>
            <td><input type="text" v-model="v.ufname" /></td>

            <td><input type="text" v-model="v.usex" /></td>
            <td><input type="text" v-model="v.ufnum" /></td>
            <td><input type="text" v-model="v.ufnum" /></td>
            <td><input type="text" v-model="v.email" /></td>
            <td>

              <button class="btn btn-warning">编辑</button>
              <button class="btn btn-danger" @click="deleteuser(v.uid)">删除</button>

            </td>

          </tr>
        </table>

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
        user: "",
        uname: "",
        ufname: ""
      }
    },
    methods: {
      //获取登录状态
      success: function() {
        var o = this;
        $.ajax({
          url: "http://127.0.0.1:8056/back/ajax/administratoronline",
          success: function(r) {
            if (r == "") {
              o.$router.push("/login");
            } else {
              o.selectuser();
            }

          },
          xhrFields: {
            withCredentials: true //传递cookie,保持session的唯一性
          },
          crossDomain: true,
        })
      },
      //查询user
      selectuser: function() {
        var o = this;
        $.ajax({
          url: "http://127.0.0.1:8056/back/ajax/selectuser",
          success: function(r) {
            console.log(r);
            o.user = r;
          },

        })
      },

      //主键主键删除
      deleteuser: function(uid) {
        var o = this;
        $.ajax({
          url: "http://127.0.0.1:8056/back/ajax/deleteuser",
          success: function(r) {
            if (r > 0) {
              o.selectuser();
            }
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

  .inp {
    width: 100%;
    height: 50px;
    margin: auto;
    text-align: center;
    padding-top: 10px;
    border: 1px solid black;
  }

  .biaoti {
    text-align: center;
    font-size: 30px;
    margin-bottom: 20px;

  }

  .tt {
    width: 100%;
    height: 50px;
    margin: auto;
    font-size: 25px;
    padding-top: 10px;
    padding-left: 20px;
    border-bottom: 1px solid black;

  }

  .chaxun {
    float: left;
  }

  .tianjia {
    float: right;
    border: 1px solid #000000;
    margin-right: 20px;
    margin-bottom: 5px;
  }
</style>

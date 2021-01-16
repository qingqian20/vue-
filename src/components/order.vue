<template>
  <div>
    <main_top></main_top>
    <div class="order">
      <div class="biaoti">

      </div>

      <div class="inp" style="border-bottom: ipx solid black;">
         <div class="input-group mb-3" style="width: 30%;margin: auto;">
            <input type="text" class="form-control"v-model="uname" placeholder="请输入商品名或关键字"style="background:rgba(255,255,255,0.1);" >
            <div class="input-group-append">
              <span class=" input-group-text btn">搜索</span>
            </div>
          </div>
      </div>
      <br />
      <div>
        <div class="tt">
          <span class="chaxun">查询订单</span>
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
    data: function() {
      return {
          goods:""
      }
    },
    methods:{

    },
    mounted() {

    }
  }
</script>

<style scoped="">
  .order {
    width: 85%;
    float: right;
    height: 920px;
    background-color: #E0FFFF;
    display: inline-block;
  }
  .tianjia {
    float: right;
    border: 1px solid #000000;
    margin-right: 20px;
    margin-bottom: 5px;
  }
  .chaxun {
    float: left;
  }
</style>

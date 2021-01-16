<template>
  <div>
    <main_top></main_top>
    <div class="goods">
      <p> 商品信息</p>
      <table class="table">
        <tr class="bg-warning">
          <td>商品编号</td>
          <td>商品名称</td>
          <td>商品图片</td>
          <td>上架日期</td>
          <td>商品价格</td>
          <td>商品类型</td>
          <td>操作</td>
        </tr>
        <tr v-for="v in goods">
          <td>{{v.gdid}}</td>
          <td>{{v.gdname}}</td>
          <td>
            <img :href="'../tp/'+v.picture" />
          </td>
          <td>{{v.gddate}}</td>
          <td>{{v.price}}</td>
          <td>{{v.gkeyword}}</td>
          <td>

            <button class="btn btn-warning">编辑</button>
            <button class="btn btn-danger" @click="deleteuser(v.uid)">删除</button>

          </td>
        </tr>
      </table>
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
.goods {
    width: 85%;
    float: right;
    height: 920px;

    display: inline-block;
  }
  p{
    background-color: #007BFF;
    padding: 15px;
  }
</style>

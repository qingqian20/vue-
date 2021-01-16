<template>
  <div>
    <main_top></main_top>
    <div class="goods">

      <p> 商品信息</p>
      <div class="inp" style="border-bottom: ipx solid black;">
         <div class="input-group mb-3" style="width: 30%;margin: auto;">
            <input type="text" class="form-control"v-model="uname" placeholder="请输入商品名或关键字"style="background:rgba(255,255,255,0.1);" >
            <div class="input-group-append">
              <span class="ss input-group-text btn">搜索</span>
            </div>
          </div>
      </div>
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
      <div>
        <ul class="pagination">
          <li class="page-item"><a class="page-link" href="#">首页</a></li>
          <li class="page-item"><a class="page-link" href="#">上一页</a></li>
          <li class="page-item active"><a class="page-link" href="#">{{}}</a></li>
          <li class="page-item"><a class="page-link" href="#" >下一页</a></li>
          <li class="page-item"><a class="page-link" href="#">尾页</a></li>
        </ul>
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
.goods {
    width: 85%;
    float: right;
    height: 920px;
    background-color:#E0FFFF ;
    display: inline-block;
  }
  p{
    background-color:moccasin;
    padding: 15px;
  }
  .ss:active{
border: 1px solid #8FBC8F;
  }
  .ss:hover{
  background-color: burlywood;
    }
</style>

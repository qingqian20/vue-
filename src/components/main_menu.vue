<template>


  <div class="sfq bg-secondary navbar-dark">

    <div id="accordion" style="margin: 0px;padding: 0px;">
      <div class="card ">
        <div class="card-header" style="height: 80px;">
          <a class="card-link" style=" font-size: 25px;line-height: 55px;" href="/">
            后台管理系统
          </a>
        </div>
      </div>

      <div class="card bg-info navbar-dark">
        <div class="card-header bg-secondary navbar-dark">
          <button type="button" class="btn  btn-block " data-toggle="collapse" data-target="#collapseTwo" style=" font-size: 25px;">商品管理</button>
        </div>
        <div id="collapseTwo" class="collapse  show">
          <div class="card-body" style="padding: 0px;">
            <ol>
              <li>
                <a href="/goodsinfo" v-model="s">现有商品</a>
              </li>
              <li>
                <a href="addgoods">上架商品</a>
              </li>

            </ol>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header bg-secondary navbar-dark">
          <button type="button" class="btn  btn-block " data-toggle="collapse" data-target="#collapseOne" style=" font-size: 25px;">账户管理</button>
        </div>
        <div id="collapseOne" class="collapse">
          <div class="card-body" style="padding: 0px;">
            <ol>
              <li>
                <a href="/user">账户信息</a>
              </li>
              <li>
                <a href="/adduser">添加用户</a>
              </li>

            </ol>
          </div>
        </div>
      </div>



      <div class="card">
        <div class="card-header bg-secondary navbar-dark">

          <button type="button" class="btn  btn-block" data-toggle="collapse" data-target="#collapseThree" style=" font-size: 25px;">订单管理</button>
        </div>
        <div id="collapseThree" class="collapse">
          <div class="card-body" style="padding: 0px;">
            <ol>
              <li>
                <a href="/order">订单信息</a>
              </li>
              <li>2</li>
              <li>3</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

  export default {
    data: function() {
      return {
        administrator: "",
        s:""
      }
    },
    methods: {

    },
    mounted() {
      this.success();

    }
  }
</script>

<style scoped="">
  ol {
    list-style: none;
    padding: 0px;
    background-color: beige;
    margin: 0;
  }

  li {
    border: 1px solid black;
    margin: 0;
    height: 50px;

    line-height: 50px;
  }

  li:hover {
    background-color: navajowhite;
  }

  .sfq {
    width: 15%;
    text-align: center;
    font-size: 20px;
    height: 1000px;
    color: black;

    padding: 0px;
    display: inline-block;
  }

  .card {

    border-left: none;
    border-right: none;
    border-top: 1px solid #212529;
    border-bottom: 1px solid #212529;
  }

  .card-header {
    height: 50px;
    padding: 0;


  }

  .card-header:hover .btn {
    background-color: deeppink;
  }

  #accordion {
    width: 99.5%;
  }

  .card-link {
    color: black;
  }

  a {
    text-decoration: none;
    color: black;

  }
</style>

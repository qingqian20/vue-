<template>


<div class="sfq" >

  <div id="accordion" style="margin: 0px;padding: 0px;">
<div class="card" >
      <div class="card-header" style="background-color:dodgerblue;height: 80px;" >
        <a class="card-link" style="color: white; font-size: 25px;line-height: 55px;">
          后台管理系统
        </a>
      </div>
    </div>

    <div class="card" >
      <div class="card-header" style="background-color: black; padding: 0;">
      <button type="button" class="btn  btn-block " data-toggle="collapse" data-target="#collapseTwo" style="color: white; font-size: 25px;">商品管理</button>
      </div>
      <div id="collapseTwo" class="collapse  show" >
        <div class="card-body" style="padding: 0px;">
         <ol>
           <li>
             <a>现有商品</a>
           </li>
           <li>上架商品</li>
           <li>修改商品信息</li>
         </ol>
        </div>
      </div>
    </div>

    <div class="card" >
      <div class="card-header" style="background-color: black; padding: 0; margin: 0;" >
       <button type="button" class="btn  btn-block " data-toggle="collapse" data-target="#collapseOne" style="color: white; font-size: 25px;">账户管理</button>
      </div>
      <div id="collapseOne" class="collapse" >
        <div class="card-body" style="padding: 0px;">
          <ol>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ol>
        </div>
      </div>
    </div>



    <div class="card" >
      <div class="card-header" style="background-color: black; padding: 0;">

        <button type="button" class="btn  btn-block" data-toggle="collapse" data-target="#collapseThree" style="color: white; font-size: 25px;">订单管理</button>
      </div>
      <div id="collapseThree" class="collapse" >
        <div class="card-body" style="padding: 0px;">
         <ol>
           <li>订单信息</li>
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
</script>

<style scoped="">

  ol{
    list-style:none;
    padding: 0px;
    background-color: #212529;
    margin: 0;
  }
  li{
    border: 1px solid black;
    margin: 0;
    height: 50px;
    color: white;
    line-height: 50px;
  }
  li:hover{
   background-color: #007BFF;
  }
  .sfq{
    width: 15%;
     text-align: center;
     font-size: 20px;
     height: 1000px;
    background-color: black;
    padding: 0px;
    display: inline-block;
  }
  .card{

   border-left: none;
   border-right: none;
   border-top: 1px solid #212529 ;
   border-bottom: 1px solid #212529;
  }
  .card-header{
   height: 50px;

  }
  #accordion{
   width: 99.5%;
  }
</style>

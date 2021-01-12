<template>
  <div class="top">
    <div>
      <div class=" bg-secondary navbar-dark" style="width: 10%;float: left;height: 83px;"></div>
      <nav class="navbar navbar-expand-sm bg-secondary navbar-dark" style="width: 80%;float: left;height: 83px;">
        <form class="form-inline">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="请输入">
            <span class="input-group-btn">
              <button class="btn btn-dark " type="button">查询</button>
            </span>
          </div>

        </form>
      </nav>
    </div>
    <div style="float: right;">
      <div>
        <div class="dropdown">
          <button type="button" class="btn btn-link dropdown-toggle" data-toggle="dropdown" style="font-size: 20px; line-height: 60px;margin-right: 20px;">
            管理账户
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">退出</a>
            <a class="dropdown-item" href="#">修改密码</a>
            <a class="dropdown-item" href="#">个人信息</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped="">
  .top {
    width: 85%;
    border-bottom: 1px solid #888888;

    height: 83px;
    float: right;
  }
</style>

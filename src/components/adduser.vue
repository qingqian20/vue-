<template>
  <div>
    <main_top></main_top>

    <div class="aa">
      <div class="p">添加账户</div>
      <hr />
      <div class="u">
        <div class="text">
          <div class="adduser">
            账户名:&nbsp<input type="text" v-model="user.uname" /> 必填<br />
            密&nbsp&nbsp&nbsp&nbsp码:&nbsp<input type="password" v-model="user.upw" />必填<br />
          </div>
          <br /> <br /> <br />
          <div class="adduserinfo">
            昵&nbsp&nbsp&nbsp&nbsp称:&nbsp<input type="text" v-model="userinfo.ufname" />必填<br />
            性&nbsp&nbsp&nbsp&nbsp别：&nbsp<input id="man" type="radio" checked="checked" name="1" v-model="userinfo.ufname" />男
            <input id="woman" type="radio" name="1" v-model="userinfo.ufname" />女<br />
            手机号:&nbsp<input type="text" />必填<br />
            邮&nbsp&nbsp&nbsp&nbsp箱:&nbsp<input type="email" v-model="userinfo.email" />必填<br />
            生&nbsp&nbsp&nbsp&nbsp日:&nbsp<input type="date" v-model="userinfo.birthday" /><span>选填</span><br />
            <input type="text" /><br />
          </div>
        </div>
        <div class="gg">

        </div>
      </div>
      <div class="u2">
        <span class="tj  btn btn-info" @click="adduser()">提交</span>
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
        user: {
          uname: "",
          upw: ""
        },
        userinfo: {
          usex: "",
          ufnum: "",
          email: "",
          birthday: ""
        }
      }
    },
    methods: {
      //获取登录状态
      success: function() {
        var o = this;
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
      adduser: function() {
        var o = this;
        $.ajax({
          url: "http://127.0.0.1:8080/java06/ajax/selectuser",
          data:{
              user:"o.user",
              userinfo:"o.userinfo"
          },
          success: function(r) {
                 if(r>0){
                    alert("添加成功");


                 }else{
                   alert("添加失败");

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

  .u {
    width: 80%;
    height: 600px;
    background-color: pink;
    margin: auto;
    margin-top: 100px;
    border-radius: 5px;
    padding: 5px;
  }

  .adduser {
    background-color: coral;
    display: inline-block;
    width: 100%;
    border-radius: 20px;
    text-align: center;
  }

  .adduserinfo {
    background-color: darkseagreen;
    text-align: center;
    width: 100%;
    border-radius: 20px;
  }

  .text {
    width: 30%;
    display: inline-block;
    margin-left: 100px;
    margin-top: 70px;
  }
  .gg{
    width: 50%;
    height: 400px;
    background-color: lightcoral;
    border-radius: 20px;
    display: inline-block;
    padding: 20px;
    margin-left: 50px;
     margin-top: 70px;
  }

  .p {
    margin-top: 12px;
    font-size: 20px;
    padding-left: 30px;
    background-color: #007BFF;
    padding: 10px;
  }

  input {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .u2 {
    width: 80%;
    height: 50px;
    background-color: pink;
    margin: auto;
    margin-top: 10px;

    padding: 5px;
  }
  .tj{
    width: 100px;
    position: absolute;
    margin-right: 600px

  }
</style>

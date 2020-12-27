<template>
  <div class="context">
    <div class="context-nav"><h1>登录</h1></div>
    <Input prefix="md-person" placeholder="手机/用户名"  class="input1" size="large" v-model="username"/>
    <Input prefix="md-lock" placeholder="请输入密码" class="input2" size="large" v-model="password" />
    <div>
        <Checkbox v-model="single" class="checkbox" @click="bush">记住密码</Checkbox>
        <router-link to="/register" class="zhu">注册</router-link>
    </div>
    <Button type="error" long class="deng" size="large" @click="loginSubmit()">登录</Button>
  </div>
</template>

<script>
import axios from 'axios'
 export default {
   name: 'login',
   props: {
   },
   components: {

   },
   data () {
     return {
         single : false ,
         username:'',
         password:''
     }
   },
   methods: {
    loginSubmit(){
        let flag = 1;
        if(this.username == '' || this.password == ''){
          alert("用户名和密码不能为空！！！");
          flag = 0;
        } 
        if(flag == 1){
           axios('/user').then(res => {
                if(this.username  == res.data.username && this.password == res.data.password){
                    this.$Message.success('登录成功');
                    this.$router.push({ path: '/home' });
                    localStorage.setItem("username",this.username);
                    if(this.single==true){
                      localStorage.setItem("single",1);
                    }
                    else{
                      localStorage.setItem("single",0);
                    }
                    localStorage.setItem("password",this.password);
                }else{
                    alert("用户名和密码不正确！！！");
                }
           })
        }
        
    },
    bush(){
      this.single = !this.single;
    },
    getuser(){
      if(Number(localStorage.getItem("single"))){
        this.username=localStorage.getItem("username");
        this.password=localStorage.getItem("password");
        this.single=true;
      }
     },
     deluser(){
       localStorage.removeItem("username");
       localStorage.removeItem("password");
       localStorage.removeItem("single");
     }
   },
   mounted() {
     this.getuser();
     this.deluser();
   }
 }
</script>

<style>
.input1{
  width:370px;
  margin-bottom:30px;
  margin-top:30px;
}
.input2{
  width:370px;
  margin-bottom:15px;
}
.checkbox{
  float:left;
  margin-left:40px;
}
.context{
  opacity: 0.95;
  margin:110px auto;
  background:white;
  height:400px;
  width:450px;
  border-radius: 15%;
}
.context-nav{
  padding-top: 5%;
  padding-bottom: 5%;
}
.zhu{
  color:#000;
  float:right;
  margin-right:40px;
}
.deng{
  width:370px;
  margin-top:30px;
  background:orange;
  border: orange;
}
</style>
<template>
  <div class="context">
    <div class="context-nav"><h1>注册</h1></div>
    <Input prefix="md-person" placeholder="请输入用户名" class="input1" size="large" v-model="uservalue" />
    <Input prefix="md-lock" placeholder="设置密码" type="password" class="input1" size="large" v-model="passwordvalue"/>
    <Input prefix="md-lock" placeholder="确认密码" type="password" class="input1" size="large" v-model="passwordvalue2"/>
    <div>
        <Checkbox v-model="single" class="check">点击表示您同意商城 《服务协议》</Checkbox>
    </div>
    <Button type="success" long class="down" size="large" @click="registerSubmit()">注册</Button>
  </div>
</template>
<script>
 export default {
   name: 'register',
   components: {

   },
   data () {
     return {
        single:false, //是否统一协议
        uservalue: '' ,//用户名
        passwordvalue: '', // 密码
        passwordvalue2: '', //确认密码
     }
   },
   methods: {
    //注册表单校验
    registerSubmit(){
      let userzz = /^((?!\\|\/|:|\*|\?|<|>|\||'|%).){1,8}$/;//不包含特殊字符
      let passwordzz = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/; //密码校验正则表达式
      let flag = 1 //符合标准标识
      let rtring="";
      if(!userzz.test(this.uservalue)){
        rtring=rtring+"不能包含特殊字符!\n";
        flag = 0
      }
      if(!passwordzz.test(this.passwordvalue)){
        rtring=rtring+"密码必须包含数字和字母,且在6~16位之间\n";
        flag = 0
      }
      if(this.passwordvalue != this.passwordvalue2){
        rtring=rtring+"两次密码不一样\n";
        flag = 0
      }
      if(this.single == false){
        flag = 0
        rtring=rtring+"请勾选用户协议";
      }
      if(flag == 1){
        this.$Message.info('注册成功');
        this.$router.push({ path: '/login' });
      }
      else{
        alert(rtring);
      }
    }
   }
}
</script>

<style type="text/css">
.context{
  margin:75px auto;
  background:rgb(238, 234, 234);
  height:500px;
  width:450px;
  border-radius: 15%;
  opacity: 0.95;
}
.context-nav{
  padding-top: 10%;
  padding-bottom: 10%;
}
.input1{
  width:370px;
  margin-bottom:15px;
}
.check{
  float:left;
  margin-left:40px;
}
.deng{
  color:#000;
  float:right;
  margin-right:40px;
}
.down{
  width:370px;
  margin-top:30px;
}
</style>
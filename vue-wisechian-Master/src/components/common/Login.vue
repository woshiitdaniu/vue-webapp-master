<template>
    <div class="welcome" v-show="isShow">
    	<div class="login-title">
         		<p class="chinaText">智慧链后台审核App</p>
         		<p class="englishText">WISDOM CHAIN</p>
         	</div>
         <div class="login-contain">
         	
         	 <div class="login-acctount forms-item">
         	 	<label class="login-labal">账&nbsp;&nbsp;&nbsp;&nbsp;号：</label><input class="login-inp" v-model="account"/>
         	 </div>
         	 <div class="login-password forms-item">
         	 	<label class="login-labal">密&nbsp;&nbsp;&nbsp;&nbsp;码：</label><input class="login-inp" v-model="paw"/>
         	 </div>
         	 <div class="login-code forms-item">
         	 	<label class="login-labal">验证码：</label><input class="login-inp" v-model="code"/>
         	 </div>
         	  <div class="login-btn">
         	 	<button @click="tologin">登录</button>
         	 </div>
         	 <p class="tips" v-show="ifShow">{{ tipText }}</p>
         </div>
    </div>
</template>
<script>
import { toLogin } from '../../utils/api'
export default {
	name:"Login",
    data() {
            return {
                isShow: true,
                ifShow:false,
                account:'',
                paw:'',
                code:'',
                tipText:''
            }
       },
       mounted(){
       	this.checkLogin()
       		
       },
           methods: {
            	async tologin(){
            		let account = this.account;
            		let paw = this.paw;
            		let code = this.code;
            		if(!account){
            			this.ifShow = true;
            			this.tipText = "请输入账号！"
            			return;
            		}
            		if(!paw){
            			this.ifShow = true;
            			this.tipText = "请输入密码！"
            			return;
            		}
            		if(!code){
            			this.ifShow = true;
            			this.tipText = "请输入验证码！"
            			return;
            		}
            		this.ifShow = false;
            		//做登录处理
//          		let results = await toLogin({
//          			acc:account,
//          			paws:paw,
//          			code:code
//          		})
					this.isShow = false;
					localStorage.isLogin = true
            },
            	checkLogin(){
            		if(localStorage.isLogin){
		       			this.isShow = false;
		       		}else{
		       			this.isShow = true;
		       		}
            	}
            }
      
        
}
</script>
<style scoped="scoped">
/* 被注释掉的样式不适合部分安卓机 */
.login-title{
	position: absolute;
    width: 100%;
    text-align: center;
    top: 27vh;
}
.chinaText{
	font-size: 20px;
    color: white;
}
.englishText{
	font-size: 15px;
    color: #e9e96e;
}
.welcome {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 6;
    background: rgba(232,110,55);
    animation: welcome 0.5s;
    transition: 0.3s;
    -webkit-transition: 0.3s;
}

.login-contain{
	padding: 0 57px;
	margin-top: 45vh;
}

.login-labal{
	display: inline-block;
	flex: 0 0 52px;
	text-align: right;
	color: white ;
	 font-weight: 700;
}
.login-inp{
	display: inline-block;
	flex: 1;
	border: none;
	border-radius: 4px;
	text-indent: 0.8rem;
	font-size: 14px;
}
.forms-item{
	display: flex;
	    height: 34px;
    line-height: 34px;
    margin-bottom: 10px;
}
button{
	    width: 100%;
    height: 34px;
    background-color: rgb(255,191,37);
    color: white;
    outline: none;
    border: none;
    border-radius: 4px;
}
.tips{
	height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 15px;
}
</style>

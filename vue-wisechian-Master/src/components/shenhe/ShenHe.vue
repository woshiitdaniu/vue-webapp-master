<template>
    <div id="contact">
    	<div class="tips" v-show="ShenHeList.length<=0">
    		客官，已无单可审啦！
    	</div>
    	<div class="mask" v-show="ifShowMask">       	      	
        	<div class="mask-code">
        		<p class="Mr-CodeTitle">谷歌验证码<span @click="hideMask()">X</span></p>
        		<input 
        			type="text" 
        			placeholder="请在此输入谷歌验证码！" 
        			v-model="MCtexts" 
        			value="MCtexts"
        			@focus="hideTips"
        		/>
        		<div class="btn-form">
        			<button @click="getBandCode">提交</button><button @click="reset">重置</button>
        		</div>
        		<p class="code-tips">{{ codeTips }}</p>
        	</div>
        </div>
        <section>
        	
        	<recharge 
        		@queryGetB="queryGetB" 
        		@queryDownLine = "queryDownLine"
        		v-for = "(listsItem,index) in ShenHeList"
        		:Item = listsItem
        		:key = index
        		/>
        	<!--<recharge/>
        	<recharge/>
        	<recharge/>-->
        	
        </section>
        
    </div>
     
</template>
<script>
	import recharge from './details'
    export default {    
        data() {
            return {
                "pageName": "提币审核",
                ifShowMask:false,
                MCtexts:"",
                codeTips:"",
                whoGetB:"",
                dateArray:[]
            }
        },
        mounted() {
            //请求数据
            this.getDate()
        },
        computed:{
        	ShenHeList:function(){
        		return this.dateArray
        	}
        },
        methods: {
        	getDate(){
        		//this.dateArray = 请求到的数据
        		this.dateArray = [{
        			id:1
        		},
        		{
        			id:2
        		},
        		{
        			id:3
        		}]
        	},       	
           hideMask(){
           	 this.ifShowMask = false;
           	 this.codeTips = ""
           },
           hideTips(){
           	 this.codeTips = ""
           },
           reset(){
           	 this.MCtexts = ""
           },
           queryGetB(q){
           		this.ifShowMask = true;
           		this.whoGetB = q
           },
           queryDownLine(q){
           		this.getDate()
           },
           getBandCode(){
           	  let getBiD = this.whoGetB;
           	  let code = this.MCtexts;
           	  if(!code){
           	  	this.codeTips = "请输入谷歌验证码！"
           	  	return;
           	  }else{
           	  	this.codeTips = ""
           	  }
           	  
           }
        },
        components:{
        	recharge
        }
    }
</script>
<style scoped="scoped">
    @import "../../assets/css/contact.css";
    .tips{
    	position: fixed;
	    z-index: 100;
	    top: 50%;
	    text-align: center;
	    width: 100%;
	    font-size: 18px;
    }
    .mask{
    	position: fixed;
    z-index: 200;
    background-color: rgba(0,0,0,.6);
    width: 100%;
    height: 100%;
    top: 0;
    }
    .mask-code{
    	position: fixed;
    width: 88%;
    height: 173px;
    background-color: white;
    top: 38%;
    left: 50%;
    transform: translateX(-50%);
    }
    
    .Mr-CodeTitle{
  	    padding: 5px 10px;
    background-color: lightgrey;
  }
  .mask input{
  	width: 94%;
    height: 50px;
    margin: 10px;
    text-indent: 10px;
    font-size: 17px;
  }
  .mask span{
  	 float: right;
    display: inline-block;
    width: 39px;
    height: 30px;
    margin-right: -10px;
    text-align: center;
    line-height: 30px;
    margin-top: -5px;
  }
  .btn-form{
  	width: 100%;
  	display: flex;
    justify-content: space-between;
  }
  .btn-form button{
  	width: 40%;
  	margin: 0 10px;
  	height: 35px;
  }
   .code-tips{
   	    text-align: center;
    padding: 10px 0;
    color: red;
   }
</style>
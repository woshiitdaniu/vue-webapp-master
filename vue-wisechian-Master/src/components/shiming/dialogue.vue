<template>
    <div class="dialogue">
        <header id="wx-header">            
            <div class="center">
                <router-link to="/" tag="div" class="iconfont icon-fanhui">          
                </router-link>
                	认证详情            
            </div>
        </header>
        <section class="textBox">
           <div class="warpper">
           		<div class="taptext">
           			<p class="A-title">账&nbsp;&nbsp;号</p>
           			<p class="accounts">416253521@qq.com</p>
           			<p class="tapItem"><span style="flex: 1;">手机号：</span><span style="flex: 1;text-align: right;">13662206636</span></p>
           			<p class="tapItem"><span style="flex: 1;">注册时间：</span><span style="flex: 1;text-align: right;">2018-10-14</span></p>
           		</div>
           		<div class="smImgs">
           			<h4>正面照</h4>
           			<div class="sm-imgs1">
           				<img src="../../assets/images/find-bg.png"/>
           			</div>
           			<h4>反面照</h4>
           			<div class="sm-imgs2">
           				<img src="../../assets/images/find-bg.png"/>
           			</div>
           			<h4>手持照</h4>
           			<div class="sm-imgs3">
           				<img src="../../assets/images/find-bg.png"/>
           			</div>
           		</div>
           		<div class="btn-box">
           			<button class="btns pass" @click="showMask(1)">通过</button>
           			<button class="btns reject" @click="showMask(2)">拒绝</button>
           		</div>
           </div>
        </section>  
        <div class="mask" v-show="ifShowMask">
        	<div class="mask-reject" v-if="showPassOrRejectMask===2">
        		<p class="Mr-title">拒绝理由备注<span @click="hideMask()">X</span></p>
        		<select v-model="defaultRejectReason"  class="reasonSelect">
        			<option :value="reasonList.id" v-for="reasonList in rejectReasonList" :key="reasonList.id">{{ reasonList.value }}</option>      			
        		</select>
        		<div class="btn-form">
        			<button style="width: 100%;" @click="toGetReason">提交</button>
        		</div>
        	</div>
        	
        	<div class="mask-pass" v-else-if="showPassOrRejectMask===1">
        		<p class="Mr-title">通过理由备注<span @click="hideMask()">X</span></p>
        		<input type="text" placeholder="请在此输入通过理由" v-model="Mptexts" value="Mptexts"/>
        		<div class="btn-form">
        			<button>提交</button><button @click="reset()">重置</button>
        		</div>
        	</div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {               
                Mptexts:"",
                ifShowMask:false,
                showPassOrRejectMask:0,
                rejectReasonList:[
                	{
                		id:0,
                		value:"证件号码已认证，请更换"
                	},
                	{
                		id:1,
                		value:"证件照不清晰，请按照规范上传"
                	},
                	{
                		id:2,
                		value:"请先绑定手机号码，否则无法赠送糖果"
                	},
                	{
                		id:3,
                		value:"姓名与证件照不符"
                	},
                	{
                		id:4,
                		value:"证件号码与证件照不符"
                	},
                	{
                		id:5,
                		value:"实名人与证件照不符"
                	}
                ],
                defaultRejectReason:""
            }
        },
        beforeRouteEnter(to, from, next) {
           next(vm => {
                vm.$store.commit("setPageName", "")
            })
        },
     created(){
     	this.defaultRejectReason = this.rejectReasonList[0].id;
     },
        methods: {
           showMask(s){
           	  this.showPassOrRejectMask = s;
           	  this.ifShowMask = true;
           },
           hideMask(){
           	  this.ifShowMask = false;	
           },
           reset(){         	 
           	  this.Mptexts = ""
           },        
           toGetReason(){
           	  let self = this;
           	  let selectedReason = this.rejectReasonList[this.defaultRejectReason].value;
           	  console.log(selectedReason)
           	  setTimeout(function(){
           	  	 self.$router.push("/")
           	  },1000)
           }
        }
    }
</script>
<style scoped="scoped">
	.icon-fanhui{
		width: 43px;
    position: absolute;
    left: 0;
    font-size: 23px;
	}
	#wx-header{
		position: fixed;
		width: 100%;
	}
	.textBox{
		margin-top: 0px;
	}
	.dialogue{
		position: relative;
	}
	section{
		background-color: lightgray;
	}
	.warpper{
		height: 100%;
   	 	padding: 10px 5px;
   	 	padding-bottom: 40px;
	}
	.taptext{
		width: 100%;
	    height: 170px;
	    background-color: white;
	    border-radius: 6px;
	    padding: 0 10px;
	    margin-top: 44px;
	}
	.A-title{
		height: 30px;
    	line-height: 30px;
    	text-align: center;
    	    font-size: 18px;
    	    padding: 10px 0;
    	    
	}
	.accounts{
		font-size: 17px;
		    padding: 17px 0;
    text-align: center;
	}
	.tapItem{
		display: flex;
		padding: 7px 0;
	}
	h4{
		padding: 5px 18px;
		position: relative;
		background-color: white;
    	margin-top: 12px;
	}
	h4:before{
		    content: "";
    position: absolute;
    width: 5px;
    height: 76%;
    background-color: red;
    top: 3px;
    left: 3px;
	}
	.smImgs{
		width: 100%;
		overflow: hidden;
	}
	.sm-imgs1,.sm-imgs2,.sm-imgs3{
		width: 100%;
    	height: 211px;
    	margin-bottom: 10px;
	}
  .smImgs img{
  	    width: 100%;
    height: 100%;
    
  }
  .btn-box{
  	display: flex;
  	height: 36px;
  }
  .btns{
  	flex: 1;
  	height: 100%;
  	font-size: 15px;
  	border: none;
  	border-radius: 4px;
  	color: white;
  	flex: 1;
    box-sizing: border-box;
    margin: 0 5px;
  }
  .pass{
  	background-color: #3DC190;
  }
  .reject{
  	background-color: #FF5353;
  }
  .mask{
  	position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.5);
  }
  .mask-reject,.mask-pass{
  	position: fixed;
    width: 88%;
    height: 150px;
    background-color: white;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
  }
  .Mr-title{
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
  .reasonSelect{
  	width: 93%;
    text-align: center;
    height: 57px;
    margin: 10px 10px;
    border-radius: 6px;
    outline: none;
  }
</style>
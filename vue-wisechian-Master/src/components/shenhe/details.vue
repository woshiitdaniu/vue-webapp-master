<template>
    <div class="recharge"v-show="hideIt">
         <div class="rechargeItem">
         		<div class="headText">
         			 <p class="accounts">416253521@qq.com</p>
         			 <p class="nameAndLeve"><span>姓名&nbsp;&nbsp;<em>嘿嘿</em></span><span>等级&nbsp;&nbsp;<em>嘿嘿</em></span></p>
         		</div>
         		<div class="chargeAddress">
         			 提币地址<p class="detailAddress textsColor">45654646456546465445645646456564</p>
         		</div>
         		<div class="chargeTypeAndNumber">
         			<p>提币类型<span class="chargeType textsColor">可用区域资产</span></p>
         			<p>实际金额<span class="realNumber textsColor">2121212</span></p>
         			<p>提币时间<span class="chargeType textsColor">2018-10-11:1121212</span></p>
         		</div>
         		<div class="btns">
         			<button class="query" @click="queryGetB(Item)">确认提币</button>
         			<button class="queryOfflineTransfer" @click="queryDownLine(Item)">确认线下转账</button>
         		</div>
         </div>
       
    </div>
</template>
<script>
    export default {
    	props:["Item"],
        data() {
            return {
                hideIt:true               
            }
        },
        methods:{
        	queryGetB(q){
				this.$emit("queryGetB",q)
        	},
        	queryDownLine(q){
        		//这里要传个itemID过去
        		this.$emit("queryDownLine",q)
        	}
        }
       
    }
</script>
<style scoped="scoped">
	.rechargeItem{
		margin: 36px 9px;
		margin-bottom: 70px;
	    padding: 10px;
	    border: 1px solid #d3d3d37d;
	    border-radius: 6px;
	    position: relative;
	    box-shadow: 0 5px 19px rgba(0,0,0,.5);
	    background-color: white
	}
	.headText{
		position: absolute;
    top: -28px;
    left: 50%;
    width: 60%;
    transform: translateX;
    transform: translateX(-50%);
    background-color: white;
    text-align: center;
    border-radius: 9px;
        border: 1px solid lightgray;   
	}
	.nameAndLeve{
		display: flex;
	}
	.nameAndLeve span{
		flex: 1;
		color: #868181f7;
	}
	.nameAndLeve span em{
		
		color: black;
	}
	.chargeAddress{
		    padding-top: 10px;
    	padding-bottom: 5px;
    	color: #868181f7;
	
	}
	.chargeTypeAndNumber p{
		color: #868181f7;
	}
	.textsColor{
		color: black;
		display: inline-block;
		padding-left: 15px;
	}
	.accounts{
		font-size: 16px;
	}
	.btns{
		    display: flex;
    padding: 10px 0;
    border-top: 1px solid lightgray;
    margin-top: 10px;
	}
	.btns button{
		flex: 1;
		height: 40px;
		margin: 0 5px;
		box-shadow: 0 6px 12px rgba(0,0,0,.6);
	}
	.btns button:active{
		box-shadow: 0 0 0 rgba(0,0,0,.6);
	}
	.mask{
  	position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.5);
  }
</style>
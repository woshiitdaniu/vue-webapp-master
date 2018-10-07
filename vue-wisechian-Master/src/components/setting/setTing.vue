<template>
  <!--设置 page-->
  <div id="self">	
     		<div class="adminInformation">
     				<div class="avatar">
     						<img src="../../assets/images/find-album-reflash-icon.png"/>
     				</div>
     				<div class="detailInfo">
     						<p class="logn">
     							Admin
     						</p>
     						<p class="adminName">
     							 管理员：别逗
     						</p>
     				</div>
     		</div>
     		<div class="settingItem">
     			<div class="exitOut Item"@click="toExit">
     					<img src="../../assets/images/me_more-setting.png"/>
     					退出
     			</div>
     		</div>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                "pageName": "设置",
      
            }
        },
        mounted() {
           
        },
        methods:{
        	toExit(){
        		 localStorage.removeItem("isLogin");
        		 plus.runtime.quit();    
        	}
        }
     
    }
</script>
<style scoped="scoped">
    @import "../../assets/css/self.css";
    #self{
    	height: 100vh;
    }
    .adminInformation{
    	width: 100%;
    display: flex;
    background-color: white;
    padding: 5px 10px;
    margin: 20px 0;
    }
    .avatar{
    	width: 60px;
    	height: 60px;
    }
    .detailInfo{
    	flex: 1;
    padding-left: 14px;
    }
    .logn{
    	font-size: 15px;
    padding-top: 10px;
    }
    .adminName{
    	color: #928b8b;
    	font-size: 12px;
    }
    .Item{
    	    width: 100%;
    background-color: white;
    font-size: 14px;
    padding: 5px 10px;
    line-height: 28px;
    height: 37px;
    }
    .Item img{
    	height: 100%;
    	vertical-align: middle;
    	margin-right: 10px;
    }
</style>
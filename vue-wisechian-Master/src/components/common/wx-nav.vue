<template>
  <div id="wx-nav">
	<nav>
        <router-link to="/" tag="dl" exact>
            <dt class="iconfont icon-authenticate" >
            </dt>
            <dd>实名认证</dd>
        </router-link>
		<router-link to="/shenhe" tag="dl">
            <dt class="iconfont icon-shenhe" >    
            </dt>
            <dd>提币审核</dd>
       </router-link>	
		<router-link to="/setting" tag="dl">
            <dt class="iconfont icon-shezhi" >
                <!--<i class="new-msg-dot"></i>-->
            </dt>
            <dd>设置</dd>
        </router-link>
    </nav>
  </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        mounted() {
          
        }
    }
</script>
<style scoped="scoped">
	  @import "../../assets/iconfont/iconfont.css";
    @import "../../assets/css/wx-nav.css";
   
</style>
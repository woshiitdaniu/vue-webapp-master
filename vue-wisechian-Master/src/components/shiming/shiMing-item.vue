<template>
    <!--消息列表组件 数据交互频繁-->
    <!--进入 dialogue 页面，携带参数 mid name group_num -->
    <li>
        <!--自定义指令 v-swiper 用于对每个消息进行滑动处理-->
        <router-link :to="{ path: '/shiming/dialogue', query: {}}">
            <div class="shiming-item">
            	<div class="imgs">1</div>
            	<div class="texts">           		
            		<p class="accounts"><span class="Accounts">账号：13662200654</span><span class="times">时间：2018-12-11</span></p>
            		<p class="phoneNumber"><span class="Number">手机号：13662200654</span><span class="getdetail">获取详情</span></p>
            	</div>
            </div>
        </router-link>
       
    </li>
</template>
<script>
    export default {
        props: ["item"],
        data() {
            return {
                
            }
        },
        methods: {
           
        }
    }
</script>
<style type="text/css" scoped="scoped">
	.shiming-item{
		display: flex;
    	padding: 8px 13px;
    	background-color: white;
	}
	p{
		    font-size: 12px;
    		color: gray;
	}
	.imgs{
		flex: 0 0 64px;
	    text-align: center;
	    height: 60px;
	    line-height: 60px;
	    background-color: yellow;
	    margin-right: 10px;
	    border-radius: 50%;
	}
	.texts{
		flex: 1;
	}
	.times{
		float: right;
		display: inline-block;
		width: 96.5px;
	}
	.getdetail{
		float: right;
		color: cornflowerblue;
		display: inline-block;
		width: 96.5px;
		text-align: left;
	}
	.accounts{
		padding: 7px 0;
	}
	li{
    border-bottom: 1px solid lightgray;
	}
	
</style>
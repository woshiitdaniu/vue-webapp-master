<template>
    <!--微信组件-->
  <div id="wechat">
    <ul class="wechat-list">
        <!--props传递消息对象 baseMsgObj -->
        <msg-item v-for="baseMsgObj in $store.state.msgList.baseMsg" :item="baseMsgObj" :key="baseMsgObj.mid"></msg-item>
    </ul>
  </div>
</template>
<script>
    import msgItem from "../shiming/shiMing-item"
    export default {
        components: {
            msgItem
        },
        data() {
            return {
                "pageName": "实名认证",
                SmListArray:[]
            }
        },
        mounted(){
        	this.getDate()
        },
        computed:{
        	showSmList:function(){
        		return this.SmListArray
        	}
        },
        methods:{
        	getDate(){
        		
        	}
        }
    }
</script>
<style>
    @import "../../assets/css/wechat.css";
</style>
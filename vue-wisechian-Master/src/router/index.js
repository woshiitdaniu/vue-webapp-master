import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
    //app整体由店面页和店内页组成 暂时并没有用到嵌套路由
    
    //这里的components中default、subPage分别对应以它们命名的route-view
const routes = [{
        path: '/',
        redirect:'/shiming'
    },
    {
        path: '/shiming',
        name: "实名",
        component: resolve => require(["../components/shiming/ShiMing.vue"], resolve)
    },{
        path: '/shiming/dialogue',
        name: "",
        components: {
            "default": resolve => require(["../components/shiming/ShiMing.vue"], resolve),
            "subPage": resolve => require(["../components/shiming/dialogue.vue"], resolve)
        }
    },
    {
        path: '/shenhe',
        name: "提币审核",
        component: resolve => require(["../components/shenhe/ShenHe.vue"], resolve)
    },
    {
        path: '/setting',
        name: "设置",
        component: resolve => require(["../components/setting/setTing.vue"], resolve)
    }

]



let Routersd = new Router({
    base: "/vue-wechat/",
    routes,   
})
//路由守卫！
//Routersd.beforeEach((to,from,next)=>{
//	let newRoutes = routes.find((val)=>(
//		 val.path = to.name
//	))
//	if(!localStorage.isLogin){
//		Routersd.push("/")
//	}
//	next()
//})
export default Routersd
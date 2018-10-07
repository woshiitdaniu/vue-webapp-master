import Axios from 'axios';
//全局配置请求url
Axios.defaults.baseURL = 'http://baidu.com/';

/*
 * 请求全局配置
 */
//Axios.intercepotors.request.use((config)=>{
//	
//})
//
//
///*
// * 响应全局配置
// */
//Axios.intercepotors.response.use((config)=>{
//	
//})

export default Axios
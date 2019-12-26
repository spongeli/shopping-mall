import axios from 'axios'

export function request(config) {

	// 创建一个实例
	const instance = axios.create({
		baseURL: 'http://123.207.32.32:8000',
		timeout: 5000
	});

	// 前端请求拦截
	instance.interceptors.request.use(config => {
		console.log("拦截请求了呢", config)
		return config
	}, err => {
		console.log(err)
	})

	// 前端响应拦响
	instance.interceptors.response.use(config => {
		console.log("拦截响应",config)
		return config.data
	}, err => {
		console.log(err)
	})
	
	// 发送网络请求 ==> 且返回的是一个Promise
	return instance(config);
}

// 使用
// 1.导入=> .then() 获取数据
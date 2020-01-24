// 拦截器，在发出请求或者获得响应前做一些处理
const axios = require("axios");

export default function() {
  // 请求拦截
  axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = 'Bearer' + token;
    }
    return config;
  })

  // 响应拦截
  axios.interceptors.response.use(null, err => {
    // 未登陆或者令牌过期 则注销登陆并跳转至登陆
    if (err.response.status == 401) {
      vm.$store.dispatch('logout');
      vm.$router.push('/login');
    }
    return Promise.reject(err);
  })
}
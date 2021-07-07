nuxt.config.js
```js
    proxy: {
        // 本地开发环境反向代理配置，解决本地开发与后端联调出现跨域的问题。
        '/galaxy-bd': {
            target: 'http://1011:8080/'
        },
        '/api': { // 请修改你项目中使用代理的后端地址
            target: 'http://10.00:8080/',
            pathRewrite: {
                '^/api': '/'
            }
        },
        '/xxx': { // 请修改你项目中使用代理的后端地址
            target: 'https://test111.com/',
            pathRewrite: {
                '^/xxx': '/'
            }
        }
    },
```

api.js
```
export default request => ({
    // 数据字典查询
    queryDictionary: data => request({ url: '/api/test/queryEnabledPage', method: 'post', data }),
    addProject: data => request({ url: '/api/test/add', method: 'post', data }),
    editProject: data => request({ url: '/api/test/edit', method: 'post', data }),
});

```

plugins/axios/index.js
```js
import Vue from 'vue';
import API from '@/api';

// 是否弹出退出确认框
// let pending = false;
// const showLogout = function (app) {
//     if (!pending) {
//         pending = true;
//         Vue.prototype.$alert('抱歉，您的用户信息过期了，请重新登录。', {
//             confirmButtonText: '确定',
//             callback: (action) => {
//                 pending = false;
//                 app.$arktos.goAuthLogin();
//             }
//         });
//     }
// };

export default function ({ app, $axios, stroe, redirect, error }, inject) {
    inject('api', API($axios));

    // 注册权限指令
    Vue.directive('auth', {
        bind(el, binding, vnode) {
            const auth = vnode.context.$store.state.auth.auth;
            if (binding.value > auth) {
                el.innerHTML = '';
            }
        }
    });
    $axios.defaults.timeout = 15000; // 如果请求话费了超过 `timeout` 的时间，请求将被中断
    $axios.onRequest((config) => {
    // 接口请求前拦截
    // 让每个请求携带 token 请根据实际情况自行修改
        config.headers.Authorization = 'bearer ' + app.$arktos.user.token;
        return config;
    });
    $axios.onResponse((response) => {
    // 接口请求后拦截
    // dataAxios 是 axios 返回数据中的 data
        const dataAxios = response.data;
        // 这个状态码是和后端约定的, 一定要和后端约定好
        const { success, status } = dataAxios;
        // 根据 success 进行判断
        if (typeof success !== 'undefined' || typeof status !== 'undefined') {
            if (success || status === 2000 || status === 200) {
                return dataAxios;
            } else {
                Vue.prototype.$message.error(
                    dataAxios.msg || dataAxios.message || '请求出错，请稍后重试。'
                );
                return dataAxios;
            }
        } else {
            return response;
        }
    });
    $axios.onError((err) => {
        if (err.response && err.response.status) {
            if (err.response.status === 404) {
                console.log('请求404');
            }
            if (err.response.status === 401) {
                //  showLogout(app); //是否开启登录信息过期提示
                console.log('请求401');
            }
            if (err.response.status === 403) {
                error({
                    message: '您没有权限操作资源',
                    statusCode: 403
                });
                console.log('请求403');
            }
        }
    });
}

```

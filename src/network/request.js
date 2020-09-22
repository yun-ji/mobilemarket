import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL:'106.54.54.237:8000',//api/mn',
    timeout:5000
  })

  instance.interceptors.request.use(config =>{
    return config
  },err =>{
    console.log(err);
  })

  instance.interceptors.response.use(res =>{
    return res.data
  },err =>{
    console.log(err);
  })

  return instance(config)
}

/*import { Toast } from "vant";
import Loading from "../store/index";*/

/*// 本接口为测试接口,真实接口请联系coderwhy001
const url = "106.54.54.237:8000/api/mn";*/

/*let config = {
  baseURL: '106.54.54.237:8000/api/mn',
  timeout: 10000
};*/

/*
const _axios = axios.create({
  baseURL: '106.54.54.237:8000/api/mn',
  timeout: 10000
});

// 请求拦截
_axios.interceptors.request.use(
  req => {
    // 当getters里面的isLoading为true再显示请求加载
    /!*if (Loading.getters.isLoading) {
      Toast.loading({
        forbidClick: true,
        message: "加载中..."
      });
    }*!/
    return req;
  },
  err => {
    return Promise.reject(err);
  }
);

// 响应拦截
_axios.interceptors.response.use(
  res => {
    Toast.clear();
    return res.data;
  },
  err => {
    Toast.clear();
    return Promise.reject(err);
  }
);

// 全局注册axios
window.axios = _axios;
*/

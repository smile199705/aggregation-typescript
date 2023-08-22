import {RequestConfig} from "@umijs/max";
import {message} from "antd";

export const request: RequestConfig = {
    timeout: 1000,
    // other axios options you want
    errorConfig: {
        errorHandler(error: any) {
            const { response } = error;
            if (response && response.status === 500) {
                message.error('请求错误：服务器故障，请稍后再试');
            }
        },
        errorThrower() {},
    },
    // 请求拦截
    requestInterceptors: [
        (config: any) => {
            let token = localStorage.getItem('token') || '';
            if (token.startsWith('"')) {
                token = JSON.parse(token);
            }
            if (token) {
                config.headers.Authorization = 'Bearer ' + token;
            }
            return config;
        },
        (error: any) => {
            return error;
        },
    ],
    // 相应拦截
    responseInterceptors: [
        (response: any) => {
            const { data, message } = response;
            if (!data.success) {
                message.error(message);
            }
            return response;
        },
    ],
};

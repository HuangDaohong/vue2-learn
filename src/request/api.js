import request from "./request";
import qs from 'qs';//转下格式，后端要求的

export const getJinpingApi = () => request.get("/products/recommend");

// 发送验证码
export const sendCodeApi = (params) => request.post("sendSMS", qs.stringify(params));
import {Axios} from "./Axios";

const AuthApi = {
    signin:         params => Axios.post(`/auth/login`,params),
    create: params => Axios.post(`/auth/signup`,params),
    verifyToken:    () => Axios.post('/auth/verifyToken'),
    forgetPassword: params => Axios.post(`/auth/forgotPassword`,params),
    verifyPassword: params => Axios.post(`/auth/verifyPassword`,params),
    resetPassword:  params => Axios.post(`/auth/resetPassword`,params),
    sendEmail:  params => Axios.post(`/auth/sendEmail`,params),
    sendEmailVerify:  params => Axios.post(`/auth/sendVerifyEmail`,params),
    verifyEmail:  params => Axios.post(`/auth/verifyEmail`,params),
}

export default AuthApi;
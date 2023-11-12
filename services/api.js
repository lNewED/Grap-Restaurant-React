import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;
const USERNAME = import.meta.env.VITE_BASE_USERNAME;
const PASSWORD = import.meta.env.VITE_BASE_PASSWORD;
import TokenService from "./token.server";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application",
  },
  auth: {
    username: USERNAME,
    password: PASSWORD,
  },
});

//ADD interceptor to request object
instance.interceptors.request.use((config) => {
  const token = TokenService.getLocalAccessToken();
  if (token) {
    config.headers["x-access-token"] = token;
  }
  return config;
},
(error) => {
    return Promise.reject(error);
});

//add interceptor to reponse object
instance.interceptors.response.use(
    (res)=>{
        return res;
},
async (err) => {
    const originalConfig = err.config;
    if (originalConfig.url !== "/api/auth/signin" && err.response) {
        if (err.response.status === 401 && !originalConfig._retry) {
            originalConfig._retry = true;
            try {
                const rs = await instance.post("/api/auth/refreshToken", {
                    refreshToken: TokenService.getLocalRefreshToken(),
                })
                const { accessToken } = rs.data;
                TokenService.setLocalAccessToken(accessToken)
                return instance(originalConfig)
            } catch (_error) {
                return Promise.reject(_error)
            }
        }
    }
    return Promise.reject(err)
}
)
export default instance;


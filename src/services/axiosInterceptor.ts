import axios from 'axios';
import Config from 'react-native-config';

const http = axios.create({
    baseURL: Config.API_URL,
});

// Add a request interceptor
http.interceptors.request.use(
    (config) => {
        // Do something before request is sent
        // console.log(config)
        const accessToken = ''
        if (accessToken) {
            config.headers.Authorization = accessToken;
        }
        return config;
    },
    (error) => {
        // Do something with request error
        console.log(error)
        return Promise.reject(error);
    },
);

// Add a response interceptor
http.interceptors.response.use(
    (response) => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    },
    async (error) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        const originalConfig = error.config;
        if (error.response) {
            if (error.response?.status === 401 && !originalConfig._retry) {
                console.log("refreshing")
                originalConfig._retry = true;
                // try {
                //     const currentRefreshToken = ''
                //     const rs = await http.post('/v1/auth/refresh-token', {
                //         refreshToken: currentRefreshToken,
                //     });
                //     const { accessToken } = rs.data;
                //     if (accessToken) {
                //         const date = new Date();
                //         let accessTokenExpireDate = new Date(date.getTime() + (60 * 1000));
                //         // Cookies.set("accessToken", accessToken, { expires: accessTokenExpireDate })
                //         return http(originalConfig);
                //     }
                // } catch (_error) {
                //     return Promise.reject(_error);
                // }
            }

            if (error.response?.status === 403) {
                // Logout user
                // store.dispatch(logout());
            }
        }
        return Promise.reject(error);
    },
);


export default http;
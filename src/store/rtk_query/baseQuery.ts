// Packages
import http from '@app/services/axiosInterceptor';
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';


export const baseQuery = fetchBaseQuery({
    baseUrl: Config.API_URL,   // Put your base url here
    prepareHeaders: (headers, { getState }) => {
        let token = ''
        // const { token } = (getState() as RootState).reducer;
        if (token) {
            headers.set('Authorization', `bearer ${token}`);
        }
        return headers;
    },
    // timeout: 10000 

});


export const axiosBaseQuery = async ({ url, method, data }: any) => {
    try {
        const result = await http({ url, method, data });
        return { data: result.data };
    } catch (axiosError: any) {
        let err = axiosError;
        return {
            error: { status: err.response?.status, data: err.response?.data },
        };
    }
};


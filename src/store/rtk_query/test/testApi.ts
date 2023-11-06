
import { TagTypes } from '@app/store/root/constants';
import { baseQuery, axiosBaseQuery } from '@app/store/rtk_query/baseQuery';
import { createApi } from '@reduxjs/toolkit/dist/query/react';

export const testApi = createApi({
    reducerPath: 'testApi',
    refetchOnReconnect: true,
    tagTypes: [TagTypes.post],
    baseQuery: axiosBaseQuery,
    endpoints: (builder) => ({
        // query<ResultType, QueryArg>
        getCountries: builder.query({
            query: (url) => ({ url: url }),
            providesTags: () => [TagTypes.post],
            // transformResponse: (rv: any) => rv.data,
            // transformErrorResponse: (rv: any) => rv.data,
        }),
        // We use mutation for POST endpoints
        createPost: builder.mutation({
            query: ({ url, data }) => ({
                method: "POST",
                url: url,
                // We pass static userId to simplify this part
                data: { userId: 1, ...data },
            }),
            invalidatesTags: () => [{ type: TagTypes.post }],
        }),
    }),
}
)

export const { useGetCountriesQuery, useCreatePostMutation } = testApi;
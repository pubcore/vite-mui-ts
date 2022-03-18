import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setAuthentication } from "../store/authentication";

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export const api = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
  }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: ({ username, password }) => {
        return {
          url: "dummy/authentication.json",
          method: "get",
          headers: {
            authorization: `Basic ${window.btoa(`${username}:${password}`)}`,
          },
        };
      },
      async onQueryStarted({ username }, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setAuthentication({ ...data, username }));
        } catch (err) {
          //
        }
      },
    }),
  }),
});

export const { useLoginMutation } = api;

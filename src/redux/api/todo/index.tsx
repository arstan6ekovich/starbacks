import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getProduct: build.query<TODO.GetResponse, TODO.GetRequest>({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: ["todo"],
    }),
    addProduct: build.mutation({
      query: (newData) => ({
        url: "/a77de43fedc2201e94dc1d85d8808f45/todo_star",
        method: "POST",
        body: newData,
      }),
      invalidatesTags: ["todo"],
    }),
    addFileProduct: build.mutation({
      query: (newData) => ({
        url: "/upload/file",
        method: "POST",
        body: newData,
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

export const { useAddProductMutation, useGetProductQuery , useAddFileProductMutation} = api;

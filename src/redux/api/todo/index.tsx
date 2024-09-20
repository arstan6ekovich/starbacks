import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    AddTodo: build.mutation({
      query: (data) => ({
        url: "/",
        mothod: "POST",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

export const { useAddTodoMutation } = api;

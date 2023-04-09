import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3333" }),
  tagTypes: ["Todos"],
  endpoints: (builder) => ({
    getEm: builder.query({
      query: () => "/todos",
      providesTags: ["Todos"],
    }),
    addTodo: builder.mutation({
      query: (todo) => ({
        url: "/todos",
        method: "post",
        body: todo,
      }),
      providesTags: ["Todos"],
    }),
    updateTodo: builder.mutation({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: "patch",
        body: todo,
      }),
      providesTags: ["Todos"],
    }),
    deleteTodo: builder.mutation({
      query: ({ id }) => ({
        url: `/todos/${id}`,
        method: "delete",
        body: id,
      }),
      providesTags: ["Todos"],
    }),
  }),
});

export const {
  useGetEmQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = apiSlice;

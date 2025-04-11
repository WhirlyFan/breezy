import { baseApi } from "@/app/baseApi";
import { Post } from "@/features/posts/postsApi";

export const postsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => ({
        url: "posts",
        method: "GET",
        params: {
          sort: { column: "created_at", ascending: false },
        },
      }),
      providesTags: ["Posts"],
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;

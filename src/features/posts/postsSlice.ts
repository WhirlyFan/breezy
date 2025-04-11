import { baseApi } from "@/app/baseApi";
import { Post } from "@/features/posts/postsApi";

export interface GetPostsQueryParams {
  params?: {
    select?: string;
    sort?:
      | Array<{ column: string; ascending?: boolean }>
      | { column: string; ascending?: boolean }
      | string;
    match?: Record<string, unknown>;
  };
}

export const postsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], GetPostsQueryParams | void>({
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

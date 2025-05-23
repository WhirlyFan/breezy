import { createApi } from "@reduxjs/toolkit/query/react";
import { supabase } from "./api";

interface SortOption {
  column: string;
  ascending?: boolean;
}

interface QueryParams {
  select?: string;
  sort?: SortOption | SortOption[] | string;
  orderBy?: string;
  ascending?: boolean;
  match?: Record<string, unknown>;
}

interface RequestOptions {
  url: string; // table name
  method: "GET" | "POST" | "PATCH" | "DELETE";
  body?: Record<string, unknown>;
  params?: QueryParams;
}

// Custom baseQuery that works with Supabase
const supabaseBaseQuery =
  () =>
  async ({ url, method, body, params }: RequestOptions) => {
    try {
      let result;
      const query = supabase.from(url);

      switch (method) {
        case "GET": {
          let queryBuilder = query.select(params?.select || "*");

          // Enhanced sorting capabilities
          if (params?.sort) {
            // Handle array of sort configurations
            if (Array.isArray(params.sort)) {
              params.sort.forEach((sortOption: SortOption) => {
                const { column, ascending = false } = sortOption;
                if (column) {
                  queryBuilder = queryBuilder.order(column, { ascending });
                }
              });
            }
            // Handle single sort configuration
            else if (typeof params.sort === "object") {
              const { column, ascending = false } = params.sort as SortOption;
              if (column) {
                queryBuilder = queryBuilder.order(column, { ascending });
              }
            }
            // Handle string format for backward compatibility
            else if (typeof params.sort === "string") {
              queryBuilder = queryBuilder.order(params.sort, {
                ascending: false,
              });
            }
          }
          // Backward compatibility with the orderBy parameter
          else if (params?.orderBy) {
            queryBuilder = queryBuilder.order(params.orderBy, {
              ascending: params?.ascending ?? false,
            });
          }
          // Default sort
          else {
            queryBuilder = queryBuilder.order("created_at", {
              ascending: false,
            });
          }

          // Apply filters
          if (params?.match) {
            queryBuilder = queryBuilder.match(params.match);
          }

          result = await queryBuilder;
          break;
        }
        case "POST":
          result = await query.insert(body as Record<string, unknown>);
          break;
        case "PATCH":
          result = await query
            .update(body as Record<string, unknown>)
            .match(params?.match || {});
          break;
        case "DELETE":
          result = await query.delete().match(params?.match || {});
          break;
      }

      if (result.error) {
        return {
          error: { status: result.error.code, data: result.error.message },
        };
      }

      return { data: result.data };
    } catch (error) {
      return {
        error: {
          status: "CUSTOM_ERROR",
          data: error instanceof Error ? error.message : "Unknown error",
        },
      };
    }
  };

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: supabaseBaseQuery(),
  endpoints: () => ({}),
  tagTypes: ["Posts", "Users", "Instruments"],
});

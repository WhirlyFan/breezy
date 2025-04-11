/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from '@reduxjs/toolkit/query/react';
import { breezyApi } from './api';

// Create a custom baseQuery that works with Supabase
const supabaseBaseQuery = () =>
  async ({ url, method, body, params }: {
    url: string;  // table name
    method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
    body?: any;
    params?: any;
  }) => {
    try {
      let result;
      const query = breezyApi.from(url);

      switch (method) {
        case 'GET':
          result = await query.select(params?.select || '*')
            .order(params?.orderBy || 'created_at', { ascending: false })
            .match(params?.match || {});
          break;
        case 'POST':
          result = await query.insert(body);
          break;
        case 'PATCH':
          result = await query.update(body).match(params?.match || {});
          break;
        case 'DELETE':
          result = await query.delete().match(params?.match || {});
          break;
      }

      if (result.error) {
        return { error: { status: result.error.code, data: result.error.message } };
      }

      return { data: result.data };
    } catch (error) {
      return {
        error: {
          status: 'CUSTOM_ERROR',
          data: error instanceof Error ? error.message : 'Unknown error'
        }
      };
    }
  };

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: supabaseBaseQuery(),
  endpoints: () => ({}),
  tagTypes: ['Posts', 'Users', 'Instruments'],
});

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { ApiResponse, ApiResponseWithPagination } from "./types/ApiResponse"
import type { Movie } from "./types/Movie"


// Define a service using a base URL and expected endpoints
export const moviesApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  reducerPath: "moviesApi",

  endpoints: build => ({
    getMovie: build.query<ApiResponse<Movie>, string | undefined>({
      query: (id) => `/movie/${id}`,
    }),
    getPopularMovies: build.query<ApiResponseWithPagination<Movie>, void>({
      query: () => `/movie/popular`,
    }),
  }),
})

export const { useGetPopularMoviesQuery, useGetMovieQuery } = moviesApiSlice

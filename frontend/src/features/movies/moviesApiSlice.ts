import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { ApiResponse, ApiResponseWithPagination } from "./types/ApiResponse"
import type { Genre, Movie } from "./types/Movie"
import { LanguageCode } from "./types/utils.types"

export const IMAGES_URL = 'https://image.tmdb.org/t/p/w500'

export const moviesApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000' }),
  reducerPath: "moviesApi",
  tagTypes: ['Movies'],

  endpoints: build => ({
    getMovie: build.query<ApiResponse<Movie>, string>({
      query: (id) => `/movie/${id}`,
    }),
    getMovieGenres: build.query<ApiResponse<{genres:Genre[]}>, LanguageCode | void>({
      query: (language = 'en') => `/genre/movie/list?language=${language}`,
    }),
    getPopularMovies: build.query<ApiResponseWithPagination<Movie>, void>({
      query: () => `/movie/popular`,
    }),
    searchMovies: build.query<ApiResponseWithPagination<Movie>, string>({
      query: (query) => `/search/movie?query=${encodeURIComponent(query)}`,
    }),
  }),
})

export const { useGetPopularMoviesQuery, useGetMovieQuery, useGetMovieGenresQuery, useSearchMoviesQuery } = moviesApiSlice

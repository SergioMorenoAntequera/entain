
export type ApiResponse<T> = {
  statusCode: number;
  data: T;
}

export type ApiResponseWithPagination<T> = {
  statusCode: number;
  page: number;
  total_pages: number;
  total_results: number;
  data: {
    results: T[];
    total: number;
    skip: number;
    limit: number;
  };
}

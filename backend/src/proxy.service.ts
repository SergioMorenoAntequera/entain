import { Injectable } from '@nestjs/common';
import axios from 'axios';

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmQwNzA5MWZmZGJmYTlkNmU1ZjhjOWM0OGFkOGEyMSIsIm5iZiI6MTc1MTI5OTYzOC45NTgwMDAyLCJzdWIiOiI2ODYyYjYzNjI0Y2FhYjgyYWU3ZjFlNjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.f58nkBWd8mEIQTTDqhmaBpYGJXZitdNf5FmShFNbmCg';

interface ProxyRequest {
  method: string;
  path: string;
  query: Record<string, any>;
  body: Record<string, any>;
}

@Injectable()
export class ProxyService {
  private readonly client = axios.create({
    baseURL: TMDB_BASE_URL,
  });

  async forward(req: ProxyRequest): Promise<any> {
    const { method, path, query, body } = req;

    const response = await this.client.request({
      url: path,
      method: method,
      headers: {
        Authorization: `Bearer ${TMDB_API_KEY}`,
      },
      params: query,
      data: body,
    });

    return {
      statusCode: response.status,
      data: response.data as unknown,
      headers: response.headers,
    };
  }
}

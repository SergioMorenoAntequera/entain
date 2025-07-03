import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosError } from 'axios';

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

interface ProxyRequest {
  method: string;
  path: string;
  query: Record<string, any>;
  body: Record<string, any>;
}

@Injectable()
export class ProxyService {
  private readonly apiKey: string;
  private readonly client = axios.create({ baseURL: TMDB_BASE_URL });

  constructor(private readonly configService: ConfigService) {
    this.apiKey = this.configService.get<string>('TMDB_API_KEY')!;
  }

  async forward(req: ProxyRequest): Promise<any> {
    const { method, path, query, body } = req;

    return this.client
      .request({
        url: path,
        method: method,
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
        },
        params: query,
        data: body,
      })
      .then((response) => ({
        statusCode: response.status,
        data: response.data as unknown,
      }))
      .catch((error: AxiosError) => {
        return {
          statusCode: error?.response?.status,
          data: error?.response?.data,
        };
      });
  }
}

import { Controller, All, Query, Body, Req, HttpCode } from '@nestjs/common';
import { ProxyService } from './proxy.service';

interface RequestLike {
  method: string;
  url: string;
}

@Controller()
export class ProxyController {
  constructor(private readonly proxyService: ProxyService) {}

  @All('*')
  @HttpCode(200)
  handleAll(
    @Req() request: RequestLike,
    @Query() query: Record<string, any>,
    @Body() body: Record<string, any>,
  ) {
    return this.proxyService.forward({
      method: request.method,
      path: request.url,
      query,
      body,
    });
  }
}

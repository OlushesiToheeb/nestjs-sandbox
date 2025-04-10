import { Injectable } from '@nestjs/common';
import { AppConfigService } from './config/app-config.service';

@Injectable()
export class AppService {
  constructor(private readonly appConfig: AppConfigService) {}

  getHello(): string {
    const { port, nodeEnv, isProduction } = this.appConfig.all;
    return `Hello from nestjs-sandbox! Running in ${nodeEnv} mode on port ${port}. Production? ${isProduction}`;
  }
}

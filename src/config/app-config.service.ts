import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export interface AppConfig {
  nodeEnv: string;
  port: number;
  // databaseUrl: string;
  isProduction: boolean;
}

@Injectable()
export class AppConfigService {
  constructor(private readonly configService: ConfigService) {}

  get nodeEnv(): string {
    return this.configService.get<string>('nodeEnv', 'development');
  }

  get port(): number {
    return this.configService.get<number>('port', 3000);
  }

  // get databaseUrl(): string {
  //   return this.configService.get<string>('databaseUrl');
  // }

  get isProduction(): boolean {
    return this.nodeEnv === 'production';
  }

  // Or return a typed config object:
  get all(): AppConfig {
    return {
      nodeEnv: this.nodeEnv,
      port: this.port,
      // databaseUrl: this.databaseUrl,
      isProduction: this.isProduction,
    };
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { AppConfigService } from './config/app-config.service';
import { DatabaseService } from './database/database.interface';
import { DATABASE_SERVICE } from './database/database.module';

@Injectable()
export class AppService {
  constructor(
    @Inject(DATABASE_SERVICE)
    private readonly db: DatabaseService,
    private readonly appConfig: AppConfigService,
  ) {}

  getHello(): string {
    const { port, nodeEnv, isProduction } = this.appConfig.all;
    return `Hello from nestjs-sandbox! Running in ${nodeEnv} mode on port ${port}. Production? ${isProduction}`;
  }

  async getDbConnection(): Promise<string> {
    // run a trivial query to verify the connection
    const now = await this.db.query<{ now: string }>('SELECT NOW()');
    return `DB time is ${now[0].now}`;
  }
}

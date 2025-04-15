import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { Client, QueryResult } from 'pg';
import { DatabaseService } from './database.interface';
import { AppConfigService } from '../config/app-config.service';

@Injectable()
export class PostgresService implements DatabaseService, OnModuleDestroy {
  private readonly client: Client;

  constructor(private readonly config: AppConfigService) {
    this.client = new Client({ connectionString: config.databaseUrl });
  }

  async connect(): Promise<void> {
    await this.client.connect();
  }

  async query<T = any>(sql: string, params: any[] = []): Promise<T[]> {
    const result: QueryResult<any> = await this.client.query(sql, params);
    return result.rows as T[];
  }

  async onModuleDestroy(): Promise<void> {
    await this.client.end();
  }
}

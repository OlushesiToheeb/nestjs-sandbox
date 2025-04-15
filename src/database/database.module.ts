import { Module, Provider } from '@nestjs/common';
import { AppConfigService } from '../config/app-config.service';
import { PostgresService } from './postgres.service';
import { ConfigModule } from '../config/config.module';

export const DATABASE_SERVICE = 'DATABASE_SERVICE';

const databaseProvider: Provider = {
  provide: DATABASE_SERVICE,
  useFactory: async (config: AppConfigService) => {
    const svc = new PostgresService(config);
    await svc.connect();
    return svc;
  },
  inject: [AppConfigService],
};

@Module({
  imports: [ConfigModule],
  providers: [databaseProvider],
  exports: [databaseProvider],
})
export class DatabaseModule {}

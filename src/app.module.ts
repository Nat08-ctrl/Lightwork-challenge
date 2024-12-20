import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { JobModule } from './modules/job/job.module';
import { PropertyModule } from './modules/property/property.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { TenanciesModule } from './modules/tenancy/tenancies.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    DashboardModule,
    JobModule,
    PropertyModule,
    TenanciesModule,
  ],
})
export class AppModule {}
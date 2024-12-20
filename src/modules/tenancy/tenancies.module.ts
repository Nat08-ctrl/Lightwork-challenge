import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Tenancy, TenancySchema } from '../../schemas/tenancies.schema';
import { TenanciesService } from '../../services/tenancies.service';
import { TenanciesController } from '../../controllers/tenancies.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tenancy.name, schema: TenancySchema }]),
  ],
  exports: [MongooseModule, TenanciesService],
  controllers: [TenanciesController],
  providers: [TenanciesService],
})
export class TenanciesModule {}

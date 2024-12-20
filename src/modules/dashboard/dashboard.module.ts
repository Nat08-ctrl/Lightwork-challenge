import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DashboardService } from '@/services/dashboard.service';
import { DashboardController } from '@/controllers/dashboard.controller';
import { Property, PropertySchema } from '@/schemas/property.schema';
import { Job, JobSchema } from '@/schemas/job.schema';
import { User, UserSchema } from '@/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Property.name, schema: PropertySchema },
      { name: Job.name, schema: JobSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}
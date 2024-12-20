import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JobController } from '@/controllers/job.controller';
import { JobService } from '@/services/job.service';
import { Job, JobSchema } from '@/schemas/job.schema';
import { User, UserSchema } from '@/schemas/user.schema';
import { Property, PropertySchema } from '@/schemas/property.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Job.name, schema: JobSchema },
      { name: User.name, schema: UserSchema },
      { name: Property.name, schema: PropertySchema },
    ]),
  ],
  controllers: [JobController],
  providers: [JobService],
})
export class JobModule {}
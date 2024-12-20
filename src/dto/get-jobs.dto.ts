import { IsOptional, IsEnum } from 'class-validator';
import { JobStatus } from '../schemas/job.schema';

export class GetJobsDto {
  @IsOptional()
  @IsEnum(JobStatus)
  status?: JobStatus;
}
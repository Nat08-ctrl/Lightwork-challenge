import { IsNotEmpty, IsString, IsEnum } from 'class-validator';
import { JobStatus } from '../schemas/job.schema';

export class AssignJobDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  propertyId: string;

  @IsNotEmpty()
  @IsString()
  assignedTo: string;

  @IsEnum(JobStatus)
  status: JobStatus = JobStatus.PENDING;
}
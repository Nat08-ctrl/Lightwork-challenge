import { Controller, Post, Body, Get, Query, UseGuards, Req } from '@nestjs/common';
import { Request } from 'express';
import { TenantGuard } from '../guards/tenant.guard';
import { JobService } from '../services/job.service';
import { AssignJobDto } from '../dto/assign-job.dto';
import { GetJobsDto } from '../dto/get-jobs.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Jobs')
@Controller('api/jobs')
@UseGuards(TenantGuard)
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Post('assign')
  @ApiOperation({
    summary: 'Assign Maintenance Job',
    description: 'Assign a maintenance job to a user for a property, ensuring the user and property belong to the tenant.',
  })
  @ApiResponse({ status: 201, description: 'Job assigned successfully.' })
  @ApiResponse({ status: 400, description: 'Invalid request data.' })
  async assignJob(
    @Body() assignJobDto: AssignJobDto,
    @Req() req: Request & { tenantId: string }
  ) {
    return this.jobService.assignJob(assignJobDto, req.tenantId);
  }

  @Get('status')
  @ApiOperation({
    summary: 'Get Maintenance Jobs by Status',
    description: 'Fetch jobs grouped by status for the current tenant, including assigned user details.',
  })
  @ApiResponse({ status: 200, description: 'Jobs retrieved successfully.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async getJobsByStatus(
    @Query() getJobsDto: GetJobsDto,
    @Req() req: Request & { tenantId: string }
  ) {
    return this.jobService.getJobsByStatus(getJobsDto, req.tenantId);
  }
}
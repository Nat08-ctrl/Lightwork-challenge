import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { Request } from 'express';
import { TenantGuard } from '../guards/tenant.guard';
import { DashboardService } from '../services/dashboard.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('dashboard')
@Controller('api/tenants/dashboard')
@UseGuards(TenantGuard)
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get()
  @ApiOperation({
    summary: 'Get the dashboard data for the authenticated tenant',
    description: 'Fetch aggregated data for a tenant, including total properties, active tenancies, maintenance job statuses, and associated users.'
  })
  @ApiResponse({status: 200, description: 'Dashboard data retrived successfully'})
  @ApiResponse({status:403, description: 'Forbidden'})
  async getDashboardData(@Req() req: Request & { tenantId: string }) {
    return this.dashboardService.getTenantDashboard(req.tenantId);
  }
}
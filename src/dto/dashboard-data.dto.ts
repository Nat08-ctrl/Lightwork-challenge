import { ApiProperty } from '@nestjs/swagger';

export class DashboardDataDto {
  @ApiProperty({ example: 5, description: 'Total properties managed by the tenant.' })
  totalProperties: number;

  @ApiProperty({ example: 10, description: 'Total active tenancies for the tenant.' })
  activeTenancies: number;

  @ApiProperty({ example: { active: 5, pending: 2, completed: 3 }, description: 'Breakdown of maintenance jobs by status.' })
  maintenanceJobs: object;

  @ApiProperty({ example: ['Property Manager', 'Maintenance Staff'], description: 'Roles associated with users.' })
  userRoles: string[];
}

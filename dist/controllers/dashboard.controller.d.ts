import { Request } from 'express';
import { DashboardService } from '../services/dashboard.service';
export declare class DashboardController {
    private readonly dashboardService;
    constructor(dashboardService: DashboardService);
    getDashboardData(req: Request & {
        tenantId: string;
    }): Promise<{
        totalProperties: number;
        jobsByStatus: any;
        usersByRole: any;
    }>;
}

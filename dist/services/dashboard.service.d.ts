import { Model } from 'mongoose';
import { Property } from '../schemas/property.schema';
import { Job } from '../schemas/job.schema';
import { User } from '../schemas/user.schema';
export declare class DashboardService {
    private propertyModel;
    private jobModel;
    private userModel;
    constructor(propertyModel: Model<Property>, jobModel: Model<Job>, userModel: Model<User>);
    getTenantDashboard(tenantId: string): Promise<{
        totalProperties: number;
        jobsByStatus: any;
        usersByRole: any;
    }>;
}

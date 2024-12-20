import { Model } from 'mongoose';
import { Job } from '../schemas/job.schema';
import { User } from '../schemas/user.schema';
import { Property } from '../schemas/property.schema';
import { AssignJobDto } from '../dto/assign-job.dto';
import { GetJobsDto } from '../dto/get-jobs.dto';
export declare class JobService {
    private jobModel;
    private userModel;
    private propertyModel;
    constructor(jobModel: Model<Job>, userModel: Model<User>, propertyModel: Model<Property>);
    assignJob(assignJobDto: AssignJobDto, tenantId: string): Promise<import("mongoose").Document<unknown, {}, Job> & Job & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getJobsByStatus(getJobsDto: GetJobsDto, tenantId: string): Promise<any[]>;
}

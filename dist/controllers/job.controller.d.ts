import { Request } from 'express';
import { JobService } from '../services/job.service';
import { AssignJobDto } from '../dto/assign-job.dto';
import { GetJobsDto } from '../dto/get-jobs.dto';
export declare class JobController {
    private readonly jobService;
    constructor(jobService: JobService);
    assignJob(assignJobDto: AssignJobDto, req: Request & {
        tenantId: string;
    }): Promise<import("mongoose").Document<unknown, {}, import("../schemas/job.schema").Job> & import("../schemas/job.schema").Job & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getJobsByStatus(getJobsDto: GetJobsDto, req: Request & {
        tenantId: string;
    }): Promise<any[]>;
}

import { JobStatus } from '../schemas/job.schema';
export declare class AssignJobDto {
    title: string;
    description: string;
    propertyId: string;
    assignedTo: string;
    status: JobStatus;
}

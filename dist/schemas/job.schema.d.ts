import { Document, Schema as MongooseSchema } from 'mongoose';
export declare enum JobStatus {
    ACTIVE = "active",
    PENDING = "pending",
    COMPLETED = "completed"
}
export declare class Job extends Document {
    title: string;
    description: string;
    status: JobStatus;
    propertyId: MongooseSchema.Types.ObjectId;
    assignedTo: MongooseSchema.Types.ObjectId;
    tenantId: MongooseSchema.Types.ObjectId;
}
export declare const JobSchema: MongooseSchema<Job, import("mongoose").Model<Job, any, any, any, Document<unknown, any, Job> & Job & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Job, Document<unknown, {}, import("mongoose").FlatRecord<Job>> & import("mongoose").FlatRecord<Job> & {
    _id: import("mongoose").Types.ObjectId;
}>;

import { Document } from 'mongoose';
export declare class Tenancy extends Document {
    propertyId: string;
    userId: string;
    startDate: Date;
    endDate: Date;
    tenantId: string;
}
export declare const TenancySchema: import("mongoose").Schema<Tenancy, import("mongoose").Model<Tenancy, any, any, any, Document<unknown, any, Tenancy> & Tenancy & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Tenancy, Document<unknown, {}, import("mongoose").FlatRecord<Tenancy>> & import("mongoose").FlatRecord<Tenancy> & {
    _id: import("mongoose").Types.ObjectId;
}>;

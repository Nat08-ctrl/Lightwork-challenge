import { Document, Schema as MongooseSchema } from 'mongoose';
export declare class Property extends Document {
    name: string;
    address: string;
    tenantId: MongooseSchema.Types.ObjectId;
    ownerId: MongooseSchema.Types.ObjectId;
    assignedUsers: MongooseSchema.Types.ObjectId[];
    isActive: boolean;
}
export declare const PropertySchema: MongooseSchema<Property, import("mongoose").Model<Property, any, any, any, Document<unknown, any, Property> & Property & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Property, Document<unknown, {}, import("mongoose").FlatRecord<Property>> & import("mongoose").FlatRecord<Property> & {
    _id: import("mongoose").Types.ObjectId;
}>;

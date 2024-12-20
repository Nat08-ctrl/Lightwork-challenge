import { Document, Schema as MongooseSchema } from 'mongoose';
export declare enum UserRole {
    ADMIN = "admin",
    PROPERTY_MANAGER = "property_manager",
    MAINTENANCE_STAFF = "maintenance_staff",
    TENANT = "tenant"
}
export declare class User extends Document {
    name: string;
    email: string;
    password: string;
    role: UserRole;
    tenantId: MongooseSchema.Types.ObjectId;
    isActive: boolean;
}
export declare const UserSchema: MongooseSchema<User, import("mongoose").Model<User, any, any, any, Document<unknown, any, User> & User & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, Document<unknown, {}, import("mongoose").FlatRecord<User>> & import("mongoose").FlatRecord<User> & {
    _id: import("mongoose").Types.ObjectId;
}>;

import { OnModuleInit } from '@nestjs/common';
import { Model } from 'mongoose';
import { Job } from '../schemas/job.schema';
import { Property } from '../schemas/property.schema';
import { Role } from '../schemas/role.schema';
import { Tenancy } from '../schemas/tenancies.schema';
import { User } from '../schemas/user.schema';
export declare class SeederService implements OnModuleInit {
    private userModel;
    private propertyModel;
    private tenancyModel;
    private jobModel;
    private roleModel;
    constructor(userModel: Model<User>, propertyModel: Model<Property>, tenancyModel: Model<Tenancy>, jobModel: Model<Job>, roleModel: Model<Role>);
    onModuleInit(): Promise<void>;
    seedRoles(): Promise<void>;
    seedUsers(): Promise<void>;
    seedProperties(): Promise<void>;
}

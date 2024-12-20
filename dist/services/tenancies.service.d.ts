import { Tenancy } from '../schemas/tenancies.schema';
import { Model } from 'mongoose';
export declare class TenanciesService {
    private tenancyModel;
    constructor(tenancyModel: Model<Tenancy>);
    countActiveByTenant(tenantId: string): Promise<number>;
    findAll(): string;
    findOne(id: number): string;
    remove(id: number): string;
}

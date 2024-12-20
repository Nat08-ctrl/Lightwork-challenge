import { TenanciesService } from '../services/tenancies.service';
export declare class TenanciesController {
    private readonly tenanciesService;
    constructor(tenanciesService: TenanciesService);
    findAll(): string;
    findOne(id: string): string;
    remove(id: string): string;
}

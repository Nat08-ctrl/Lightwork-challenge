import { Request } from 'express';
import { PropertyService } from '../services/property.service';
import { SearchPropertiesDto } from '../dto/search-properties.dto';
import { CreatePropertyDto } from '../dto/create-property.dto';
export declare class PropertyController {
    private readonly propertyService;
    constructor(propertyService: PropertyService);
    searchProperties(searchDto: SearchPropertiesDto, req: Request & {
        tenantId: string;
    }): Promise<Omit<import("mongoose").Document<unknown, {}, import("../schemas/property.schema").Property> & import("../schemas/property.schema").Property & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    createProperty(createPropertyDto: CreatePropertyDto, req: Request & {
        tenantId: string;
    }): Promise<import("mongoose").Document<unknown, {}, import("../schemas/property.schema").Property> & import("../schemas/property.schema").Property & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}

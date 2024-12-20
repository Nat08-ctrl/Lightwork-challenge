import { Model } from 'mongoose';
import { Property } from '../schemas/property.schema';
import { SearchPropertiesDto } from '../dto/search-properties.dto';
import { CreatePropertyDto } from '../dto/create-property.dto';
export declare class PropertyService {
    private propertyModel;
    constructor(propertyModel: Model<Property>);
    search(searchDto: SearchPropertiesDto, tenantId: string): Promise<Omit<import("mongoose").Document<unknown, {}, Property> & Property & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    create(createPropertyDto: CreatePropertyDto, tenantId: string): Promise<import("mongoose").Document<unknown, {}, Property> & Property & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Property } from '../schemas/property.schema';
import { SearchPropertiesDto } from '../dto/search-properties.dto';
import { CreatePropertyDto } from '../dto/create-property.dto';

@Injectable()
export class PropertyService {
  constructor(
    @InjectModel(Property.name) private propertyModel: Model<Property>,
  ) {}

  async search(searchDto: SearchPropertiesDto, tenantId: string) {
    const query = this.propertyModel.find({ tenantId });

    if (searchDto.searchTerm) {
      query.find({
        $or: [
          { name: { $regex: searchDto.searchTerm, $options: 'i' } },
          { address: { $regex: searchDto.searchTerm, $options: 'i' } }
        ]
      });
    }

    const skip = typeof searchDto.skip === 'number' ? searchDto.skip : 0;
    const limit = typeof searchDto.limit === 'number' ? searchDto.limit : 10;

    return query
      .populate('assignedUsers', 'name email role')
      .skip(skip)
      .limit(limit)
      .sort(searchDto.sort || '-createdAt')
      .exec();
  }

  async create(createPropertyDto: CreatePropertyDto, tenantId: string) {
    const property = new this.propertyModel({
      ...createPropertyDto,
      tenantId, // Automatically assign the tenantId
    });
    return property.save();
  }
}

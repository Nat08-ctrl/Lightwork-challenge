import { Injectable } from '@nestjs/common';
import { Tenancy } from '../schemas/tenancies.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TenanciesService {
  constructor(
    @InjectModel(Tenancy.name) private tenancyModel: Model<Tenancy>,
  ) {}

  async countActiveByTenant(tenantId: string): Promise<number> {
    const now = new Date();
    return this.tenancyModel
      .countDocuments({
        tenantId,
        startDate: { $lte: now },
        endDate: { $gte: now },
      })
      .exec();
  }

  findAll() {
    return `This action returns all tenancies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tenancy`;
  }

  remove(id: number) {
    return `This action removes a #${id} tenancy`;
  }
}
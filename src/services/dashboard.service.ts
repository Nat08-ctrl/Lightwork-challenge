import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Property } from '../schemas/property.schema';
import { Job } from '../schemas/job.schema';
import { User } from '../schemas/user.schema';

@Injectable()
export class DashboardService {
  constructor(
    @InjectModel(Property.name) private propertyModel: Model<Property>,
    @InjectModel(Job.name) private jobModel: Model<Job>,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async getTenantDashboard(tenantId: string) {
    const [properties, jobs, users] = await Promise.all([
      this.propertyModel.countDocuments({ tenantId }),
      this.jobModel.aggregate([
        { $match: { tenantId } },
        {
          $group: {
            _id: '$status',
            count: { $sum: 1 }
          }
        }
      ]),
      this.userModel.aggregate([
        { $match: { tenantId } },
        {
          $group: {
            _id: '$role',
            count: { $sum: 1 }
          }
        }
      ])
    ]);

    return {
      totalProperties: properties,
      jobsByStatus: jobs.reduce((acc, curr) => ({
        ...acc,
        [curr._id]: curr.count
      }), {}),
      usersByRole: users.reduce((acc, curr) => ({
        ...acc,
        [curr._id]: curr.count
      }), {})
    };
  }
}
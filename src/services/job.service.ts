import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Job } from '../schemas/job.schema';
import { User } from '../schemas/user.schema';
import { Property } from '../schemas/property.schema';
import { AssignJobDto } from '../dto/assign-job.dto';
import { GetJobsDto } from '../dto/get-jobs.dto';

@Injectable()
export class JobService {
  constructor(
    @InjectModel(Job.name) private jobModel: Model<Job>,
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Property.name) private propertyModel: Model<Property>,
  ) {}

  async assignJob(assignJobDto: AssignJobDto, tenantId: string) {
    const [user, property] = await Promise.all([
      this.userModel.findOne({
        _id: assignJobDto.assignedTo,
        tenantId
      }),
      this.propertyModel.findOne({
        _id: assignJobDto.propertyId,
        tenantId
      })
    ]);

    if (!user || !property) {
      throw new BadRequestException('Invalid user or property');
    }

    const job = new this.jobModel({
      ...assignJobDto,
      tenantId
    });

    return job.save();
  }

  async getJobsByStatus(getJobsDto: GetJobsDto, tenantId: string) {
    return this.jobModel.aggregate([
      { $match: { tenantId } },
      {
        $group: {
          _id: '$status',
          jobs: {
            $push: {
              _id: '$_id',
              title: '$title',
              description: '$description',
              propertyId: '$propertyId',
              assignedTo: '$assignedTo'
            }
          },
          count: { $sum: 1 }
        }
      },
      {
        $lookup: {
          from: 'users',
          localField: 'jobs.assignedTo',
          foreignField: '_id',
          as: 'assignedUsers'
        }
      }
    ]);
  }
}
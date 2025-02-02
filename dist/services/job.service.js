"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const job_schema_1 = require("../schemas/job.schema");
const user_schema_1 = require("../schemas/user.schema");
const property_schema_1 = require("../schemas/property.schema");
let JobService = class JobService {
    constructor(jobModel, userModel, propertyModel) {
        this.jobModel = jobModel;
        this.userModel = userModel;
        this.propertyModel = propertyModel;
    }
    async assignJob(assignJobDto, tenantId) {
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
            throw new common_1.BadRequestException('Invalid user or property');
        }
        const job = new this.jobModel({
            ...assignJobDto,
            tenantId
        });
        return job.save();
    }
    async getJobsByStatus(getJobsDto, tenantId) {
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
};
exports.JobService = JobService;
exports.JobService = JobService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(job_schema_1.Job.name)),
    __param(1, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __param(2, (0, mongoose_1.InjectModel)(property_schema_1.Property.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], JobService);
//# sourceMappingURL=job.service.js.map
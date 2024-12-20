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
exports.DashboardService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const property_schema_1 = require("../schemas/property.schema");
const job_schema_1 = require("../schemas/job.schema");
const user_schema_1 = require("../schemas/user.schema");
let DashboardService = class DashboardService {
    constructor(propertyModel, jobModel, userModel) {
        this.propertyModel = propertyModel;
        this.jobModel = jobModel;
        this.userModel = userModel;
    }
    async getTenantDashboard(tenantId) {
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
};
exports.DashboardService = DashboardService;
exports.DashboardService = DashboardService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(property_schema_1.Property.name)),
    __param(1, (0, mongoose_1.InjectModel)(job_schema_1.Job.name)),
    __param(2, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], DashboardService);
//# sourceMappingURL=dashboard.service.js.map
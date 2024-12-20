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
exports.JobController = void 0;
const common_1 = require("@nestjs/common");
const tenant_guard_1 = require("../guards/tenant.guard");
const job_service_1 = require("../services/job.service");
const assign_job_dto_1 = require("../dto/assign-job.dto");
const get_jobs_dto_1 = require("../dto/get-jobs.dto");
const swagger_1 = require("@nestjs/swagger");
let JobController = class JobController {
    constructor(jobService) {
        this.jobService = jobService;
    }
    async assignJob(assignJobDto, req) {
        return this.jobService.assignJob(assignJobDto, req.tenantId);
    }
    async getJobsByStatus(getJobsDto, req) {
        return this.jobService.getJobsByStatus(getJobsDto, req.tenantId);
    }
};
exports.JobController = JobController;
__decorate([
    (0, common_1.Post)('assign'),
    (0, swagger_1.ApiOperation)({
        summary: 'Assign Maintenance Job',
        description: 'Assign a maintenance job to a user for a property, ensuring the user and property belong to the tenant.',
    }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Job assigned successfully.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid request data.' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [assign_job_dto_1.AssignJobDto, Object]),
    __metadata("design:returntype", Promise)
], JobController.prototype, "assignJob", null);
__decorate([
    (0, common_1.Get)('status'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get Maintenance Jobs by Status',
        description: 'Fetch jobs grouped by status for the current tenant, including assigned user details.',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Jobs retrieved successfully.' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_jobs_dto_1.GetJobsDto, Object]),
    __metadata("design:returntype", Promise)
], JobController.prototype, "getJobsByStatus", null);
exports.JobController = JobController = __decorate([
    (0, swagger_1.ApiTags)('Jobs'),
    (0, common_1.Controller)('api/jobs'),
    (0, common_1.UseGuards)(tenant_guard_1.TenantGuard),
    __metadata("design:paramtypes", [job_service_1.JobService])
], JobController);
//# sourceMappingURL=job.controller.js.map
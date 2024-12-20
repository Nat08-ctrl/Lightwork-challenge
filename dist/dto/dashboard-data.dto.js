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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardDataDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class DashboardDataDto {
}
exports.DashboardDataDto = DashboardDataDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 5, description: 'Total properties managed by the tenant.' }),
    __metadata("design:type", Number)
], DashboardDataDto.prototype, "totalProperties", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10, description: 'Total active tenancies for the tenant.' }),
    __metadata("design:type", Number)
], DashboardDataDto.prototype, "activeTenancies", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: { active: 5, pending: 2, completed: 3 }, description: 'Breakdown of maintenance jobs by status.' }),
    __metadata("design:type", Object)
], DashboardDataDto.prototype, "maintenanceJobs", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['Property Manager', 'Maintenance Staff'], description: 'Roles associated with users.' }),
    __metadata("design:type", Array)
], DashboardDataDto.prototype, "userRoles", void 0);
//# sourceMappingURL=dashboard-data.dto.js.map
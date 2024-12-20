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
exports.PropertyController = void 0;
const common_1 = require("@nestjs/common");
const tenant_guard_1 = require("../guards/tenant.guard");
const property_service_1 = require("../services/property.service");
const search_properties_dto_1 = require("../dto/search-properties.dto");
const create_property_dto_1 = require("../dto/create-property.dto");
const swagger_1 = require("@nestjs/swagger");
let PropertyController = class PropertyController {
    constructor(propertyService) {
        this.propertyService = propertyService;
    }
    async searchProperties(searchDto, req) {
        return this.propertyService.search(searchDto, req.tenantId);
    }
    async createProperty(createPropertyDto, req) {
        return this.propertyService.create(createPropertyDto, req.tenantId);
    }
};
exports.PropertyController = PropertyController;
__decorate([
    (0, common_1.Get)('search'),
    (0, swagger_1.ApiOperation)({
        summary: 'Search for properties',
        description: "Search for properties by name, address, or assigned users, filtered by current tenant's Scope."
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Search results retrieved successfully.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid query parameters.' }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_properties_dto_1.SearchPropertiesDto, Object]),
    __metadata("design:returntype", Promise)
], PropertyController.prototype, "searchProperties", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_property_dto_1.CreatePropertyDto, Object]),
    __metadata("design:returntype", Promise)
], PropertyController.prototype, "createProperty", null);
exports.PropertyController = PropertyController = __decorate([
    (0, swagger_1.ApiTags)('properties'),
    (0, common_1.Controller)('api/properties'),
    (0, common_1.UseGuards)(tenant_guard_1.TenantGuard),
    __metadata("design:paramtypes", [property_service_1.PropertyService])
], PropertyController);
//# sourceMappingURL=property.controller.js.map
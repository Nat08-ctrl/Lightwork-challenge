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
exports.TenanciesService = void 0;
const common_1 = require("@nestjs/common");
const tenancies_schema_1 = require("../schemas/tenancies.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let TenanciesService = class TenanciesService {
    constructor(tenancyModel) {
        this.tenancyModel = tenancyModel;
    }
    async countActiveByTenant(tenantId) {
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
    findOne(id) {
        return `This action returns a #${id} tenancy`;
    }
    remove(id) {
        return `This action removes a #${id} tenancy`;
    }
};
exports.TenanciesService = TenanciesService;
exports.TenanciesService = TenanciesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(tenancies_schema_1.Tenancy.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TenanciesService);
//# sourceMappingURL=tenancies.service.js.map
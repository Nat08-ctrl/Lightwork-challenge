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
exports.SeederService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const job_schema_1 = require("../schemas/job.schema");
const property_schema_1 = require("../schemas/property.schema");
const role_schema_1 = require("../schemas/role.schema");
const tenancies_schema_1 = require("../schemas/tenancies.schema");
const user_schema_1 = require("../schemas/user.schema");
let SeederService = class SeederService {
    constructor(userModel, propertyModel, tenancyModel, jobModel, roleModel) {
        this.userModel = userModel;
        this.propertyModel = propertyModel;
        this.tenancyModel = tenancyModel;
        this.jobModel = jobModel;
        this.roleModel = roleModel;
    }
    async onModuleInit() {
        console.log('Starting seed...');
        await this.seedRoles();
        await this.seedUsers();
        await this.seedProperties();
        console.log('Seeding complete!');
    }
    async seedRoles() {
        const roles = [
            { name: 'Admin', permissions: ['ALL'] },
            { name: 'PropertyManager', permissions: ['VIEW', 'EDIT_PROPERTIES'] },
            { name: 'Maintenance', permissions: ['VIEW_JOBS', 'UPDATE_JOBS'] },
        ];
        await this.roleModel.insertMany(roles);
        console.log('Roles seeded.');
    }
    async seedUsers() {
        const users = [
            { name: 'Admin User', email: 'admin@example.com', password: 'password', roles: ['Admin'], tenantId: 'tenant1' },
            { name: 'Manager', email: 'manager@example.com', password: 'password', roles: ['PropertyManager'], tenantId: 'tenant1' },
            { name: 'Technician', email: 'tech@example.com', password: 'password', roles: ['Maintenance'], tenantId: 'tenant1' },
        ];
        await this.userModel.insertMany(users);
        console.log('Users seeded.');
    }
    async seedProperties() {
        const properties = [
            { name: 'Villa Sunrise', address: '123 Ocean Drive', ownerId: 'owner1', tenantId: 'tenant1', metadata: {} },
            { name: 'Skyline Apartments', address: '45 City Lane', ownerId: 'owner2', tenantId: 'tenant1', metadata: {} },
        ];
        await this.propertyModel.insertMany(properties);
        console.log('Properties seeded.');
    }
};
exports.SeederService = SeederService;
exports.SeederService = SeederService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __param(1, (0, mongoose_1.InjectModel)(property_schema_1.Property.name)),
    __param(2, (0, mongoose_1.InjectModel)(tenancies_schema_1.Tenancy.name)),
    __param(3, (0, mongoose_1.InjectModel)(job_schema_1.Job.name)),
    __param(4, (0, mongoose_1.InjectModel)(role_schema_1.Role.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], SeederService);
//# sourceMappingURL=seeder.service.js.map
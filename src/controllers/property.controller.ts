import { Body, Controller, Get, Post, Query, UseGuards, Req } from '@nestjs/common';
import { Request } from 'express';
import { TenantGuard } from '../guards/tenant.guard';
import { PropertyService } from '../services/property.service';
import { SearchPropertiesDto } from '../dto/search-properties.dto';
import { CreatePropertyDto } from '../dto/create-property.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('properties')
@Controller('api/properties')
@UseGuards(TenantGuard)
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @Get('search')
  @ApiOperation({
    summary: 'Search for properties',
    description: "Search for properties by name, address, or assigned users, filtered by current tenant's Scope."
  })
  @ApiResponse({ status: 200, description: 'Search results retrieved successfully.' })
  @ApiResponse({ status: 400, description: 'Invalid query parameters.' })
  async searchProperties(
    @Query() searchDto: SearchPropertiesDto,
    @Req() req: Request & { tenantId: string }
  ) {
    return this.propertyService.search(searchDto, req.tenantId);
  }

  @Post()
  async createProperty(
    @Body() createPropertyDto: CreatePropertyDto,
    @Req() req: Request & { tenantId: string }
  ) {
    return this.propertyService.create(createPropertyDto, req.tenantId);
  }
}

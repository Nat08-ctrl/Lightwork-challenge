import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TenanciesService } from '../services/tenancies.service';


@Controller('api/tenancies')
export class TenanciesController {
  constructor(private readonly tenanciesService: TenanciesService) {}

 
  @Get()
  findAll() {
    return this.tenanciesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tenanciesService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tenanciesService.remove(+id);
  }
}

import { Catalogue } from '@fem/api-interfaces';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CataloguesService } from './catalogues.service';

@Controller('catalogues')
export class CataloguesController {
  constructor(private readonly CataloguesService: CataloguesService) {}

  @Post()
  create(@Body() Catalogue: Catalogue) {
    return this.CataloguesService.create(Catalogue);
  }

  @Get()
  findAll() {
    return this.CataloguesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.CataloguesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() Catalogue: Catalogue) {
    return this.CataloguesService.update(id, Catalogue);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.CataloguesService.remove(id);
  }
}

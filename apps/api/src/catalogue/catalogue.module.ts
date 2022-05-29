import { Module } from '@nestjs/common';
import { CataloguesService } from './catalogues.service';
import { CataloguesController } from './catalogue.controller';

@Module({
  controllers: [CataloguesController],
  providers: [CataloguesService]
})
export class CataloguesModule {}

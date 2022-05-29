import { Module } from '@nestjs/common';
import { CataloguesModule } from '../catalogue/catalogue.module';
import { WidgetsModule } from '../widgets/widgets.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [WidgetsModule, CataloguesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonsModule } from './persons/persons.module';
import { LocalitiesModule } from './localities/localities.module';

@Module({
  imports: [PersonsModule, LocalitiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

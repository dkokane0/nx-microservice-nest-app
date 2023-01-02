import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from '@nx-microservice-nest-app/employeeData';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
  imports: [EmployeeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

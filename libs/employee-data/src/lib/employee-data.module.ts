// import { Module } from '@nestjs/common';

// @Module({
//   controllers: [],
//   providers: [],
//   exports: [],
// })
// export class EmployeeDataModule {}


import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Welcome to product! from employee-data.module' };
  }
}

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getRoot() {
    return { message: 'Hello World from nestjs-sandbox!' };
  }

  @Get('hello')
  getHello(): { message: string } {
    console.log('getHello invoked, returning:', this.appService.getHello());
    return { message: this.appService.getHello() };
  }

  @Get('db-time')
  async getDbTime() {
    const msg = await this.appService.getDbConnection();
    return { message: msg };
  }
}

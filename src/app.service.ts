import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'ASD Management - Deploy NestJS works successfully!';
  }
}

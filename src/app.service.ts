import { Injectable } from '@nestjs/common';
import { GoogleApiAdapter } from './infra/document/google.api-document';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }
}

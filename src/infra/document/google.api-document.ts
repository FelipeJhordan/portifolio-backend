import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { google } from 'googleapis';

@Injectable()
export class GoogleApiAdapter {
  constructor(private readonly configService: ConfigService) {
    this.KEY = this.configService.get<string>('API_KEY');
  }
  readonly SCOPES: ['https://www.googleapis.com/auth/documents.readonly'];
  readonly KEY: string;
  readonly logger: Logger;

  async test() {
    const doc = google.docs({ version: 'v1', auth: this.KEY });
    await doc.documents.create({ requestBody: { title: 'tEXT' } });
  }
}

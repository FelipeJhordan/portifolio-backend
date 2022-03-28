import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { google } from 'googleapis';
import MessageRequestDto from 'src/presentation/dto/messageRequest.dto';
import { formatDate } from 'src/util/date.util';

@Injectable()
export class GoogleApiAdapter {
  constructor(private readonly configService: ConfigService) {
    this.EMAIL_GOOGLE = this.configService.get<string>('EMAIL_GOOGLE');
    this.KEY_GOOGLE = this.configService
      .get<string>('KEY_GOOGLE')
      .replace(/\\n/gm, '\n');
  }
  private readonly EMAIL_GOOGLE: string;
  private readonly KEY_GOOGLE: string;
  readonly logger: Logger;

  async updateSheet({ email, mensagem, name, date }: MessageRequestDto) {
    const sheets = google.sheets({
      version: 'v4',
      auth: await this.authorize(),
    });

    await sheets.spreadsheets.values.append({
      spreadsheetId: this.configService.get<string>('DOCUMENT_ID'),
      requestBody: {
        values: [[email, name, mensagem, formatDate(date)]],
      },
      range: 'Sheet!A3:C3',
      valueInputOption: 'RAW',
    });
  }

  private async authorize() {
    const oauth2Client = new google.auth.JWT(
      this.EMAIL_GOOGLE,
      null,
      this.KEY_GOOGLE,
      ['https://www.googleapis.com/auth/spreadsheets'],
    );
    await oauth2Client.authorize();

    return oauth2Client;
  }
}

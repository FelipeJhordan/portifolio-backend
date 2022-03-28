import { Injectable } from '@nestjs/common';
import { GoogleApiAdapter } from 'src/infra/document/google.api-document';
import MessageRequestDto from 'src/presentation/dto/messageRequest.dto';

@Injectable()
export class MessageService {
  constructor(private googleAdapter: GoogleApiAdapter) {}
  async addMessage(messageRequestDto: MessageRequestDto): Promise<void> {
    await this.googleAdapter.updateSheet(messageRequestDto);
  }
}

import { Module } from '@nestjs/common';
import { GoogleApiAdapter } from 'src/infra/document/google.api-document';
import { MessageController } from '../../presentation/controllers/message.controller';
import { MessageService } from '../service/message.service';
@Module({
  imports: [],
  controllers: [MessageController],
  providers: [GoogleApiAdapter, MessageService],
})
export class MessageModule {}

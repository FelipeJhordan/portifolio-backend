import { Module } from '@nestjs/common';
import { GoogleApiAdapter } from 'src/infra/document/google.api-document';
import { MessageController } from '../../presentation/controllers/message.controller';
@Module({
  imports: [],
  controllers: [MessageController],
  providers: [GoogleApiAdapter],
})
export class MessageModule {}

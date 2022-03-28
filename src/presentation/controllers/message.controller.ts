import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { MessageService } from 'src/application/service/message.service';
import MessageRequestDto from '../dto/messageRequest.dto';

@Controller('/message')
export class MessageController {
  constructor(private messageService: MessageService) {}
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async addMessage(
    @Body() messageRequestDto: MessageRequestDto,
  ): Promise<void> {
    this.messageService.addMessage(messageRequestDto);
  }
}

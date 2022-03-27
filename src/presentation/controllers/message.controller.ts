import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { MessageService } from 'src/application/service/message.service';

@Controller('/message')
export class MessageController {
  constructor(private messageService: MessageService) {}
  @Get()
  @HttpCode(HttpStatus.CREATED)
  async addMessage(): Promise<void> {
    this.messageService.addMessage();
  }
}

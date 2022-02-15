import { Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

@Controller()
export class MessageController {

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async addMessage(): Promise<void> {
      
  }
}
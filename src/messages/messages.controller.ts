import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  getMessages() {
    return 'Hello from messages controller';
  }

  @Post()
  createMessage() {
    return 'Message created';
  }

  @Get(':id')
  getMessage() {
    return 'Message with ID';
  }
}

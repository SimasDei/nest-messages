import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  getMessages() {
    return 'Hello from messages controller';
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return `Message ${body.content} created`;
  }

  @Get(':id')
  getMessage(@Param('id') id: string) {
    return `Message ${id}`;
  }
}

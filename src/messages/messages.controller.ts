import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {

    private _messagesService: MessagesService;

    constructor() {
        this._messagesService = new MessagesService();
    }

    @Get()
    listMessages() {
        return this._messagesService.findAll();
    }

    @Post() 
    createMessage(@Body() body: CreateMessageDto) {
        return this._messagesService.create(body.content);
    }

    @Get(':id')
    getMessage(@Param('id') id: string) {
        return this._messagesService.findOne(id);                             
    }

}

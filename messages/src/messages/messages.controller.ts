/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    messagesService: MessagesService;

    constructor(){
        this.messagesService = new MessagesService();
    }
    @Get()
    listMessages(){
        return this.messagesService.findAll();
    }

    @Post()
    createMessages(@Body() body:CreateMessageDto){
        console.log(body);
        return this.messagesService.create(body.content);
    }

    @Get('/:id')
    getMessages(@Param('id') id:string ){
        console.log(id);
        return this.messagesService.findOne(id);
    }
}

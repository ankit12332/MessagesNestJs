/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
    messagesRepo: MessagesRepository;

    constructor(){
        //Services is creating its own dependencies
        this.messagesRepo = new MessagesRepository();
    }

    findOne(id: string){
        return this.messagesRepo.findOne(id);
    }

    findAll(){
        return this.messagesRepo.findAll();
        
    }

    create(content: string){
        return this.messagesRepo.create(content);
    }
}

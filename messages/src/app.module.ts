import { MessagesModule } from './messages/messages.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MessagesModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

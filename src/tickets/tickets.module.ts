import { Module } from '@nestjs/common';
import { TicketsResolver } from './tickets.resolver';
import { TicketsService } from './tickets.service';

@Module({
  imports: [],
  providers: [TicketsService, TicketsResolver],
})
export class TicketsModule {}

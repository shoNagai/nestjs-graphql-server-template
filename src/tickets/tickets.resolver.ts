import { ParseUUIDPipe } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateTicketInput } from './dto/create-ticket.dto';
import { Ticket } from './models/ticket.model';
import { TicketsService } from './tickets.service';

@Resolver(() => Ticket)
export class TicketsResolver {
  constructor(private readonly ticketsService: TicketsService) {}

  @Query(() => [Ticket])
  async tickets() {
    return this.ticketsService.findAll();
  }

  @Query(() => Ticket)
  async ticket(
    @Args('id', ParseUUIDPipe)
    id: string,
  ): Promise<Ticket> {
    return this.ticketsService.findOneById(id);
  }

  @Mutation(() => Ticket)
  async createTicket(
    @Args('createTicketInput') args: CreateTicketInput,
  ): Promise<Ticket> {
    const createdCat = await this.ticketsService.create(args);
    return createdCat;
  }
}

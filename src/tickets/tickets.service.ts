import { Injectable } from '@nestjs/common';
import { CreateTicketInput } from './dto/create-ticket.dto';
import { Ticket } from './models/ticket.model';

const dummy = {
  title: 'バグ',
  priorityId: 'aa',
  description: 'aa',
  isDeleted: false,
  reportedAt: 1,
  createdAt: 1,
  updatedAt: 1,
};

@Injectable()
export class TicketsService {
  private readonly tickets: Array<Ticket & { ownerId?: string }> = [
    {
      id: '1',
      ...dummy,
    },
  ];

  create(ticket: CreateTicketInput): Ticket {
    const id = String(this.tickets.length + 1);
    this.tickets.push({ id, ...ticket, ...dummy });
    return this.tickets.pop();
  }

  findAll(): Ticket[] {
    return this.tickets;
  }

  findOneById(id: string): Ticket {
    return this.tickets.find((t) => t.id === id);
  }
}

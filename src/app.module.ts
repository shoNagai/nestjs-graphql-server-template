import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { TicketsResolver } from './tickets/tickets.resolver';
import { TicketsService } from './tickets/tickets.service';

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      debug: false,
      playground: true,
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
    }),
  ],
  providers: [TicketsResolver, TicketsService],
})
export class AppModule {}

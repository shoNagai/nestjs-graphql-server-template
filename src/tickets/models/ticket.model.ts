import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({})
export class Ticket {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  priorityId: string;

  @Field()
  isDeleted: boolean;

  @Field()
  reportedAt: number;

  @Field()
  createdAt: number;

  @Field()
  updatedAt: number;
}

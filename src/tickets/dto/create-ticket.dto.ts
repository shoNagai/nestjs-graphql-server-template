import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';

@InputType()
export class CreateTicketInput {
  @Field()
  @MaxLength(30)
  title: string;

  @Field()
  @IsOptional()
  @Length(30, 255)
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

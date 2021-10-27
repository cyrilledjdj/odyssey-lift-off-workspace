import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Module } from './models/module.model';

@Resolver((of) => Module)
export class ModuleResolver {
  @ResolveField()
  async durationInSeconds(@Parent() { length }) {
    return length;
  }
}

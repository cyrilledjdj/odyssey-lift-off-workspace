import { ApolloDriverConfig } from '@nestjs/apollo';
import { Injectable } from '@nestjs/common';
import { GqlOptionsFactory } from '@nestjs/graphql';
import { join } from 'path';
import { environment } from '../environments/environment';

@Injectable()
export class GqlConfigService implements GqlOptionsFactory {
  createGqlOptions(): ApolloDriverConfig {
    return {
      path: '/api',
      autoSchemaFile: join(process.cwd(), 'schema.gql'),
      sortSchema: true,
      debug: !environment.production,
      playground: !environment.production,
      dataSources: () => ({}),
    };
  }
}

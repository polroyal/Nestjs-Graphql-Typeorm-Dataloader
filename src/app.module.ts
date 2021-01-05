import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import RepoModule from './repo.module';
import { GraphQLModule } from '@nestjs/graphql';
import AuthorResolver from './resolvers/author.resolver';

const GraphQLImports = [
  AuthorResolver,
];

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    RepoModule, 
    ...GraphQLImports,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

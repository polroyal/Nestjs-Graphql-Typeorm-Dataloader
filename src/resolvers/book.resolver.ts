import { Args, Mutation, Parent, Query, ResolveProperty, Resolver } from '@nestjs/graphql';
import Author from 'src/db/models/author.entity';
import BookGenreResolver from './book-genre.resolver';

@ResolveProperty()
public async author(@Parent() parent): Promise<Author> {
    return this.repoService.authorRepo.findOne(parent.authorId);
}

export default BookGenreResolver;

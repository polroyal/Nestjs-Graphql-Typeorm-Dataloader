import { Args, Mutation, Parent, Query, ResolveProperty, Resolver } from '@nestjs/graphql';
import Author from 'src/db/models/author.entity';
import Book from 'src/db/models/book.entity';
import RepoService from 'src/repo.service';
import BookGenreResolver from './book-genre.resolver';
import BookInput from './input/book.input';


@Resolver()
class BookResolver {
    constructor(private readonly repoService: RepoService) {}

    @Query(() => [Book])
    public async books(): Promise<Book[]> {
        return this.repoService.bookRepo.find();
    }
    @Query(() => Book, {nullable: true})
    public async book(@Args('id') id: number): Promise<Book> {
        return this.repoService.bookRepo.findOne(id);
    }

    @Mutation(() => Book)
    public async createBook(@Args('data') input: BookInput):
        Promise<Book> {
            const book = this.repoService.boo
        }
}




@ResolveProperty()
public async author(@Parent() parent): Promise<Author> {
    return this.repoService.authorRepo.findOne(parent.authorId);
}

export default BookResolver;

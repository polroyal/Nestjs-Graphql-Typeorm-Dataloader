import { Query, Args, Mutation, Parent, ResolverProperty, Resolver } from '@nestjs/common';
import BookGenre from 'src/db/models/book-genre.entity';
import RepoService from 'src/repo.service';
import Author from '../db/models/author.entity';
import Book from '../db/models/book.entity';
import BookInput from './input/book.input';
import Genre from '../db/models/genre.entity';
import GenreInput from './input/genre.input';
import BookGenreInput from './input/book-genre.input';
import { Arg } from 'type-graphql';


@Resolver()
class BookGenreResolver {

    constructor(private readonly repoService: RepoService) {}

    @Mutation(() => BookGenre)
    public async createBookGenre(@Args('data') input: BookGenreInput): Promise<BookGenre> {
        const bookGenre = new BookGenre();
        const {bookId, genreId} = input;
        bookGenre.bookId = bookId;
        bookGenre.genreId = genreId;

        return this.repoService.bookGenreRepo.save(bookGenre);
    }

    @Query(() => [BookGenre])
    public async bookGenres(): Promise<BookGenre[]> {
        return this.repoService.bookGenreRepo.find();
    }

    @Query(() => BookGenre)
    public async bookGenre(@Arg('id') id: number): Promise<BookGenre> {
        return this.repoService.bookGenreRepo.findOne(id);
    }
}

export default BookGenreResolver;

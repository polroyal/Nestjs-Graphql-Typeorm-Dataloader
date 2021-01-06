import { Args, Mutation, Parent, Query, ResolveProperty, Resolver } from '@nestjs/graphql';
import Book from 'src/db/models/book.entity';
import Genre from 'src/db/models/genre.entity';
import RepoService from 'src/repo.service';
import GenreInput from './input/genre.input';


@Resolver(Genre) 
class GenreResolver {

    constructor(private readonly repoService: RepoService) {}

    @Query(() => [Genre])
    public async genres(): Promise<Genre[]> {
        return this.repoService.genreRepo.find();
    }
    @Query(() => Genre, { nullable: true })
    public async genre(@Args('id') id: number): Promise<Genre> {
        return this.repoService.genreRepo.findOne(id);
    }

    @Mutation(() => Genre)
    public async createGenre(@Args('data') input: GenreInput): Promise<Genre> {
        const genre = new Genre();
        genre.name = input.name;
        return this.repoService.genreRepo.save(genre);
    }

    @ResolveProperty()
    public async book(@Parent() parent): Promise<Book[]> {
        const bookGenres = await this.repoService.bookGenreRepo.find({ where: 
        { genreId: parent.id}, relations: ['Book']});

        const books: Book[] = [];
        bookGenres.forEach(async bookGenre => books.push(bookGenre.book));
        return books;
    }
}

export default GenreResolver;
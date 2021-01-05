// import { BaseEntity, Entity } from 'typeorm';

import { Field, ObjectType } from 'type-graphql';
import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany, PrimaryGeneratedColumn,
} from 'typeorm';

import BookGenre from './book-genre.entity';

@ObjectType()
@Entity({ name: 'genres' })
export default class Genre {

    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'genre_name'})
    name: string;

    @CreateDateColumn({ name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at'})
    updatedAt: Date;

    // Associations

    @OneToMany(() => BookGenre, bookGenre => bookGenre.book)
    bookConnection: Promise<BookGenre[]>;
}


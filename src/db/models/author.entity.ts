// import { from } from "rxjs";
import { Field, ObjectType } from 'type-graphql';
import { BaseEntity } from 'typeorm';
class Auther extends BaseEntity 

    import {
        Column,
        CreateDateColumn,
        Entity,
        OneToMany,
        PrimaryGeneratedColumn,
        UpdateDateColumn,
    } from 'typeorm';

    import Book from './book.entity';

    @ObjectType()
    @Entity({ name: 'authors' }) 
    export default class Author {

        @Field()
        @PrimaryGeneratedColumn()
        id: number;

        @Column()
        name: string;

        @CreateDateColumn({ name: 'created_at'})
        createdAt: Date;

        @UpdateDateColumn({ name: 'updated_at'})
        updatedAt: Date; 

        // Associations 
        @OneToMany(() => Book, book => book.authorConnection)
        bookConnection: Promise<Book[]>;

    }



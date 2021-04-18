import BookEntity from '../db/entity/book.entity';
import CreateBookDto from './dto/create-book.dto';
import UserEntity from '../db/entity/user.entity';
import { createQueryBuilder, getConnection } from 'typeorm';
import GenreEntity from '../db/entity/genre.entity';

export class BooksService {

  async insert(bookDetails: CreateBookDto): Promise<BookEntity> {
    const { name , userID , genreIDs } = bookDetails;
    const book = new BookEntity();
    book.name = name;
    book.user = await UserEntity.findOne(userID) ;
    book.genres=[];
    for ( let i = 0; i < genreIDs.length ; i++)
    {
      const genre = await GenreEntity.findOne(genreIDs[i]);
      book.genres.push(genre);
    }
    await book.save();
    return book;
  }

  async getAllBooks(): Promise<BookEntity[] > {
    // const user: UserEntity = await UserEntity.findOne({where: {id: 2}, relations: ['books']});
    return BookEntity.find();
  }

  async updateBook(bookID: number, bookDetails: CreateBookDto): Promise<BookEntity> {

    const new_user = await UserEntity.findOne(bookDetails.userID)

    await getConnection()
                .createQueryBuilder()
                .update(BookEntity)
                .set({ name:bookDetails.name, user: new_user})
                .where("id = :id", { id: bookID })
                .execute();
    return BookEntity.findOne(bookID);
  }

  async deleteBook(bookID: number) {
    await BookEntity.delete(bookID);
  }
}
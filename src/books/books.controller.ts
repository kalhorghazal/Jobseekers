import { Body, Controller, Get, Post, Header, Put, Delete, Query, Param, ParseIntPipe} from '@nestjs/common';
import { ApiResponse, ApiQuery } from '@nestjs/swagger';
import { BooksService } from './books.service';
import CreateBookDto from './dto/create-book.dto';

@Controller('books')
export class BooksController {
    constructor(private readonly bookServices: BooksService) {}

    @Post('add')
    @ApiResponse({status: 200, description: 'create book'})
    @Header('Content-Type', 'application/json')
    postBook( @Body() book: CreateBookDto) {
        return this.bookServices.insert(book);
    }

    @Get()
    @ApiResponse({status: 200})
    getAll() {
      return this.bookServices.getAllBooks();
    }

    @Put()
    @ApiResponse({status: 200, description: 'create book'})
    @Header('Content-Type', 'application/json')
    putBook(@Query('bookID', ParseIntPipe) bookID: number, @Body() book: CreateBookDto) {
        return this.bookServices.updateBook(bookID, book);
    }


    @Delete()
    @ApiResponse({ status: 200})
    @ApiQuery({
      name: 'bookID',
      required: true,
      type: String
    })
    deleteBook( @Query('bookID', ParseIntPipe) bookID: number ) {
      return this.bookServices.deleteBook(bookID);
    }
}
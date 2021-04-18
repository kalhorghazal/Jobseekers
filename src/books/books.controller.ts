import { Body, Controller, Get, Post, Header} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
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
}

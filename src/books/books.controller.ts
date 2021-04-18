import { Body, Controller, Get, Post, Header, Put, Delete, Query, Param, ParseIntPipe, UseGuards} from '@nestjs/common';
import { ApiResponse, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { BooksService } from './books.service';
import CreateBookDto from './dto/create-book.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('books')
export class BooksController {
    constructor(private readonly bookServices: BooksService) {}

    @Post('add')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @ApiResponse({status: 200, description: 'create book'})
    @Header('Content-Type', 'application/json')
    postBook( @Body() book: CreateBookDto) {
        return this.bookServices.insert(book);
    }

    @Get()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @ApiResponse({status: 200})
    getAll() {
      return this.bookServices.getAllBooks();
    }

    @Put()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @ApiResponse({status: 200, description: 'create book'})
    @Header('Content-Type', 'application/json')
    putBook(@Query('bookID', ParseIntPipe) bookID: number, @Body() book: CreateBookDto) {
        return this.bookServices.updateBook(bookID, book);
    }


    @Delete()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
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

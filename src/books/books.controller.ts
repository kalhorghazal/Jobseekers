 
import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { ApiBody, ApiQuery, ApiResponse } from '@nestjs/swagger/dist';
import BookEntity from 'src/db/entity/book.entity';
import CreateBookDto from './dto/create-book.dto';
import { BooksService } from './books.service';

@Controller('book')
export default class BooksController {
    constructor(private readonly bookService: BooksService) { }

    @ApiResponse({
        status: 201,
        description: 'returns the created book with its genres'
    })
    @Post('post')
    postGenre(@Body() book: CreateBookDto) {
        return this.bookService.insert(book);
    }

    @ApiResponse({
        status: 200,
        description: 'returns all the books'
    })
    @Get()
    getAll() {
        return this.bookService.getAllBooks();
    }
}
import { Body, Controller, Get, Header, ParseIntPipe, Post, Put, Query} from '@nestjs/common';
import { GenreService } from './genre.service';
import {ApiResponse, ApiBearerAuth, ApiQuery} from '@nestjs/swagger';
import CreateGenreDto from './dto/create-genre.dto';

@Controller('genre')
export class GenreController {
  constructor(private readonly genreServices: GenreService) {}

  @Post('add')
  @ApiResponse({status: 200, description: 'create genre'})
  @Header('Content-Type', 'application/json')
  postGenre( @Body() genre: CreateGenreDto) {
    return this.genreServices.insert(genre);
  }

  @Get()
  @ApiResponse({ status: 200})
  getAll() {
    return this.genreServices.getAllGenre();
  }
}
import { Body, Controller, Get, Header, ParseIntPipe, Post, Put, Query, UseGuards} from '@nestjs/common';
import { GenreService } from './genre.service';
import {ApiResponse, ApiBearerAuth, ApiQuery} from '@nestjs/swagger';
import CreateGenreDto from './dto/create-genre.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('genre')
export class GenreController {
  constructor(private readonly genreServices: GenreService) {}

  @Post('add')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiResponse({status: 200, description: 'create genre'})
  @Header('Content-Type', 'application/json')
  postGenre( @Body() genre: CreateGenreDto) {
    return this.genreServices.insert(genre);
  }

  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 200})
  getAll() {
    return this.genreServices.getAllGenre();
  }
}
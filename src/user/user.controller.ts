import { Body, Controller, Get, Header, ParseIntPipe, Post, Put, Query} from '@nestjs/common';
import { UserService } from './user.service';
import {ApiResponse, ApiBearerAuth, ApiQuery} from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly usersServices: UserService) {}

//'postUser()' will handle the creating of new User
  @Post('add')
  @ApiResponse({status: 200, description: 'Create user'})
  @Header('Content-Type', 'application/json')
  postUser( @Body() user: CreateUserDto) {
    return this.usersServices.insert(user);
  }
// 'getAll()' returns the list of all the existing users in the database

  @Get()
  @ApiResponse({ status: 200})
  getAll() {
    return this.usersServices.getAllUsers();
  }

//'getBooks()' return all the books which are associated with the user 
// provided through 'userID' by the request  
  @Get('books')
  @ApiResponse({ status: 200})
  @ApiQuery({
    name: 'userID',
    required: true,
    type: String
  })
  getBooks( @Query('userID', ParseIntPipe) userID: number ) {
    return this.usersServices.getBooksOfUser(userID);
  }
}
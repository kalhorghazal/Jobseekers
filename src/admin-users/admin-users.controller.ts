import { Body, Controller, Get, Header, ParseIntPipe, Post, Put, Query, UseGuards} from '@nestjs/common';
import {ApiResponse, ApiBearerAuth, ApiQuery} from '@nestjs/swagger';

import { AdminUsersService } from './admin-users.service';
import { CreateAdminDto } from './dto/create_admin.dto'
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('admin-users')
export class AdminUsersController {
    constructor(private readonly adminUserSerivices: AdminUsersService) {}

    @Post('add')
    @ApiResponse({status: 200, description: 'Create admin'})
    @Header('Content-Type', 'application/json')
    postUser( @Body() user: CreateAdminDto) {
      return this.adminUserSerivices.insert(user);
    }
}
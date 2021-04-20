import { Body, Controller, Get, Header, ParseIntPipe, Post, Put, Query, UseGuards, Delete} from '@nestjs/common';
import {ApiResponse, ApiBearerAuth, ApiQuery} from '@nestjs/swagger';
import { JobseekersService } from './jobseekers.service'
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import CreateFriendDto from './dto/create-friend.dto';
import CreateTicketDto from './dto/create-ticket.dto';
import CreateFinancialInfoDto from './dto/create-financialInfo.dto';
import CreateSampleWorkDto from './dto/create-sampleWork.dto';
import { worker } from 'cluster';

@Controller('jobseekers')
export class JobseekersController {
    constructor(private readonly jobseekersService: JobseekersService) {}

    @Post('friends')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    inviteFriend( @Body() friend: CreateFriendDto) {
      return this.jobseekersService.insertFriend(friend);
    }

    @Post('tickets')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    submitTicket( @Body() ticket: CreateTicketDto) {
      return this.jobseekersService.insertTicket(ticket);
    }

    @Get('tickets')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @ApiResponse({status: 200})
    getAlTickets() {
      return this.jobseekersService.getAllTickets();
    }

    @Post('financialInfo')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    submitFinancialInfo( @Body() info: CreateFinancialInfoDto) {
      return this.jobseekersService.insertFinancialInfo(info);
    }

    @Put('financialInfo')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @ApiResponse({status: 200})
    @Header('Content-Type', 'application/json')
    editFinantialInfo(@Query('infoID', ParseIntPipe) infoID: number, @Body() info: CreateFinancialInfoDto) {
        return this.jobseekersService.updateFinancialInfo(infoID, info);
    }

    @Post('sampleWorks')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    addSampleWork( @Body() work: CreateSampleWorkDto) {
      return this.jobseekersService.insertSampleWork(work);
    }

    @Delete('sampleWorks')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @ApiResponse({ status: 200})
    @ApiQuery({
      name: 'workID',
      required: true,
      type: String
    })
    deleteSampleWork( @Query('workID', ParseIntPipe) workID: number ) {
      return this.jobseekersService.deleteSampleWork(workID);
    }
}

import { Body, Controller, Get, Header, Post, Query } from '@nestjs/common';
import { INSTANCE_METADATA_SYMBOL } from '@nestjs/core/injector/instance-wrapper';
import {ApiResponse, ApiBearerAuth, ApiQuery} from '@nestjs/swagger';
import { PersonDto } from './dto/person.dto';   
import { HelloService } from './hello.service';

@Controller('hello')
export class HelloController {
    constructor(
        private readonly helloService: HelloService,
    ){}

    @Post('welcome')
    @ApiResponse({status: 200, description: 'Say Hello'})
    @Header('Content-Type', 'application/json')
    async sayWelcome(@Body() personDto: PersonDto): Promise<{data : String}> {
        let msg = await this.helloService.welcome(personDto);
        return {data : msg};
    }  

    @Get('welcome')
    @ApiResponse({ status: 200})
    @ApiQuery({
        name: 'name',
        required: true,
        type: String
    })
    @ApiQuery({
        name: 'year',
        required: false,
        type: Number,
        description: 'You can ingonre this parameter.'
    })
    async sayWelcome2(@Query('name') iName, @Query('year') iYear): Promise<{data: String}> {
        let msg = await this.helloService.welcome({name: iName, year: iYear});
        return {data : msg}
    }
}
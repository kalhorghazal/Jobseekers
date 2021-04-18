import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {


    @ApiProperty({
        description: 'User Name', 
        default: 'Ghazal', 
        minLength: 3,
        maxLength:20
    })
    readonly name: string;


    @ApiProperty({
        description: 'Books Name', 
        default: []
    })
    readonly books: number[];
}
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class CreateBookDto {

    @ApiProperty({
        type: "string",
        description: 'Book Name', 
        default: 'Emma', 
        minLength: 3,
        maxLength:20
    })
    readonly name: string;

    @ApiProperty({
        type: "number",
        description: 'User ID', 
        default: '810196675', 
        minLength: 8,
        maxLength:12
    })
    readonly userID: number;

    @ApiProperty({
        type: "array",
        description: 'Genre IDs',
        default: []
    })
    readonly genreIDs: number[];
}
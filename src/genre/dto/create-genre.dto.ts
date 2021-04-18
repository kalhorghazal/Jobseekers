import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
export default class CreateGenreDto {
    
    @ApiProperty({
        type: "string",
        description: 'Genre Name', 
        default: 'Fantasy', 
        minLength: 3,
        maxLength:10
    })
    readonly type: string;
}
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class CreateFriendDto {

    @ApiProperty({
        type: "string",
        description: 'Friend Name'
    })
    readonly name: string;

    @ApiProperty({
        type: "string",
        description: 'Friend Email'
    })
    readonly Email: string;

    @ApiProperty({
        type: "number",
        description: 'User ID'
    })
    readonly userID: number;
}
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class CreateFriendDto {

    @ApiProperty({
        type: "string",
        description: 'Friend Name',
        default: 'Ghazal',
    })
    readonly name: string;

    @ApiProperty({
        type: "string",
        description: 'Friend Email',
        default: 'kalhorghazal1378@gmail.com'
    })
    readonly Email: string;

    @ApiProperty({
        type: "number",
        description: 'User ID'
    })
    readonly userID: number;
}
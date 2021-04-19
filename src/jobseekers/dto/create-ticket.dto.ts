import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class CreateTicketDto {

    @ApiProperty({
        type: "string",
        description: 'Ticket Name'
    })
    readonly name: string;

    @ApiProperty({
        type: "string",
        description: 'Type'
    })
    readonly type: string;

    @ApiProperty({
        type: "string",
        description: 'Message'
    })
    readonly message: string;

    @ApiProperty({
        type: "string",
        description: 'Project Code'
    })
    readonly projectCode: string;

    @ApiProperty({
        type: "number",
        description: 'User ID'
    })
    readonly userID: number;
}
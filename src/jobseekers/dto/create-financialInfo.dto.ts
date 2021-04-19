import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class CreateFinancialInfoDto {

    @ApiProperty({
        type: "string",
        description: 'Account Owner Name'
    })
    readonly ownerName: string;

    @ApiProperty({
        type: "string",
        description: 'Shaba Number'
    })
    readonly shabaNumber: string;

    @ApiProperty({
        type: "string",
        description: 'Bank Name'
    })
    readonly bank: string;

    @ApiProperty({
        type: "number",
        description: 'User ID'
    })
    readonly userID: number;
}
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class CreateSampleWorkDto {

    @ApiProperty({
        type: "string",
        description: 'SampleWork Name'
    })
    readonly name: string;

    @ApiProperty({
        type: "string",
        description: 'Description'
    })
    readonly description: string;

    @ApiProperty({
        type: "string",
        description: 'Photo Address'
    })
    readonly photoAddress: string;

    @ApiProperty({
        type: "number",
        description: 'User ID'
    })
    readonly userID: number;
}
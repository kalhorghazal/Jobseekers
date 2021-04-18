import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateAdminDto {

    @ApiProperty({
        description: 'Admin id'
    })
    readonly id: number;

    @ApiProperty({
        description: 'Admin Name'
    })
    readonly username: string;

    @ApiProperty({
        description: 'Admin Password'
    })
    readonly password: string;
}
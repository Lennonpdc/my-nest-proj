import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class CreatePetDto {
    @ApiProperty({ example: 'Percy', type: 'string', required: true })
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    breed: string;

    @ApiPropertyOptional({ type: 'number' })
    @IsOptional()
    @IsNumber()
    age?: number;
}

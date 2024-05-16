import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateUserDto {
    @IsOptional()
    @IsNotEmpty()
    name: string;

    @IsOptional()
    @IsNotEmpty()
    companyName: string;

    @IsOptional()
    @IsNotEmpty()
    contact: string;

}

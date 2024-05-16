import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {
  id: number;

  @IsString({ message: 'valid name is required' })
  @IsNotEmpty()
  name: string;

  @IsString({ message: 'valid name is required' })
  @IsNotEmpty()
  companyName: string;

  @IsNotEmpty()
  contact: number

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  @IsString()
  @Length(8,24)
  password: string;
}
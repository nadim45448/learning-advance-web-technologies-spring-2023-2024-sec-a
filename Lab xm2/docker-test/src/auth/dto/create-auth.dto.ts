import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateAuthDto {

  @IsString({ message: 'valid name is required' })
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(8,20)
  @IsString()
  password: string;


}

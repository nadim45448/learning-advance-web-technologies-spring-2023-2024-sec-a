import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class JobPostDto {
    @IsString({ message: 'Company name must be a string' })
    @IsNotEmpty({ message: 'Company name is required' })
    companyName: string;

    @IsString({ message: 'Title must be a string' })
    @IsNotEmpty({ message: 'Title is required' })
    title: string;

    @IsString({ message: 'Location must be a string' })
    @IsNotEmpty({ message: 'Location is required' })
    location: string;

    @IsNumber({}, { message: 'Salary must be a number' })
    @IsNotEmpty({ message: 'Salary is required' })
    salary: number;

    @IsOptional()
    @IsString({ message: 'Posted by must be a string' })
    postedBy?: string;
}

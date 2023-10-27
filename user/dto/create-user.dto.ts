import { IsAlphanumeric, IsEmail, IsEnum, IsNotEmpty, IsString, Matches, MinLength } from "class-validator"

const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,20}$/;

export class CreateUserDto {
    @IsString()
    @MinLength(2, {message: 'Name must have at least 2 characters.'})
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @MinLength(2, {message: 'Name must have at least 2 characters.'})
    @IsNotEmpty()
    lastName: string;

    @IsString()
    @MinLength(2, {message: 'Name must have at least 2 characters.'})
    @IsNotEmpty()
    company: string;

    @IsString()
    @MinLength(2, {message: 'Name must have at least 2 characters.'})
    @IsNotEmpty()
    occupancy: string;

    @IsEmail(null, {message: 'Please provide valid Email.'})
    @IsNotEmpty()
    email: string;

    @IsString()
    @Matches(passwordRegEx, {message: 'Password must contain minimum 8 and maximum 20 characters, at least one uppercase letter, one lowercase letter, one number and one special characeter.'})
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsEnum(['f', 'm', 'u'])
    gender: string;
}

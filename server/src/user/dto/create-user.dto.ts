import {IsString, MinLength} from "class-validator";

export class CreateUserDto {
    @IsString()
    @MinLength(3, {message: 'Name must be more than 3 characters'})
    username: string;

    @IsString()
    @MinLength(2, {message: 'Name must be more than 3 characters'})
    name: string;

    @MinLength(6, {message: 'Password must be more than 6 characters'})
    password: string;
}

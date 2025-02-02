import { IsEmail, IsString, Length } from 'class-validator'

export class CreateUserDto {
    @IsString()
    @Length(3, 50)
    name

    @IsEmail()
    email

    @IsString()
    @Length(10, 15)
    phone
}

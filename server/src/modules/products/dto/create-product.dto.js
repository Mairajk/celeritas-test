import { IsNumber, IsString, Length } from 'class-validator'

export class CreateUserDto {
    @IsString()
    @Length(3, 50)
    productName

    @IsNumber()
    price
}

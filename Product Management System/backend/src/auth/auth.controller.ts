import { BadRequestException, Body, Controller, Get, Post, Req, Res, UseGuards, ValidationPipe } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from './guards/jwt.guard';


@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService, private jwtService: JwtService ) {}


    @Post("register")
    async register(@Body(ValidationPipe) createUserDto: CreateUserDto)
    {
        const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
        createUserDto.password = hashedPassword;
        return this.authService.register(createUserDto);
    }

    // @UseGuards(LocalGuard)
    // @Public()
    @Post('login')
    async login(
        @Body('email') email: string,
        @Body('password') password: string,
        @Res({passthrough: true}) response: Response, @Req() req: Request
    ) {
        const user = await this.authService.findOne(email);

        if (!user) {
            throw new BadRequestException('invalid credentials');
        }

        if (!await bcrypt.compare(password, user.password)) {
            throw new BadRequestException('invalid credentials');
        }
        const payload ={
            id: user.id,
            roles: [user.type]
        }
        const jwt= await this.jwtService.signAsync(payload);


        // response.cookie("jwt", jwt, {httpOnly: true})

        return {jwt:jwt};
        

        // return "Success";
    }



    @UseGuards(JwtAuthGuard)
    @Get("user")
    async user(@Req() req)
    {   
        // try {
        //     const cookie = request.cookies['jwt'];

        //     const data = await this.jwtService.verifyAsync(cookie);

        //     if (!data) {
        //         throw new UnauthorizedException();
        //     }

        //     const user = await this.authService.findById(data['id']);


        //     return user;
        // } catch (e) {
        //     throw new UnauthorizedException();
        // }
        return req.user;
    }

    @Post('logout')
    async logout(@Res({passthrough: true}) response: Response) {
        response.clearCookie('jwt');

        return {
            message: 'success'
        };
    }

    
}


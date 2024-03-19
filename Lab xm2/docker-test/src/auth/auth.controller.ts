import { BadRequestException, Body, Controller, Post, UsePipes } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginDto } from './dto/login.dto';


@UsePipes()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  async create(@Body() createAuthDto: CreateAuthDto) {
    const hashedPassword = await bcrypt.hash(createAuthDto.password, 10);
        createAuthDto.password = hashedPassword;
    return this.authService.create(createAuthDto);
  }





  @Post('login')
    async login(
        @Body() loginDto: LoginDto,
    ) {
        const user = await this.authService.findOne(loginDto.email);

        if (!user) {
            throw new BadRequestException('invalid credentials');
        }

        else if (await bcrypt.compare(loginDto.password, user.password)) {
          return "Success";
        } 
    }



  // @Get()
  // findAll() {
  //   return this.authService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.authService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
  //   return this.authService.update(+id, updateAuthDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.authService.remove(+id);
  // }
}

import { Body, Controller, Delete, Get, Param, Patch, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

import { AdminService } from './admin.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService){}

    @UseGuards(JwtAuthGuard)
    @Get("type")
    async types(@Req() req) {
        return await this.adminService.typeUser(req.user.id);
    }

    @UseGuards(JwtAuthGuard)
    @Get("users")
    async allUser(@Req() req) {
        return await this.adminService.allUser(req.user.id);
    }
  

    @UseGuards(JwtAuthGuard)
    @Delete('removeUsers/:id')
    async removeUser(@Param('id') userId: number , @Req() req) {
        return await this.adminService.removeUser(userId, req.user.id);
    }

    @UseGuards(JwtAuthGuard)
    @Patch('editUser/:id')
    async editUser(@Param('id') userId: number, @Body() updateUserDto: UpdateUserDto, @Req() req) {
        return await this.adminService.editUser(userId, updateUserDto, req.user.id);
    }

    

    
}

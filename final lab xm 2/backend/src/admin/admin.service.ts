import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';

import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class AdminService {
    constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>){}


    async typeUser(userID: number) {
        return this.userRepository.find({ where: { id: userID }, select: ['type'] });
    }

    async allUser(userID: number) {
        return this.userRepository.find();
    }


    

    async removeUser(id: number, userId: number) {

        const user = await this.userRepository.findOne({where:{id:userId}});
        if (!user || user.type !== 'admin') {
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        }

        const u = await this.userRepository.findOne({ where: { id:id } });
        if (!u) {
            throw new NotFoundException('User not found');
        }
        await this.userRepository.remove(u);

        return "Success";
    }

    async editUser(id: number, updateUserDto: UpdateUserDto, adminId: number) {
        const admin = await this.userRepository.findOne({ where: { id: adminId } });
        if (!admin || admin.type !== 'admin') {
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        }

        const user = await this.userRepository.findOne({where:{id:id}});
        if (!user) {
            throw new NotFoundException('User not found');
        }

        Object.assign(user, updateUserDto);

        await this.userRepository.save(user);

        return 'User updated successfully';
    }
}

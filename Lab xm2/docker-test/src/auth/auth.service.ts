import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LAB } from './entities/auth.entity';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(LAB) private readonly labRepo: Repository<LAB>){}

  create(createAuthDto: CreateAuthDto) {
    return this.labRepo.save(createAuthDto);
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(email: string) {
    return this.labRepo.findOne({where: {email}});
  }


  // update(id: number, updateAuthDto: UpdateAuthDto) {
  //   return `This action updates a #${id} auth`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} auth`;
  // }
}

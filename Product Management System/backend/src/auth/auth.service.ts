import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {

    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>){}


    async register(data: any): Promise<User>
    {
        const user = new User();
        user.name= data.name;
        user.email= data.email;
        user.password= data.password;
        user.type= "user";
    
        return this.userRepository.save(user);
    }

    async findEmail(email: any){
        return await this.userRepository.findOne({ where: { email: email }
        });
    }

    // async findById(id: number) {
    //     //return this.users.find((user) => user.id === id);
    //     return await this.userRepository.find({ where: { id: id } });
    //   }

    async findById(id: number): Promise<User | undefined> {
    return this.userRepository.findOne({where: { id: id }});
    }
    

    

}

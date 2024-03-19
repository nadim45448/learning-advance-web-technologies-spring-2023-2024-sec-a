import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LAB } from './entities/auth.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LAB])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}

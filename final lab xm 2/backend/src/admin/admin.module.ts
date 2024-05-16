import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

import { User } from 'src/entity/user.entity';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [AdminService, JwtAuthGuard],
  controllers: [AdminController]
})
export class AdminModule {}


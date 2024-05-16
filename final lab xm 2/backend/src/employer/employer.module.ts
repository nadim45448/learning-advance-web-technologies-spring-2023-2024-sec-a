import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Job } from 'src/entity/job.entity';
import { EmployerController } from './employer.controller';
import { EmployerService } from './employer.service';

@Module({
  imports:[ TypeOrmModule.forFeature([Job])],
  controllers: [EmployerController],
  providers: [EmployerService],
})
export class EmployerModule {}

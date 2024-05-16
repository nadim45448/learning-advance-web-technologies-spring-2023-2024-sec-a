import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'ormconfig';
import { AdminModule } from './admin/admin.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { EmployerModule } from './employer/employer.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), AuthModule,AdminModule, EmployerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

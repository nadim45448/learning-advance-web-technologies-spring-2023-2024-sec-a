import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards, UsePipes } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { JobPostDto } from './dto/jobPost.dto';
import { EmployerService } from './employer.service';

@Controller('job')
export class EmployerController {
  constructor(private readonly employerService: EmployerService) {}


  @Get()
    async getAllJobs() {
        return this.employerService.getAllJobs();
    }

  @UsePipes()
  @UseGuards(JwtAuthGuard)
  @Post('post')
  async jobPost(@Body() jobPostDto: JobPostDto, @Req() req) {
      jobPostDto.postedBy = req.user.id;
      return this.employerService.jobPost(jobPostDto);
  }

  @UseGuards(JwtAuthGuard)
    @Put('edit/:id')
    async updateJob(@Param('id') id: number, @Body() jobPostDto: JobPostDto) {
        return this.employerService.updateJob(id, jobPostDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    async deleteJob(@Param('id') id: number) {
        return this.employerService.deleteJob(id);
    }


}

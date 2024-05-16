import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Job } from 'src/entity/job.entity';
import { Repository } from 'typeorm';
import { JobPostDto } from './dto/jobPost.dto';

@Injectable()
export class EmployerService {
  constructor(@InjectRepository(Job) private readonly jobRepository: Repository<Job>){}
  
  async getAllJobs(): Promise<Job[]> {
    return this.jobRepository.find();
}
  async jobPost(data: any): Promise<Job> {
        const job = await this.jobRepository.save(data);
        return job;
    }

    async updateJob(id: number, jobPostDto: JobPostDto): Promise<Job> {
      const job = await this.jobRepository.findOne({where:{jobID:id}});
      if (!job) {
          throw new NotFoundException('Job not found');
      }
      Object.assign(job, jobPostDto);
      await this.jobRepository.save(job);
      return job;
  }

  async deleteJob(id: number): Promise<void> {
      const job = await this.jobRepository.findOne({where:{jobID:id}});
      if (!job) {
          throw new NotFoundException('Job not found');
      }
      await this.jobRepository.remove(job);
  }
  
}

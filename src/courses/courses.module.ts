import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesController } from '../courses/courses.controller';
import { CoursesService } from '../courses/courses.service';
import { Course } from './entities/course.entity';
import { Tag } from './entities/tag.entity';

@Module({    
   imports: [TypeOrmModule.forFeature([Course,Tag])],
   controllers:[CoursesController],
   providers:[CoursesService]
})
export class CoursesModule {}

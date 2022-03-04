import { Module } from '@nestjs/common';
import { CoursesController } from '../courses/courses.controller';
import { CoursesService } from '../courses/courses.service';

@Module({    
   controllers:[CoursesController],
   providers:[CoursesService]
})
export class CoursesModule {}

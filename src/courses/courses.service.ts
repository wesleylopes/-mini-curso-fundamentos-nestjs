import { HttpException,HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name:"Fundamentos do framework NestJS",
      description:"Fundamentos do framework NestJS",
      tags:['node.js','nestjs','javascript'],
    },
    {
      id: 2,
      name:"Fundamentos React",
      description:"Fundamentos React",
      tags:['node.js','Reactjs','javascript'],
    },
  ];

  findAll(){
    return this.courses;
  }

  findOne(id:string){
    const course =  this.courses.find((course:Course)=>course.id == Number(id))
    
    if (!course){
      throw new HttpException(`Course ID ${id} not found `, HttpStatus.NOT_FOUND
      );
    }

    return course;   
  }

  create(createCourseDto: any){
    this.courses.push(createCourseDto) //Inclui no Array os dados enviados 
  }

  update(id:string, updateCourseDto: any){
    const indexCourse = this.courses.findIndex((course:Course)=>course.id == Number(id));    
    this.courses[indexCourse] = updateCourseDto;
  }

  remove(id: string){
    const indexCourse =this.courses.findIndex(
      (course:Course) => course.id == Number(id),
    );

    if (indexCourse >= 0){
        this.courses.slice(indexCourse,1);
    }
  }
}

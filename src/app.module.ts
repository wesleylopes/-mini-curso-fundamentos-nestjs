import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
  imports: [
    CoursesModule,
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost',
      port:5432,
      username:'postgres',
      password:'123456',
      database:'postgres',
      autoLoadEntities:true,
      synchronize:true,
    }),
  ],
 
})
export class AppModule {}

/*
   Service = Local onde ficam as regras de negocio; 







*/

import { Injectable } from '@angular/core';

import { CourseItem } from '../entities/courseItem'
import { COURSES } from './courses.service.data'

@Injectable()
export class CourseService {
  getCources(): Promise<CourseItem[]> {
    return Promise.resolve(COURSES);
  }
}

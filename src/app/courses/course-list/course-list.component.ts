import { Component, OnInit } from '@angular/core';

import { CourseItem } from '../../core/entities/courseItem'
import { CourseService } from '../../core/services/courses.service'

@Component({
  selector: 'ng-af-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  providers: [CourseService]
})
export class CourseListComponent implements OnInit {

  courses: CourseItem[];

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.getCourses();
}

  getCourses(): void {
    this.courseService.getCources().then(courses => this.courses = courses);
  }

}

import {Component} from '@angular/core'
import {CourseService} from './course.service'

@Component({
    selector: 'courses',
    template : `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="#course of courses">
        {{ course }}
      </li>
    </ul>
    `,
    providers: [CourseService]  
})

export class CoursesComponent {
    title =  'My Courses'
    courses;
    constructor(_courseService: CourseService) {
        this.courses = _courseService.getCourses();
    }
}
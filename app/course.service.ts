
import {Injectable} from '@angular/core'

@Injectable()
export class CourseService {
    getCourses() : string[] {
        return ['Course One', 'Course Two', 'Course Three'];
    }
}
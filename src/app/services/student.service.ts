import { Injectable } from '@angular/core';
import {Student} from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

 private students: Student[] = [];

  constructor() {
    this.students.push({
      name: 'Oscar',
      controlnumber: '16400937',
      active: true
    });
    this.students.push({
      name: 'Cesar',
      controlnumber: '16400587',
      active: false
    });
    this.students.push({
      name: 'Fer',
      controlnumber: '16400469',
      active: true
    });
   }
   changeStatus(position: number) {
    this.students[position].active = !this.students[position].active;
   }

   getStudent(): Student[] {
     return this.students;
   }

   newStudent(student: Student): void {
     this.students.push(student);
   }
}

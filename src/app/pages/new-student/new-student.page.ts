import { Component, OnInit } from '@angular/core';

import {Student} from '../../models/student';
import {StudentService} from '../../services/student.service';
import {FormGroup, FormBuilder, Validator, Validators} from '@angular/forms';
@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.page.html',
  styleUrls: ['./new-student.page.scss'],
})
export class NewStudentPage implements OnInit {

  constructor(private service: StudentService, private fb: FormBuilder) { }

  myForm: FormGroup;
  submitted = false;

  ngOnInit() {

    this.myForm = this.fb.group({
        name: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
        controlNumber: ['', Validators.compose([Validators.required])]
    });

  }

  saveStudent() {
    this.submitted = true;
    if (this.myForm.valid) {
      this.service.newStudent({
        controlnumber: this.myForm.get('controlNumber').value,
        name: this.myForm.get('name').value,
        active : false
      });
    }
  }

}

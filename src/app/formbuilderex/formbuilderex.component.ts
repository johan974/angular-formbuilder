import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formbuilderex',
  templateUrl: './formbuilderex.component.html',
  styleUrls: ['./formbuilderex.component.css']
})
export class FormbuilderexComponent implements OnInit {
  EMAIL_REGEX = "^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$";
  registrationForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      fname: ['yogesh', Validators.required],
      lname: '',
      email: ['', [Validators.required,
        Validators.pattern(this.EMAIL_REGEX)]],
      address: this.formBuilder.group({
        city: '',
        state: ['', Validators.required]
      })
    });
  }
  onSubmit(formvalue)
  {
    console.log(formvalue);
    console.log(this.registrationForm.value);
  }

}

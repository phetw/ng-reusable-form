import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  parentForm: FormGroup;

  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.parentForm = this.createParentFormGroup();
  }

  createParentFormGroup(): FormGroup {
    return this._fb.group({});
  }
}

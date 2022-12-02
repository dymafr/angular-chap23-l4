import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public form = this.fb.group({
    input: ['', Validators.required],
    majeur: [],
    gender: [],
    toggle: [],
    select: [],
    slider: [],
    date: [],
    start: [],
    end: [],
  });

  constructor(private fb: FormBuilder) {}
}

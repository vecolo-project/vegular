import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bikes-model-form',
  templateUrl: './bikes-model-form.component.html',
  styleUrls: ['./bikes-model-form.component.scss'],
})
export class BikesModelFormComponent implements OnInit {
  form: FormGroup;
  constructor() {}

  ngOnInit(): void {}
  save() {}
}

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bikes-form',
  templateUrl: './bikes-form.component.html',
  styleUrls: ['./bikes-form.component.scss'],
})
export class BikesFormComponent implements OnInit {
  form: FormGroup;
  constructor() {}

  ngOnInit(): void {}

  save(): void {}
}

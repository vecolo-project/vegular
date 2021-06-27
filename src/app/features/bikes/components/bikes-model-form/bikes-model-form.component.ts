import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BikeModel } from 'src/app/shared/models';

@Component({
  selector: 'app-bikes-model-form',
  templateUrl: './bikes-model-form.component.html',
  styleUrls: ['./bikes-model-form.component.scss'],
})
export class BikesModelFormComponent implements OnInit {
  form: FormGroup;

  @Input()
  isEditMode: boolean;

  @Input()
  editModel: BikeModel;

  @Output()
  postModel = new EventEmitter<BikeModel>();

  @Output()
  putModel = new EventEmitter<BikeModel>();

  @Output()
  retrieveEditModel = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}
  save() {}
}

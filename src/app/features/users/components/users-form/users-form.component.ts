import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {User} from 'src/app/shared/models/user.model';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss'],
})
export class UsersFormComponent implements OnInit {
  form: FormGroup;

  @Input()
  public user: User;

  @Output()
  public retrieveEditUser = new EventEmitter<any>();


  constructor(private fp: FormBuilder, private route: ActivatedRoute) {
    this.form = fp.group({});
  }

  ngOnInit(): void {
    if (!this.user) {
      setTimeout(() => {
        this.retrieveEditUser.emit();
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  token: number;

  constructor(private route: ActivatedRoute) {
    this.token = route.snapshot.queryParams.token;
  }

  ngOnInit(): void {
  }

}

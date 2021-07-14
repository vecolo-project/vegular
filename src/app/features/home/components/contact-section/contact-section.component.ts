import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss'],
})
export class ContactSectionComponent implements OnInit {
  contactForm: FormGroup;
  constructor(@Inject(FormBuilder) fb) {
    this.contactForm = fb.group({
      FIRST_NAME: ['', [Validators.required]],
      LAST_NAME: ['', [Validators.required]],
      EMAIL: ['', [Validators.required]],
      COMPANY: ['', [Validators.required]],
      PHONE: ['', [Validators.required]],
      CONTENT: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}
}

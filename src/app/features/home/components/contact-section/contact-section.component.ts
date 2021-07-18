import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../../users/store/users.service';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss'],
})
export class ContactSectionComponent implements OnInit {
  contactForm: FormGroup;
  SITE_KEY: string;

  constructor(@Inject(FormBuilder) fb,
              private usersService: UsersService,) {
    this.contactForm = fb.group({
      FIRST_NAME: ['', [Validators.required]],
      LAST_NAME: ['', [Validators.required]],
      EMAIL: ['', [Validators.required, Validators.email]],
      COMPANY: [''],
      PHONE: ['', [Validators.required, Validators.pattern(/^((\+|00)33|0) *[1-9]([ .-]*[0-9]{2}){4}$/)]],
      CONTENT: ['', [Validators.required]],
      CAPTCHA: ['', [Validators.required]],
    });
    this.SITE_KEY = environment.CAPTCHA_KEY;
  }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(): void {
    this.contactForm.controls.FIRST_NAME.patchValue(null);
    this.contactForm.controls.LAST_NAME.patchValue(null);
    this.contactForm.controls.CONTENT.patchValue(null);
    this.contactForm.controls.EMAIL.patchValue(null);
    this.contactForm.controls.PHONE.patchValue(null);
    this.contactForm.controls.COMPANY.patchValue('');
    this.contactForm.controls.CAPTCHA.patchValue(null);
  }

  onSubmit(): void {
    this.usersService.sendContactForm(
      this.contactForm.value.FIRST_NAME,
      this.contactForm.value.LAST_NAME,
      this.contactForm.value.CONTENT,
      this.contactForm.value.EMAIL,
      this.contactForm.value.PHONE,
      this.contactForm.value.CAPTCHA,
      this.contactForm.value.COMPANY
    );
  }

  resolveCaptcha($event: string): void {
    this.contactForm.controls.CAPTCHA.patchValue($event);
  }
}

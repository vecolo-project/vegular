import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AnimationOptions} from 'ngx-lottie';

@Component({
  selector: 'app-user-newsletter',
  templateUrl: './user-newsletter.component.html',
  styleUrls: ['./user-newsletter.component.scss']
})
export class UserNewsletterComponent implements OnInit {
  @Output()
  sendUserMail = new EventEmitter<{ subject: string, content: string }>();

  emailForm: FormGroup;
  lottieNewsletterOptions: AnimationOptions = {
    path: 'assets/lottie/newsletter.json',
  };

  constructor(@Inject(FormBuilder) fb) {
    this.emailForm = fb.group({
      subject: ['', [Validators.required]],
      content: ['', [Validators.required]],
    });

  }

  ngOnInit(): void {

  }

  onSendEmail(): void {
    this.sendUserMail.emit({
      subject: this.emailForm.value.subject,
      content: this.emailForm.value.content,
    });
  }

}

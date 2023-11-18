import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  public contactForm: FormGroup;
  public submitted: boolean = false;
  public terms: FormControl;
  constructor(
    public api: ApiService,
    public fb: FormBuilder,
    public toast: ToastController
  ) {
    this.contactForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl(''),
      description: new FormControl(''),
    });
    this.terms = new FormControl(false);
  }

  ngOnInit() {}

  public async submit() {
    if (this.contactForm.invalid) {
      let toast = await this.toast.create({
        message: 'Fill Required Fields',
        duration: 2000,
        cssClass: 'error-toast',
      });
      toast.present();
      return;
    }
    if (!this.terms.value) {
      let toast = await this.toast.create({
        message: 'Accept Terms and Conditions',
        duration: 2000,
        cssClass: 'error-toast',
      });
      toast.present();
      return;
    }
    this.api
      .executePut({
        url: 'contacts.json',
        body: { ...this.contactForm.value, conditions: this.terms },
      })
      .subscribe((data) => {
        this.submitted = true;
      });
  }
}

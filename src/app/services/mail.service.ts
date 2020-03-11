import {Inject, Injectable} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SendMessageComponent} from '../modals/send-message/send-message.component';
import {FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ResultComponent} from '../modals/result/result.component';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  mailGroup: FormGroup;
  files = [];

  constructor(
    @Inject('baseUrl') private baseUrl: string,
    private dialog: MatDialog,
    private http: HttpClient
  ) { }

  openMailDialog() {
    this.dialog.open(SendMessageComponent, {
      panelClass: 'mail-dialog-container'
    });
  }

  sendOrderMessage() {
    this.mailGroup.markAllAsTouched();
    if (this.mailGroup.valid) {
      const formData = new FormData();
      formData.append('name', this.mailGroup.get('name').value);
      formData.append('contact', this.mailGroup.get('contact').value);
      formData.append('balance', this.mailGroup.get('balance').value);
      formData.append('description', this.mailGroup.get('description').value);
      formData.append('filesCount', this.files.length.toString());
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.files.length; i++) {
        formData.append('file' + i, this.files[i]);
      }
      this.http.post<{status: string}>(`${this.baseUrl}mail/order`, formData).subscribe(result => {
        if (result.status === 'success') {
          this.mailGroup.patchValue({
            name: '',
            contact: '',
            balance: '',
            description: ''
          });
          this.files = [];
          this.dialog.open(ResultComponent, {});
        }
      });
    }
  }
}

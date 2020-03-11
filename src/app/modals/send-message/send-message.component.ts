import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, Validators} from '@angular/forms';
import {MailService} from '../../services/mail.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SendMessageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    public mailService: MailService
  ) {
    if (!this.mailService.mailGroup) {
      this.mailService.mailGroup = formBuilder.group({
        name: ['', Validators.required],
        contact: ['', Validators.required],
        balance: ['', Validators.required],
        description: ['', Validators.required]
      });
    }
  }

  ngOnInit() {
  }

  prepareFiles(event) {
    for (const file of event.target.files) {
      this.mailService.files.push(file);
    }
  }

  removeFile(file) {
    this.mailService.files.splice(this.mailService.files.indexOf(file), 1);
  }
}

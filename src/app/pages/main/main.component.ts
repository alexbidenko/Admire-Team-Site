import { Component, OnInit } from '@angular/core';
import {MailService} from '../../services/mail.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    public mailService: MailService
  ) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {MailService} from '../../services/mail.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public mailService: MailService
  ) { }

  ngOnInit() {
  }

}

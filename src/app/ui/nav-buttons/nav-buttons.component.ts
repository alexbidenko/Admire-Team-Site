import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-nav-buttons',
  templateUrl: './nav-buttons.component.html',
  styleUrls: ['./nav-buttons.component.scss']
})
export class NavButtonsComponent implements OnInit {

  isMain: boolean;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.isMain = this.getIsMain();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isMain = this.getIsMain();
      }
    });
  }

  getIsMain(): boolean {
    return this.router.url === '/';
  }
}

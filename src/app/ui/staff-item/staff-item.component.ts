import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-staff-item',
  templateUrl: './staff-item.component.html',
  styleUrls: ['./staff-item.component.scss']
})
export class StaffItemComponent implements OnInit {

  @Input() revers: boolean;
  @Input() staff: any;

  constructor() { }

  ngOnInit() {
  }

  getCategoryIcon(): string {
    switch (this.staff.category[0]) {
      case 'leader':
        return 'menu_4';
      case 'frontend':
        return 'menu_1';
      case 'backend':
        return 'menu_2';
      case 'design':
        return 'menu_3';
    }
  }
}

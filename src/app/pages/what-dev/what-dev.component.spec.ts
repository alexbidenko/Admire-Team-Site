import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatDevComponent } from './what-dev.component';

describe('WhatDevComponent', () => {
  let component: WhatDevComponent;
  let fixture: ComponentFixture<WhatDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatRippleModule} from '@angular/material';
import { AboutComponent } from './pages/about/about.component';
import { WhatDevComponent } from './pages/what-dev/what-dev.component';
import { HeaderComponent } from './ui/header/header.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { StaffComponent } from './pages/staff/staff.component';
import { SendMessageComponent } from './modals/send-message/send-message.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import { ResultComponent } from './modals/result/result.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { StaffItemComponent } from './ui/staff-item/staff-item.component';
import { NavButtonsComponent } from './ui/nav-buttons/nav-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    WhatDevComponent,
    HeaderComponent,
    StaffComponent,
    SendMessageComponent,
    ResultComponent,
    PortfolioComponent,
    StaffItemComponent,
    NavButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRippleModule,
    MatDialogModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [
    {provide: 'baseUrl', useValue: 'https://admire.social/api/'}
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    SendMessageComponent,
    ResultComponent
  ]
})
export class AppModule { }

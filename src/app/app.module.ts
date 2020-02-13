import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecureComponent } from './secure/secure.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { AddMeetingComponent } from './add-meeting/add-meeting.component';

  @NgModule({
    declarations: [
      AppComponent,
      DashboardComponent,
      AboutComponent,
      AddMeetingComponent,
      SecureComponent,
    ],
    imports: [
      BrowserModule,
      ReactiveFormsModule,
      AppRoutingModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MatToolbarModule,
      MatIconModule,
      MatButtonModule,
      MatCardModule,
      MatProgressSpinnerModule,
      MatGridListModule,
      MatListModule,
      MatFormFieldModule,
      MatSelectModule,
      MatInputModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './test/question/question.component';
import { TestComponent } from './test/test.component';
import { TestStartComponent } from './test/test-start/test-start.component';
import { SummaryComponent } from './test/summary/summary.component';
import { CapsuleComponent } from './capsule/capsule.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    QuestionComponent,
    TestComponent,
    TestStartComponent,
    SummaryComponent,
    CapsuleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

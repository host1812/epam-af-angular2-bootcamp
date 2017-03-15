import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses';
import { CourseListComponent } from './courses/course-list';
import { CourseDetailComponent } from './courses/course-detail';
import { CourseSearchComponent } from './courses/course-search';
import { FooterComponent } from './footer';
import { HeaderComponent } from './header';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CoursesComponent,
    CourseListComponent,
    CourseDetailComponent,
    FooterComponent,
    HeaderComponent,
    CourseSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

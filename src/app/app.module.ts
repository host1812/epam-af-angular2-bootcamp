import { BrowserModule }         from '@angular/platform-browser';
import { HttpModule }            from '@angular/http';
import { FormsModule }           from '@angular/forms';
import { NgModule }              from '@angular/core';

import { AppComponent }          from './app.component';

import { CoursesComponent }      from './courses';
import { CourseDetailComponent } from './courses/course-detail';
import { CourseSearchComponent } from './courses/course-search';
import { CourseListComponent }   from './courses/course-list';
import { HeaderComponent }       from './header';
import { FooterComponent }       from './footer';



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

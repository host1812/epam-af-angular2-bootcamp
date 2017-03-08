import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { HeaderComponent } from './header/header.component';
import { CourseSearchComponent } from './courses/course-search/course-search.component';

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

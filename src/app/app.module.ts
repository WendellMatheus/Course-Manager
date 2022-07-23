import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponet } from './components/courses/course-list.component';
import { StarComponet } from './components/stat/star.componet';
import { ReplacePipe } from './components/pipe/replace.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponet,
    StarComponet,
    ReplacePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

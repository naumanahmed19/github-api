
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Api, Issues } from './providers/providers';
import { HttpClientModule } from '@angular/common/http';
import { IssueDetailComponent } from './components/issue-detail/issue-detail.component';
import { routes } from './app.routes';
import { IssuesComponent } from './components/issues/issues.component';
import { RelativeTime } from './pipes/relative-time';



@NgModule({
  declarations: [
    AppComponent,
    IssueDetailComponent,
    IssuesComponent,
    RelativeTime
  ],
  imports: [
    routes,
    HttpClientModule,
    BrowserModule
  ],
  providers: [Api, Issues],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssueDetailComponent } from './components/issue-detail/issue-detail.component';
import { IssuesComponent } from './components/issues/issues.component';
import { AppComponent } from './app.component';

export const router: Routes = [
    { path: '', redirectTo: 'issues', pathMatch: 'full'},
    { path: 'issues', component: IssuesComponent},
    { path: 'issue/:number', component: IssueDetailComponent},
   ];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);

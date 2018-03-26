import { Component } from '@angular/core';
import { Issues } from './providers/issues/issues.provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  issuesList: any[] = [];
  repo: any[] = [];
  constructor(private issues: Issues){
    this.getRepoInfo();
    this.getIssues();
  }
  getIssues()
  {
    this.issues.fetchIssues('issues').subscribe((resp:any) => {
      this.issuesList = resp;
    });
  }
  getRepoInfo(){
    this.issues.fetchRepo().subscribe((resp:any) => {
      this.repo = resp;
    });
  }
}


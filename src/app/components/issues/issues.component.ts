import { Issues } from './../../providers/providers';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {

  issuesList: any[] = [];
  repo: any[] = [];
  constructor(private issues: Issues){
    this.getRepoInfo();
    this.getIssues();
  }

  ngOnInit() {
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

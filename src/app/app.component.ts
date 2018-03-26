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
  constructor(private issues: Issues){
    this.getIssues();
  }
  getIssues()
  {
    this.issues.query().subscribe((resp:any) => {
      this.issuesList = resp;
    });
  }
}


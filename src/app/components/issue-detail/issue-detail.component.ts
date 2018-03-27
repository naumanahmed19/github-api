import { Issues } from './../../providers/issues/issues.provider';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.scss']
})
export class IssueDetailComponent implements OnInit {

  number:number;
  issue: any;
  constructor(private route: ActivatedRoute,private issueProvider: Issues) {
    this.route.params.subscribe(params => {
      this.number = +params['number']; // (+) converts string 'id' to a number
   });

   this.issueProvider.fetchSingleIssue(this.number).subscribe(data => {
      this.issue = data;
  });

   }

  ngOnInit() {
  }
}

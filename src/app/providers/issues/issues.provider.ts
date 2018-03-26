import { Injectable } from '@angular/core';
import { Api } from '../api/api';

@Injectable()
export class Issues {
 private route = 'repos/angular/angular.js';
  constructor(public api: Api) {  }

  fetchIssues($route = '',params?: any) {
    return this.api.get(this.route +'/issues' , params);
  }

  fetchRepo(params?: any) {
    return this.api.get(this.route, params);
  }
}

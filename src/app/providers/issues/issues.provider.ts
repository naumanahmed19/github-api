import { Injectable } from '@angular/core';
import { Api } from '../api/api';

@Injectable()
export class Items {
 private route = 'repos/angular/angular.js/issues';
  constructor(public api: Api) {  }

  query(params?: any) {
    return this.api.get(this.route, params);
  }

}

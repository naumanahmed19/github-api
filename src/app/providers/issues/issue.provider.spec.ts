import { Api,Issues } from '../../providers/providers';
import { TestBed ,inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TestService', () => {
    let service: Issues;
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports:  [HttpClientTestingModule],
        providers: [ Api,Issues ]
    });
    service = TestBed.get(Issues);
  });
  it('Should retrive possts from the API via GET', () =>{
    inject([Issues], (ser: Issues) => {
     expect(ser).toBeTruthy();
    });
 });
});


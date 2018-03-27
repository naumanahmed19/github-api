import { Issues } from './issues.provider';
import { TestBed ,inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('IssueService', () => {
    let service: Issues;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports:  [HttpClientTestingModule],
            providers: [Issues]
        });
    });

    service = TestBed.get(Issues);
});

it('Should retrive possts from the API via GET', () =>{
   inject([Issues], (service: Issues) => {
    expect(service).toBeTruthy();
   });
});

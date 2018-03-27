import { HttpClientTestingModule } from '@angular/common/http/testing';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IssueDetailComponent } from './issue-detail.component';
import { ActivatedRoute ,Data } from '@angular/router';
import { Api,Issues } from '../../providers/providers';

describe('IssueDetailComponent', () => {
  let component: IssueDetailComponent;
  let fixture: ComponentFixture<IssueDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueDetailComponent ],
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            data: {
              subscribe: (fn: (value: Data) => void) => fn({
                number: '1234'
              })
            }
          }
        },
        Api,Issues
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

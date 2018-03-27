import { RelativeTime } from './../../pipes/relative-time';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IssuesComponent } from './issues.component';
import { RouterTestingModule} from '@angular/router/testing';
import { Api,Issues } from '../../providers/providers';
describe('IssuesComponent', () => {
  let component: IssuesComponent;
  let fixture: ComponentFixture<IssuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuesComponent ,RelativeTime],
      imports: [RouterTestingModule,HttpClientTestingModule,],
      providers: [
        Api,Issues
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

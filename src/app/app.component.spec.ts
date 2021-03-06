import { HttpClientTestingModule } from '@angular/common/http/testing';


import { RelativeTime } from './pipes/relative-time';
import { IssuesComponent } from './components/issues/issues.component';
import { IssueDetailComponent } from './components/issue-detail/issue-detail.component';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideRoutes } from '@angular/router';
import { router } from './app.routes';
import { RouterTestingModule} from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        IssueDetailComponent,
        IssuesComponent,
        RelativeTime
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(router) // same any normal route config
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  // it(`should have as title 'Open Issues'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});

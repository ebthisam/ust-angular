import { TestBed } from '@angular/core/testing';
import { app } from '../../server';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'testapp' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('testapp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, testapp');
  });

  it('a should have the value equal to 20',()=>{
    let app= new AppComponent();
        expect(app.a).toEqual(20);
  });

  it('a +b should have the value equal to 30',()=>{
    let app= new AppComponent();
        expect(app.a+app.b).toEqual(30);
  });

  it('a-b should have the value equal to 10',()=>{
    let app= new AppComponent();
        expect((app.a-app.b)==10).toBe(true);
  });
});

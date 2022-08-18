import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayComponent } from './today.component';

describe('TodayComponent', () => {
  let component: TodayComponent;
  let fixture: ComponentFixture<TodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayComponent ],
      imports: [ HttpClientModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

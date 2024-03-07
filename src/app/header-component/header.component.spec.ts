import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent.TsComponent } from './header-component.ts.component';

describe('HeaderComponent.TsComponent', () => {
  let component: HeaderComponent.TsComponent;
  let fixture: ComponentFixture<HeaderComponent.TsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent.TsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent.TsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

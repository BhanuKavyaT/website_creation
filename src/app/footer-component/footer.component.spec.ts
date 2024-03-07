import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent.TsComponent } from './footer-component.ts.component';

describe('FooterComponent.TsComponent', () => {
  let component: FooterComponent.TsComponent;
  let fixture: ComponentFixture<FooterComponent.TsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponent.TsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent.TsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

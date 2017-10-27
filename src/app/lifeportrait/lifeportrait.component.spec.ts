import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeportraitComponent } from './lifeportrait.component';

describe('LifeportraitComponent', () => {
  let component: LifeportraitComponent;
  let fixture: ComponentFixture<LifeportraitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeportraitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeportraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

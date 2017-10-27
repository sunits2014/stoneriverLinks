import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifesuiteComponent } from './lifesuite.component';

describe('LifesuiteComponent', () => {
  let component: LifesuiteComponent;
  let fixture: ComponentFixture<LifesuiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifesuiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifesuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

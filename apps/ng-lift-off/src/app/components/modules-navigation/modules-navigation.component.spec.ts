import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesNavigationComponent } from './modules-navigation.component';

describe('ModulesNavigationComponent', () => {
  let component: ModulesNavigationComponent;
  let fixture: ComponentFixture<ModulesNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulesNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulesNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

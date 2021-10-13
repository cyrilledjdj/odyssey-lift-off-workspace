import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSectionsComponent } from './content-sections.component';

describe('ContentSectionsComponent', () => {
  let component: ContentSectionsComponent;
  let fixture: ComponentFixture<ContentSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentSectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

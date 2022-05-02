import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  ApolloTestingController,
  ApolloTestingModule,
} from 'apollo-angular/testing';
import { ComponentsModule } from '../../components/components.module';
import { TracksComponent } from './tracks.component';
import { TRACKS } from './tracks.service';

describe('TracksComponent', () => {
  let component: TracksComponent;
  let fixture: ComponentFixture<TracksComponent>;
  let controller: ApolloTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TracksComponent],
      imports: [ApolloTestingModule, RouterTestingModule, ComponentsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TracksComponent);
    controller = TestBed.inject(ApolloTestingController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    controller.verify();
  });
  it('should create', () => {
    const op = controller.expectOne(TRACKS);
    op.flush({
      data: {
        getTracks: {
          id: '',
          title: '',
          author: {
            photo: '',
            id: '',
            name: '',
          },
          thumbnail: '',
          durationInSeconds: '',
          modulesCount: '',
        },
      },
    });
    expect(component).toBeTruthy();
  });
});

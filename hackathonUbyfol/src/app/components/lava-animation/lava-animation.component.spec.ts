import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LavaAnimationComponent } from './lava-animation.component';

describe('LavaAnimationComponent', () => {
  let component: LavaAnimationComponent;
  let fixture: ComponentFixture<LavaAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LavaAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LavaAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

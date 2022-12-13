import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingItemComponent } from './painting-item.component';

describe('PaintingItemComponent', () => {
  let component: PaintingItemComponent;
  let fixture: ComponentFixture<PaintingItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaintingItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaintingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

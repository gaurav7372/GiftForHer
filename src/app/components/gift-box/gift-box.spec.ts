import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftBox } from './gift-box';

describe('GiftBox', () => {
  let component: GiftBox;
  let fixture: ComponentFixture<GiftBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiftBox],
    }).compileComponents();

    fixture = TestBed.createComponent(GiftBox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

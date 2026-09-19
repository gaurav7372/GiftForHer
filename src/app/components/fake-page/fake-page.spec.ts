import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakePage } from './fake-page';

describe('FakePage', () => {
  let component: FakePage;
  let fixture: ComponentFixture<FakePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FakePage],
    }).compileComponents();

    fixture = TestBed.createComponent(FakePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

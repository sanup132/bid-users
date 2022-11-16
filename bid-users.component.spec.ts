import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidUsersComponent } from './bid-users.component';

describe('BidUsersComponent', () => {
  let component: BidUsersComponent;
  let fixture: ComponentFixture<BidUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BidUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

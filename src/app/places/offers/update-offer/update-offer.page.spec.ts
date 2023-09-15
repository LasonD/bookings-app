import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateOfferPage } from './update-offer.page';

describe('UpdateOfferPage', () => {
  let component: UpdateOfferPage;
  let fixture: ComponentFixture<UpdateOfferPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateOfferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

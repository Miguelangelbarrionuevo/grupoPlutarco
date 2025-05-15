import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteManeraComponent } from './restaurante-manera.component';

describe('RestauranteManeraComponent', () => {
  let component: RestauranteManeraComponent;
  let fixture: ComponentFixture<RestauranteManeraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestauranteManeraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestauranteManeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

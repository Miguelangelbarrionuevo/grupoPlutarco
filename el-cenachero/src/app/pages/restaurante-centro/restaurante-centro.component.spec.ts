import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteCentroComponent } from './restaurante-centro.component';

describe('RestauranteCentroComponent', () => {
  let component: RestauranteCentroComponent;
  let fixture: ComponentFixture<RestauranteCentroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestauranteCentroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestauranteCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

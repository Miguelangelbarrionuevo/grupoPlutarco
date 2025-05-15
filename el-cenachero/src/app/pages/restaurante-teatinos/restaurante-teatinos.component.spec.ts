import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteTeatinosComponent } from './restaurante-teatinos.component';

describe('RestauranteTeatinosComponent', () => {
  let component: RestauranteTeatinosComponent;
  let fixture: ComponentFixture<RestauranteTeatinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestauranteTeatinosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestauranteTeatinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

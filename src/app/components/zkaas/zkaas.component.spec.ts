import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZkaasComponent } from './zkaas.component';

describe('ZkaasComponent', () => {
  let component: ZkaasComponent;
  let fixture: ComponentFixture<ZkaasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZkaasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZkaasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

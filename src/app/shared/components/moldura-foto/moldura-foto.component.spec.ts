import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolduraFotoComponent } from './moldura-foto.component';

describe('MolduraFotoComponent', () => {
  let component: MolduraFotoComponent;
  let fixture: ComponentFixture<MolduraFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MolduraFotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MolduraFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolduraFotoComponent } from './moldura-foto.component';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';

describe('MolduraFotoComponent', () => {
  let component: MolduraFotoComponent;
  let fixture: ComponentFixture<MolduraFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MolduraFotoComponent],
      providers: [UniqueIdService],
    }).compileComponents();

    fixture = TestBed.createComponent(MolduraFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

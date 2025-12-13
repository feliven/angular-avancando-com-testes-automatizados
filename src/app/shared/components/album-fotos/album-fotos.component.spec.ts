import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumFotosComponent } from './album-fotos.component';

describe('AlbumFotosComponent', () => {
  let component: AlbumFotosComponent;
  let fixture: ComponentFixture<AlbumFotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumFotosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

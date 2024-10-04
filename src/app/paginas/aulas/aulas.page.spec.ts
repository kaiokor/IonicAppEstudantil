import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AulasPage } from './aulas.page';

describe('AulasPage', () => {
  let component: AulasPage;
  let fixture: ComponentFixture<AulasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AulasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

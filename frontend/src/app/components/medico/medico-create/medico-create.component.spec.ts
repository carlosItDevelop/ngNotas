import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoCreateComponent } from './medico-create.component';

describe('MedicoCreateComponent', () => {
  let component: MedicoCreateComponent;
  let fixture: ComponentFixture<MedicoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { EstadoPacienteService } from './estado-paciente.service';

describe('EstadoPacienteService', () => {
  let service: EstadoPacienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadoPacienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { CoreService } from './../../../shared/services/core.service';
import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from '../../../models/paciente.model';


@Component({
  selector: 'app-paciente-delete',
  templateUrl: './paciente-delete.component.html',
  styleUrls: ['./paciente-delete.component.css']
})
export class PacienteDeleteComponent implements OnInit {

  paciente: Paciente = {
    id: null,
    nome: "",
    cpf: "",
    estado: ""
  };

  //paciente: Paciente

  constructor(private router: Router,
    private route: ActivatedRoute,
    private pacienteService: PacienteService,
    private coreService: CoreService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.pacienteService.readById(id).subscribe(paciente => {
      this.paciente = paciente
    })
  }

  deletePaciente(): void {
    this.pacienteService.delete(this.paciente.id).subscribe(() => {
      this.coreService.showMessage('Paciente excluído com sucesso!', true)
      this.router.navigate(['/pacientes'])
    })
  }

  cancel(): void {
    this.router.navigate(['/pacientes'])
  }

}


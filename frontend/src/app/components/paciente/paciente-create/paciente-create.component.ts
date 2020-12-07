import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
import { Router } from '@angular/router';
import { Paciente } from '../../../models/paciente.model';

@Component({
  selector: 'app-paciente-create',
  templateUrl: './paciente-create.component.html',
  styleUrls: ['./paciente-create.component.css']
})
export class PacienteCreateComponent implements OnInit {

  paciente: Paciente = {
    id: null,
    nome: "",
    cpf: "",
    estado: ""
  };


  constructor(private pacienteService: PacienteService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createPaciente(): void {
    this.pacienteService.create(this.paciente).subscribe(() => {
      this.pacienteService.showMessage("Paciente criado com sucesso!")
      this.router.navigate(['/pacientes'])
    })

  }

  cancel(): void {
    this.router.navigate(['/pacientes'])
  }

}


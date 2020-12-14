import { EstPaciente } from './../../../models/estPaciente.model';
import { EstadoPacienteService } from './../../../shared/services/estado-paciente.service';
import { CoreService } from './../../../shared/services/core.service';
import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
import { Router } from '@angular/router';
import { Paciente } from '../../../models/paciente.model';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';



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

  estados: EstPaciente[];


  constructor(private pacienteService: PacienteService,
              private router: Router,
              private coreService: CoreService, private estadoPacienteService: EstadoPacienteService) { }

  ngOnInit(): void {
    this.estadoPacienteService.read().subscribe(estados => {
      this.estados = estados;
      console.log(estados);
    })
  }

  createPaciente(): void {
    this.pacienteService.create(this.paciente).subscribe(() => {
      this.coreService.showMessage("Paciente criado com sucesso!")
      this.router.navigate(['/pacientes'])
    })
  }

  cancel(): void {
    this.router.navigate(['/pacientes'])
  }

}


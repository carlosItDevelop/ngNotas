import { Observable } from 'rxjs';
import { CoreService } from './../../../shared/services/core.service';
import { Paciente } from './../../../models/paciente.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from '../../services/paciente.service';
import { EstPaciente } from 'src/app/models/estPaciente.model';
import { EstadoPacienteService } from 'src/app/shared/services/estado-paciente.service';


@Component({
  selector: 'app-paciente-update',
  templateUrl: './paciente-update.component.html',
  styleUrls: ['./paciente-update.component.css']
})
export class PacienteUpdateComponent implements OnInit {

  paciente: Paciente = {
    id: null,
    nome: "",
    cpf: "",
    estado: ""
  };

  estados: EstPaciente[]


  constructor(
    private pacienteService: PacienteService,
    private router: Router,
    private route: ActivatedRoute,
    private coreService: CoreService, private estadoPacienteService: EstadoPacienteService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.pacienteService.readById(id).subscribe(paciente => {
      this.paciente = paciente
    });
    this.estadoPacienteService.read().subscribe(estados => {
      this.estados = estados;
      console.log(estados);
    });
  }

  updatePaciente(): void {
    this.pacienteService.update(this.paciente).subscribe(() => {
      this.coreService.showMessage('Paciente atualizado com sucesso!')
      this.router.navigate(['/pacientes'])
    })
  }

  cancel(): void {
    this.router.navigate(['/pacientes']);
  }

}


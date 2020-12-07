import { Paciente } from './../../../models/paciente.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from '../../services/paciente.service';


@Component({
  selector: 'app-paciente-update',
  templateUrl: './paciente-update.component.html',
  styleUrls: ['./paciente-update.component.css']
})
export class PacienteUpdateComponent implements OnInit {

  paciente: Paciente

  constructor(
    private pacienteService: PacienteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.pacienteService.readById(id).subscribe(paciente => {
      this.paciente = paciente
    })
  }

  updatePaciente(): void {
    this.pacienteService.update(this.paciente).subscribe(() => {
      this.pacienteService.showMessage('Paciente atualizado com sucesso!')
      this.router.navigate(['/pacientes'])
    })
  }

  cancel(): void {
    this.router.navigate(['/pacientes']);
  }

}


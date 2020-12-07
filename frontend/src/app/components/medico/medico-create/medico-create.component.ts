import { CoreService } from './../../../shared/services/core.service';
import { MedicoService } from './../../services/medico.service';
import { Component, OnInit } from '@angular/core';
import { Medico } from 'src/app/models/medico.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-medico-create',
  templateUrl: './medico-create.component.html',
  styleUrls: ['./medico-create.component.css']
})
export class MedicoCreateComponent implements OnInit {

  medico: Medico = 
  {
    id: null,
    nome: "",
    especialidade: "",
    crm: ""
  };

  constructor(private medicoService: MedicoService,
    private router: Router, private coreService: CoreService) { }

  ngOnInit(): void {
  }

  createMedico(): void {
    this.medicoService.create(this.medico).subscribe(() => {
      this.coreService.showMessage("Médico criado com sucesso!")
      this.router.navigate(['/medicos'])
    })
  }
  
  cancel(): void {
    this.router.navigate(['/medicos'])
  }

}

import { CoreService } from './../../../shared/services/core.service';
import { MedicoService } from '../../services/medico.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Medico } from '../../../models/medico.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-medico-delete',
  templateUrl: './medico-delete.component.html',
  styleUrls: ['./medico-delete.component.css']
})
export class MedicoDeleteComponent implements OnInit {

  medico: Medico = 
  {
    id: null,
    nome: "",
    especialidade: "",
    crm: ""
  };

  //medico: Medico

  constructor(private router: Router,
    private route: ActivatedRoute,
    private medicoService: MedicoService,
    private coreService: CoreService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.medicoService.readById(id).subscribe(medico => {
      this.medico = medico
    })
  }

  deleteMedico(): void {
    this.medicoService.delete(this.medico.id).subscribe(() => {
      this.coreService.showMessage('Médico excluído com sucesso!', true)
      this.router.navigate(['/medicos'])
    })
  }

  cancel(): void {
    this.router.navigate(['/medicos'])
  }

}

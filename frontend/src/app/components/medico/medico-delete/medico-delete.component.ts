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

  medico: Medico

  constructor(private router: Router,
    private route: ActivatedRoute,
    private medicoService: MedicoService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.medicoService.readById(id).subscribe(medico => {
      this.medico = medico
    })
  }

  deleteMedico(): void {
    this.medicoService.delete(this.medico.id).subscribe(() => {
      this.medicoService.showMessage('Médico excluído com sucesso!')
      this.router.navigate(['/medicos'])
    })
  }

  cancel(): void {
    this.router.navigate(['/medicos'])
  }

}

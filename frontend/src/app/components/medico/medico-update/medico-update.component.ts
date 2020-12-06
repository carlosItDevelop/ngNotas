import { ActivatedRoute, Router } from '@angular/router';
import { MedicoService } from '../../services/medico.service';
import { Component, OnInit } from '@angular/core';
import { Medico } from '../../../models/medico.model';


@Component({
  selector: 'app-medico-update',
  templateUrl: './medico-update.component.html',
  styleUrls: ['./medico-update.component.css']
})
export class MedicoUpdateComponent implements OnInit {

  medico: Medico

  constructor(
    private medicoService: MedicoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.medicoService.readById(id).subscribe(medico => {
      this.medico = medico
    })
  }

  updateMedico(): void {
    this.medicoService.update(this.medico).subscribe(() => {
      this.medicoService.showMessage('Médico atualizado com sucesso!')
      this.router.navigate(['/medicos'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
